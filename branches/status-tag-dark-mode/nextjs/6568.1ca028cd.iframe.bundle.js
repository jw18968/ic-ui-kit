"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[6568],{"../web-components/dist/esm/ic-navigation-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_navigation_button:()=>NavigationButton});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/helpers-35ac5e03.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),MUTABLE_ATTRIBUTES=[].concat((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__.A)(_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_2__.y),["title"]),NavigationButton=function(){function NavigationButton(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__.A)(this,NavigationButton),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.inheritedAttributes={},this.hostMutationObserver=null,this.hostMutationCallback=function(mutationList){var forceComponentUpdate=!1;mutationList.forEach((function(_ref){var attributeName=_ref.attributeName;MUTABLE_ATTRIBUTES.includes(attributeName)&&(_this.inheritedAttributes[attributeName]=_this.el.getAttribute(attributeName),forceComponentUpdate=!0)})),forceComponentUpdate&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.f)(_this)},this.initialAppearance=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_2__.d)(),this.mode="navbar",this.download=!1,this.href=void 0,this.hreflang=void 0,this.label=void 0,this.referrerpolicy=void 0,this.rel=void 0,this.target=void 0}var _setFocus;return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.A)(NavigationButton,[{key:"componentWillLoad",value:function componentWillLoad(){this.inheritedAttributes=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_2__.x)(this.el,MUTABLE_ATTRIBUTES)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_2__.a)([{prop:this.label,propName:"label"}],"Navigation Button"),this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{attributes:!0})}},{key:"componentWillRender",value:function componentWillRender(){var iconEl=this.el.querySelector('[slot="icon"]');null!==iconEl&&iconEl.setAttribute("viewBox","0 0 24 24")}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _a;null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}},{key:"navBarMenuOpenHandler",value:function navBarMenuOpenHandler(){this.mode="menu"}},{key:"navBarMenuCloseHandler",value:function navBarMenuCloseHandler(){this.mode="navbar"}},{key:"themeChangeHandler",value:function themeChangeHandler(ev){var theme=ev.detail;this.initialAppearance=theme.mode}},{key:"setFocus",value:(_setFocus=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(){return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.buttonEl&&this.buttonEl.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"render",value:function render(){var _this2=this,href=this.href,target=this.target,rel=this.rel,download=this.download,referrerpolicy=this.referrerpolicy,label="",className="",variant="icon",appearance=this.initialAppearance,size="large",fullWidth=!1,disableTooltip=!1;"menu"===this.mode&&(label=this.label,variant="tertiary",appearance=_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_3__.I.Default,size="medium",fullWidth=!0,className="popout-menu-button",disableTooltip=!0);var buttonProps={variant,appearance,size,href,target,rel,download,referrerpolicy,fullWidth,disableTooltip};return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.H,{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__.A)({},"in-side-menu","menu"===this.mode)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-button",Object.assign({class:className,"aria-label":"icon"==variant?this.label:null,ref:function ref(el){return _this2.buttonEl=el}},buttonProps,this.inheritedAttributes),label,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{slot:"left-icon",name:"icon"}),(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"badge")&&"icon"===variant&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"badge"})))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}}]),NavigationButton}();NavigationButton.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;margin-right:var(--ic-space-xs);list-style:none}:host(.in-side-menu){margin-right:0}:host::part(button){height:100%;min-height:2.5rem}'}}]);