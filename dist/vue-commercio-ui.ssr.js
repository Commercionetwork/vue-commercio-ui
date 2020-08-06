'use strict';Object.defineProperty(exports,'__esModule',{value:true});//
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

var script = {
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
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
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
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.items.length > 0)?_vm._ssrNode("<div data-test=\"items\">","</div>",[_vm._ssrNode("<ul class=\"list-group list-group-flush\">","</ul>",_vm._l((_vm.items),function(item,index){return _vm._ssrNode("<li class=\"list-group-item\">","</li>",[_vm._t("default",null,{"data":item})],2)}),0)]):_vm._e(),_vm._ssrNode(" "+((_vm.isFetching)?("<div data-test=\"loading\" class=\"com-font-s14-w700\">"+(_vm._s(_vm.loadingMessage))+"</div>"):"<!---->")+" "+((!_vm.isFetching && _vm.items.length <= 0)?("<div data-test=\"empty-list\" class=\"py-3 com-font-s14-w700\">"+(_vm._s(_vm.emptyMessage))+"</div>"):"<!---->"))],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = "data-v-0faf3b96";
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
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

var script$1 = {
  name: "ListViewItem",
  description: "display a ListView item",
  props: {
    cols: {
      type: String,
      default: "3",
      validator: function validator(value) {
        return ["3", "4"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    mainContent: function mainContent() {
      return this.cols === "3"
        ? "col-12 col-md-8 py-1 py-md-0"
        : "col-12 col-md-9 py-1 py-md-0";
    },
    rightContent: function rightContent() {
      return this.cols === "3"
        ? "col-12 col-md-3 py-1 py-md-0"
        : "col-12 col-md-2 py-1 py-md-0";
    }
  }
};/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row py-1 d-flex flex-row align-items-center"},[_vm._ssrNode("<div class=\"col-12 col-md-1 py-1 py-md-0\">","</div>",[_vm._t("left-content")],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.mainContent))+">","</div>",[_vm._t("main-content")],2),_vm._ssrNode(" <div class=\"col-12 d-md-none\"><hr></div> "),_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.rightContent))+">","</div>",[_vm._t("right-content")],2)],2)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = "data-v-4744d298";
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
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

var script$2 = {
  name: "NavBar",
  description: "Display the navigation bar"
};/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row my-3"},[_vm._ssrNode("<div class=\"col-sm-12 offset-sm-0 col-md-10 offset-md-1 d-none d-sm-block\">","</div>",[_vm._ssrNode("<div class=\"btn-group d-flex\">","</div>",[_vm._t("default")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-12 d-block d-sm-none\">","</div>",[_vm._ssrNode("<div class=\"btn-group-vertical d-flex\">","</div>",[_vm._t("default")],2)])],2)};
var __vue_staticRenderFns__$2 = [];

  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = undefined;
  /* module identifier */
  var __vue_module_identifier__$2 = "data-v-374afa27";
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$2 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
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

var script$3 = {
  name: "SearchBar",
  description: "Display the search bar",
  props: {
    placeholderMessage: {
      type: String,
      default: "Search...",
      note: "The input search placeholder"
    }
  },
  data: function data() {
    return {
      query: ""
    };
  },
  methods: {
    onSearch: function onSearch() {
      this.$emit("search-bar", this.query);
    }
  },
  mounted: function mounted() {
    this.$refs.inputSearch.focus();
  }
};/* script */
var __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.onSearch($event)}}},[_vm._ssrNode("<div class=\"row d-flex align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col-2 col-sm-1 d-flex justify-content-center\">","</div>",[_vm._t("left-content")],2),_vm._ssrNode(" <div class=\"col-8 col-sm-10 d-flex justify-content-center\"><input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.placeholderMessage))+" aria-label=\"Search\" aria-describedby=\"search-field\""+(_vm._ssrAttr("value",(_vm.query)))+" class=\"form-control bg-light rounded-pill com-font-s14-w300\"></div> "),_vm._ssrNode("<div class=\"col-2 col-sm-1 d-flex justify-content-center\">","</div>",[_vm._t("right-content")],2)],2)])};
var __vue_staticRenderFns__$3 = [];

  /* style */
  var __vue_inject_styles__$3 = undefined;
  /* scoped */
  var __vue_scope_id__$3 = undefined;
  /* module identifier */
  var __vue_module_identifier__$3 = "data-v-48c25945";
  /* functional template */
  var __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$3 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    undefined,
    undefined,
    undefined
  );/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,ListView: __vue_component__,ListViewItem: __vue_component__$1,NavBar: __vue_component__$2,SearchBar: __vue_component__$3});// Import vue components

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
}exports.ListView=__vue_component__;exports.ListViewItem=__vue_component__$1;exports.NavBar=__vue_component__$2;exports.SearchBar=__vue_component__$3;exports.default=plugin;