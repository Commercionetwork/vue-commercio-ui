var e,t=function(e,t,n,o,i,a,r,s,c,d){"boolean"!=typeof r&&(c=s,s=r,r=!1);var l,u="function"==typeof n?n.options:n;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),o&&(u._scopeId=o),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=l):t&&(l=r?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),l)if(u.functional){var m=u.render;u.render=function(e,t){return l.call(t),m(e,t)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,l):[l]}return n},n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var o={};var i=t({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-commercio-ui-sample"},[n("p",[e._v("The counter is set to "),n("b",[e._v(e._s(e.counter))]),e._v(".")]),e._v(" "),n("button",{on:{click:function(t){e.counter+=1}}},[e._v("Click +1")]),e._v(" "),n("button",{on:{click:function(t){e.counter-=1}}},[e._v("Click -1")]),e._v(" "),n("button",{on:{click:function(t){e.counter=e.initCounter}}},[e._v("Reset")])])},staticRenderFns:[]},function(e){e&&e("data-v-612adfb4_0",{source:".vue-commercio-ui-sample[data-v-612adfb4]{display:block;width:400px;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px}.vue-commercio-ui-sample p[data-v-612adfb4]{margin:0 0 1em}",map:void 0,media:void 0})},{name:"VueCommercioUiSample",data:function(){return{counter:5,initCounter:5}}},"data-v-612adfb4",!1,void 0,function(t){return function(t,i){return function(t,i){var a=n?i.media||"default":t,r=o[a]||(o[a]={ids:new Set,styles:[]});if(!r.ids.has(t)){r.ids.add(t);var s=i.source;if(i.map&&(s+="\n/*# sourceURL="+i.map.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",i.media&&r.element.setAttribute("media",i.media),void 0===e&&(e=document.head||document.getElementsByTagName("head")[0]),e.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(s),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var c=r.ids.size-1,d=document.createTextNode(s),l=r.element.childNodes;l[c]&&r.element.removeChild(l[c]),l.length?r.element.insertBefore(d,l[c]):r.element.appendChild(d)}}}(t,i)}},void 0),a=Object.freeze({VueCommercioUiSample:i});var r={install:function e(t){e.installed||(e.installed=!0,Object.keys(a).forEach(function(e){t.component(e,a[e])}))}},s=null;"undefined"!=typeof window?s=window.Vue:"undefined"!=typeof global&&(s=global.Vue),s&&s.use(r);export default r;export{i as VueCommercioUiSample};