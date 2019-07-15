'use strict';Object.defineProperty(exports,'__esModule',{value:true});var script = {
    name: 'VueCommercioUiSample', // vue component name
    data: function data() {
        return {
            counter: 5,
            initCounter: 5,
        };
    },
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;function createInjectorSSR(context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__;
  }

  if (!context) { return function () {}; }

  if (!('styles' in context)) {
    context._styles = context._styles || {};
    Object.defineProperty(context, 'styles', {
      enumerable: true,
      get: function get() {
        return context._renderStyles(context._styles);
      }
    });
    context._renderStyles = context._renderStyles || renderStyles;
  }

  return function (id, style) {
    return addStyle(id, style, context);
  };
}

function addStyle(id, css, context) {
  var group =  css.media || 'default' ;
  var style = context._styles[group] || (context._styles[group] = {
    ids: [],
    css: ''
  });

  if (!style.ids.includes(id)) {
    style.media = css.media;
    style.ids.push(id);
    var code = css.source;

    style.css += code + '\n';
  }
}

function renderStyles(styles) {
  var css = '';

  for (var key in styles) {
    var style = styles[key];
    css += '<style data-vue-ssr-id="' + Array.from(style.ids).join(' ') + '"' + (style.media ? ' media="' + style.media + '"' : '') + '>' + style.css + '</style>';
  }

  return css;
}

var server = createInjectorSSR;/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-commercio-ui-sample"},[_vm._ssrNode("<p>The counter is set to <b>"+_vm._ssrEscape(_vm._s(_vm.counter))+"</b>.</p> <button>Click +1</button> <button>Click -1</button> <button>Reset</button>")])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-612adfb4_0", { source: ".vue-commercio-ui-sample[data-v-612adfb4]{display:block;width:400px;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px}.vue-commercio-ui-sample p[data-v-612adfb4]{margin:0 0 1em}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-612adfb4";
  /* module identifier */
  var __vue_module_identifier__ = "data-v-612adfb4";
  /* functional template */
  var __vue_is_functional_template__ = false;

  
  var vueCommercioUiSample = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$1 = {
  name: "ListView",
  description: "Render a content as a list",
  props: {
    isFetching: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: function () { return []; }
    },
    emptyMessage: {
      type: String,
      default: "Empty list",
      note: "The message showed if there is no item"
    },
    loadingMessage: {
      type: String,
      required: true,
      note: "The message showed while loading"
    }
  },
  data: function data() {
    return {
      bottomReached: false
    };
  },
  watch: {
    bottomReached: function bottomReached(value) {
      if (value) {
        this.$emit("bottom-reached");
      }
    }
  },
  methods: {
    bottomVisible: function bottomVisible() {
      if (this.isFetching) {
        return;
      }
      var scrollY = Math.ceil(window.scrollY);
      var visible = document.documentElement.clientHeight;
      var pageHeight = document.documentElement.scrollHeight;
      var bottomOfPage = visible + scrollY >= pageHeight;
      this.bottomReached = bottomOfPage || pageHeight < visible;
    }
  },
  created: function created() {
    window.addEventListener("scroll", this.bottomVisible);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("scroll", this.bottomVisible);
  }
};/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.items.length > 0)?_vm._ssrNode("<div data-test=\"items\">","</div>",[_vm._ssrNode("<ul class=\"list-group list-group-flush\">","</ul>",_vm._l((_vm.items),function(item,index){return _vm._ssrNode("<li class=\"list-group-item\">","</li>",[_vm._t("default",null,{"data":item})],2)}),0)]):_vm._e(),_vm._ssrNode(" "+((_vm.isFetching)?("<div data-test=\"loading\" class=\"com-font-s14-w700\">"+(_vm._s(_vm.loadingMessage))+"</div>"):"<!---->")+" "+((!_vm.isFetching && _vm.items.length <= 0)?("<div data-test=\"empty-list\" class=\"py-3 com-font-s14-w700\">"+(_vm._s(_vm.emptyMessage))+"</div>"):"<!---->"))],2)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = function (inject) {
    if (!inject) { return }
    inject("data-v-04c75724_0", { source: "@import url(https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Mono);#app,body,html{height:100%;background-color:#ededed}a,h1{color:#38ba8c}a:hover{color:#38ba8c;text-decoration:none}h2,h3,h4,h5,h6{color:#202020}div,p,span{color:#202020}.com-pointer{cursor:pointer}.com-nowrap{white-space:nowrap}.com-scroll-y{overflow-y:scroll}.com-required-field label::after{content:\"*\";color:#e30;margin-left:.25rem}.com-required-field-error{margin-bottom:3px;position:absolute;bottom:-3px;left:0}.com-white-background{background-color:#fff}.com-gray-darkest{color:#202020}.com-gray-darker{color:#3c3c3c}.com-gray-dark{color:#4f4f4f}.com-gray{color:#6f6f6f}.com-gray-light{color:#7e7e7e}.com-gray-lighter{color:#ededed}.com-gray-lightest{color:#fafafa}.com-font-s30-w900{font-size:30px;font-weight:900}.com-font-s20-w800{font-size:20px;font-weight:800}.com-font-s16-w700{font-size:16px;font-weight:700}.com-font-s14-w700{font-size:14px;font-weight:700}.com-font-s14-w400{font-size:14px;font-weight:400}.com-font-s14-w300{font-size:14px;font-weight:300}.com-font-s13-w700{font-size:13px;font-weight:700}.com-font-s13-w400{font-size:13px;font-weight:400}.com-font-s12-w700{font-size:12px;font-weight:700}.com-font-s12-w400{font-size:12px;font-weight:400}.com-font-s12-w300{font-size:12px;font-weight:300}.com-font-s11-w700{font-size:11px;font-weight:700}.com-font-s11-w400{font-size:11px;font-weight:400}.com-font-s10-w700{font-size:10px;font-weight:700}.com-border-0010{border-width:0 0 1px 0}.com-border-5-lighter{border:5px solid #ededed}.com-border-5-dashed{border:5px dashed #ededed}.com-border-2-dashed{border:2px dashed #7e7e7e}.com-svg svg{width:100%;height:100%}.com-image-h35-w35{height:35px;width:35px}.com-image-h50-w50{height:50px;width:50px}.com-image-h100-w100{height:100px;width:100px}.com-container-w580{max-width:580px}.com-container-w740{max-width:740px}.com-dashboard-row{display:flex;flex-wrap:wrap}.com-dashboard-row>div[class*=col-]{display:flex}.com-dashboard-card,.com-dashboard-card-header{border-radius:10px}.com-dashboard-card{height:215px;width:160px}.com-modal-big{min-width:90vw}.com-modal-big .modal-content{min-height:90vh}.com-modal-small{min-width:45vw}.com-modal-small .modal-content{min-height:45vh}.com-modal-big .modal-footer,.com-modal-big .modal-header,.com-modal-small .modal-footer,.com-modal-small .modal-header{border:none}.slidecontainer{width:100%}.slider{-webkit-appearance:none;width:100%;height:15px;border-radius:5px;background:#ededed;outline:0;opacity:.7;-webkit-transition:.2s;transition:opacity .2s}.slider:hover{opacity:1}.slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:25px;height:25px;border-radius:50%;background:#38ba8c;cursor:pointer}.slider::-moz-range-thumb{width:25px;height:25px;border-radius:50%;background:#38ba8c;cursor:pointer}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = "data-v-04c75724";
  /* functional template */
  var __vue_is_functional_template__$1 = false;

  
  var ListView = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    server
  );/* eslint-disable import/prefer-default-export */var components = /*#__PURE__*/Object.freeze({VueCommercioUiSample: vueCommercioUiSample,ListView: ListView});// Import vue components

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Object.keys(components).forEach(function (componentName) {
    Vue.component(componentName, components[componentName]);
  });
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}exports.ListView=ListView;exports.VueCommercioUiSample=vueCommercioUiSample;exports.default=plugin;