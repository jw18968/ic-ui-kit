"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[7626],{"../web-components/dist/esm/ic-footer.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_footer:()=>Footer});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-988ce06b.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),Footer=function(){function Footer(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__.A)(this,Footer),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.footerResized=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"footerResized",7),this.resizeObserver=null,this.resizeObserverCallback=function(currSize){currSize!==_this.deviceSize&&(_this.deviceSize=currSize),_this.footerResized.emit()},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){var currSize=(0,_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.e)();_this.resizeObserverCallback(currSize)})),_this.resizeObserver.observe(_this.footerEl)},this.deviceSize=_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.I.XL,this.foregroundColor=(0,_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.b)(),this.aligned="left",this.breakpoint="medium",this.caption=void 0,this.copyright=!0,this.description=void 0,this.groupLinks=!1}return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__.A)(Footer,[{key:"disconnectedCallback",value:function disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}},{key:"componentWillLoad",value:function componentWillLoad(){this.deviceSize=(0,_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.e)()}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.runResizeObserver)}},{key:"themeChangeHandler",value:function themeChangeHandler(ev){var theme=ev.detail;this.foregroundColor=theme.mode}},{key:"isSmall",value:function isSmall(){var bp=this.breakpoint;return"extra small"===bp?this.deviceSize<_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.I.XS:"small"===bp?this.deviceSize<_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.I.S:"medium"===bp?this.deviceSize<_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.I.M:"large"===bp?this.deviceSize<_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.I.L:"extra large"===bp&&this.deviceSize<_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.I.XL}},{key:"render",value:function render(){var _this2=this,aligned=this.aligned,caption=this.caption,copyright=this.copyright,description=this.description,groupLinks=this.groupLinks,foregroundColor=this.foregroundColor,small=this.isSmall();return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},"ic-footer",!0),"footer-".concat(small?"small":"sparse"),!0),"footer-".concat(groupLinks?"grouped":"ungrouped"),!0),"ic-footer-foreground-".concat(foregroundColor),!0),"ic-footer-".concat(_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Dark),foregroundColor===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Dark),"ic-footer-".concat(_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Light),foregroundColor===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Light)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("footer",{ref:function ref(footerEl){return _this2.footerEl=footerEl}},((0,_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"description")||description)&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-description"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-section-container",{aligned,fullHeight:!0},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-description-inner"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"body"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"description"},description))))),(0,_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"link")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-links"},groupLinks&&small?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-links-inner"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"link"})):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-section-container",{fullHeight:!0,aligned},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-links-inner"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"link"})))),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-compliance"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-section-container",{aligned,fullHeight:!0},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-compliance-inner"},(0,_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"logo")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-logo"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"logo"})),((0,_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"caption")||caption)&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-caption"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:this.deviceSize<=_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.I.M?"caption":"body"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"caption"},caption))),copyright&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},"footer-copyright",!0),"classification-spacing",(0,_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.u)())},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:this.deviceSize<=_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.I.M?"caption-uppercase":"label-uppercase"},"© Crown Copyright")))))))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}]),Footer}();Footer.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--footer-compliance-padding:1rem 0}:host(.footer-sparse){--footer-links-padding:1.5rem 0;--footer-logo-margin-bottom:var(--ic-space-lg);--footer-link-inner-flex-direction:row}:host(.footer-small){--footer-links-padding:0 0;--footer-logo-margin-bottom:var(--ic-space-md);--footer-link-inner-flex-direction:column}:host(.ic-footer-foreground-light){--footer-theme-secondary:var(--ic-theme-secondary);--footer-theme-tertiary:var(--ic-theme-tertiary);--footer-keyline:var(--ic-keyline-lighten)}:host(.ic-footer-foreground-dark){--footer-theme-secondary:var(--ic-theme-secondary-light);--footer-theme-tertiary:var(--ic-theme-tertiary-light);--footer-keyline:var(--ic-keyline-darken)}:host(.footer-small.footer-ungrouped){--footer-links-padding:var(--ic-space-md) 0 0 0}footer{display:flex;flex-direction:column;width:100%}.footer-description{background-color:var(--footer-theme-secondary);color:var(--ic-theme-text);border-bottom:var(--footer-keyline)}.footer-description-inner{padding:1rem 0}.footer-links{padding:var(--footer-links-padding);background-color:var(--footer-theme-secondary);color:var(--ic-theme-text)}.footer-links-inner{display:flex;flex-direction:var(--footer-link-inner-flex-direction)}.footer-compliance{background-color:var(--footer-theme-tertiary);color:var(--ic-theme-text)}.footer-compliance-inner{padding:var(--footer-compliance-padding)}.footer-logo{margin-bottom:var(--footer-logo-margin-bottom);display:flex;gap:var(--ic-space-xxl)}.footer-logo>::slotted(){margin-right:var(--ic-space-md)}.footer-caption{margin-bottom:var(--ic-space-md)}.classification-spacing{margin-bottom:var(--ic-space-lg)}@media (forced-colors: active){footer{border-top:var(--ic-hc-border)}}'}}]);