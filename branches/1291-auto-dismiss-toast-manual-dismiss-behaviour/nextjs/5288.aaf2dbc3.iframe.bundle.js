"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[5288],{"../web-components/dist/esm/ic-checkbox.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_checkbox:()=>Checkbox});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/helpers-6192f61a.js"),Checkbox=(__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),function(){function Checkbox(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,Checkbox),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.icCheck=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icCheck",7),this.handleClick=function(){_this.checked=!_this.checked,_this.displayIndeterminate=!_this.nativeIndeterminateBehaviour&&(_this.indeterminate&&_this.checked),_this.icCheck.emit()},this.handleFormReset=function(){_this.checked=_this.initiallyChecked},this.additionalFieldDisplay="static",this.checked=!1,this.initiallyChecked=this.checked,this.disabled=!1,this.dynamicText="This selection requires additional answers",this.form=void 0,this.formaction=void 0,this.formenctype=void 0,this.formmethod=void 0,this.formnovalidate=void 0,this.formtarget=void 0,this.groupLabel=void 0,this.indeterminate=!1,this.displayIndeterminate=this.indeterminate,this.label=void 0,this.name=void 0,this.nativeIndeterminateBehaviour=!1,this.size=void 0,this.value=void 0,this.hideLabel=!1}var _setFocus;return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__.A)(Checkbox,[{key:"watchIndeterminateHandler",value:function watchIndeterminateHandler(){this.displayIndeterminate=this.nativeIndeterminateBehaviour?this.indeterminate:this.indeterminate&&this.checked}},{key:"componentWillLoad",value:function componentWillLoad(){(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.k)(this.disabled,this.el),(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.m)(this.el,this.handleFormReset);var checkboxGroup=this.el.parentElement;checkboxGroup&&(this.name||(this.name=checkboxGroup.name),this.groupLabel=checkboxGroup.label)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.a)([{prop:this.label,propName:"label"},{prop:this.value,propName:"value"}],"Checkbox")}},{key:"componentDidRender",value:function componentDidRender(){if("static"===this.additionalFieldDisplay){var textfield=this.el.querySelector("ic-text-field");this.checked?null==textfield||textfield.removeAttribute("disabled"):null==textfield||textfield.setAttribute("disabled","")}else this.additionalFieldContainer&&(this.additionalFieldContainer.style.display=this.checked?"flex":"none")}},{key:"disconnectedCallback",value:function disconnectedCallback(){(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.n)(this.el,this.handleFormReset)}},{key:"setFocus",value:(_setFocus=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(){var _a;return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:null===(_a=this.el.shadowRoot.querySelector(".checkbox"))||void 0===_a||_a.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"render",value:function render(){var _this2=this,additionalFieldDisplay=this.additionalFieldDisplay,checked=this.checked,disabled=this.disabled,dynamicText=this.dynamicText,el=this.el,form=this.form,formaction=this.formaction,formenctype=this.formenctype,formmethod=this.formmethod,formnovalidate=this.formnovalidate,formtarget=this.formtarget,displayIndeterminate=this.displayIndeterminate,groupLabel=this.groupLabel,label=this.label,name=this.name,size=this.size,value=this.value,id="ic-checkbox-".concat((0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.e)(label)||value,"-").concat(groupLabel).replace(/ /g,"-"),parentElementSize=el.parentElement.size;return checked?(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.p)(!0,el,name,checked&&value,disabled):(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.q)(el),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.H,{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)({"ic-checkbox-disabled":disabled},"ic-checkbox-".concat(size||parentElementSize),!0)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"container"},displayIndeterminate&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"indeterminate-symbol"}),!displayIndeterminate&&checked&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg",{class:"checkmark",width:"1.5rem",height:"1.5rem",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("title",null,"checkmark icon"),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("path",{d:"M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("input",{role:"checkbox",class:{checkbox:!0,checked,indeterminate:displayIndeterminate},type:"checkbox",name,id,value,disabled:!!disabled||null,checked,indeterminate:displayIndeterminate,onClick:this.handleClick,form,formaction,formenctype,formmethod,formnovalidate,formtarget,"aria-label":this.hideLabel?this.label:void 0}),!this.hideLabel&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-typography",{class:"checkbox-label",variant:"body"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("label",{htmlFor:id},label))),(0,_helpers_6192f61a_js__WEBPACK_IMPORTED_MODULE_2__.i)(el,"additional-field")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"dynamic-container",ref:function ref(el){return _this2.additionalFieldContainer=el}},"dynamic"===additionalFieldDisplay&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"branch-corner"}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",null,"dynamic"===additionalFieldDisplay&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-typography",{variant:"caption"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("p",{class:"dynamic-text","aria-live":"polite"},dynamicText)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:{"additional-field-wrapper":"static"===additionalFieldDisplay}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"additional-field"})))))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}},{key:"watchers",get:function get(){return{indeterminate:["watchIndeterminateHandler"]}}}]),Checkbox}());Checkbox.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.ic-checkbox-disabled){color:var(--ic-architectural-200);pointer-events:none}.container{display:flex;width:-moz-fit-content;width:fit-content;padding:var(--ic-space-xxs) 0 var(--ic-space-xxs) var(--ic-space-xxs);margin-bottom:var(--ic-space-xxs);align-items:center}:host(.ic-checkbox-small) .container{margin-bottom:var(--ic-space-xxxs)}.checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;position:relative;top:0;left:0;height:var(--ic-space-lg);width:var(--ic-space-lg);background-color:var(--ic-architectural-white);border:var(--ic-border-width) solid var(--ic-architectural-400);border-radius:var(--ic-border-radius);outline:none;cursor:pointer;transition:var(--ic-easing-transition-fast);flex-shrink:0}:host(.ic-checkbox-small) .checkbox,:host(.ic-checkbox-small) .container svg{width:var(--ic-space-md);height:var(--ic-space-md)}:host(.ic-checkbox-large) .checkbox,:host(.ic-checkbox-large) .container svg{width:var(--ic-space-xl);height:var(--ic-space-xl)}.checkbox:checked{background-color:var(--ic-action-default);border:var(--ic-border-width) solid var(--ic-action-default);transition:var(--ic-easing-transition-slow)}.checkbox:checked:disabled{background-color:var(--ic-architectural-200)}.checkbox:indeterminate,.checkbox.indeterminate:checked{background-color:var(--ic-architectural-white);border:0.125rem solid var(--ic-action-default)}.checkbox:checked:hover{background-color:var(--ic-action-default-hover)}.checkbox:indeterminate:hover,.checkbox.indeterminate:checked:hover{background-color:var(--ic-action-default-bg-hover-no-alpha);border:0.125rem solid var(--ic-action-default-hover)}.checkbox:checked:active{background-color:var(--ic-action-default-active)}.checkbox:indeterminate:active,.checkbox.indeterminate:checked:active{background-color:var(--ic-action-default-bg-active-no-alpha);border:0.125rem solid var(--ic-action-default-active)}.checkbox:hover{background-color:var(--ic-action-default-bg-hover-no-alpha);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-hover);border:var(--ic-border-width) solid var(--ic-action-default-hover)}.checkbox:active{background-color:var(--ic-action-default-bg-active-no-alpha);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-active);border:var(--ic-border-width) solid var(--ic-action-default-active)}.checkbox:focus{box-shadow:var(--ic-border-focus)}.checkbox:disabled{border:var(--ic-border-width) dashed var(--ic-architectural-200)}.checkbox-label{padding-left:var(--ic-space-sm)}.checkbox-label:hover{cursor:pointer}.checkmark{position:relative;right:calc(-1 * var(--ic-space-lg));margin-left:calc(-1 * var(--ic-space-lg));fill:white;z-index:1;background-color:transparent;pointer-events:none;flex-shrink:0}:host(.ic-checkbox-small) .checkmark{margin-left:calc(-1 * var(--ic-space-md));right:calc(-1 * var(--ic-space-md))}:host(.ic-checkbox-large) .checkmark{margin-left:calc(-1 * var(--ic-space-xl));right:calc(-1 * var(--ic-space-xl))}.indeterminate-symbol{position:relative;width:0.875rem;height:var(--ic-space-xxxs);right:-1.188rem;margin-left:-0.875rem;z-index:1;background-color:var(--ic-action-default);pointer-events:none;flex-shrink:0}:host(.ic-checkbox-small) .indeterminate-symbol{width:0.6rem;right:-0.8rem;margin-left:-0.6rem}:host(.ic-checkbox-large) .indeterminate-symbol{width:1.25rem;right:-1.625rem;margin-left:-1.25rem}.container:hover .indeterminate-symbol{background-color:var(--ic-action-default-hover)}.container:active .indeterminate-symbol{background-color:var(--ic-action-default-active)}.additional-field-wrapper{margin-left:calc(var(--ic-space-md) + var(--ic-space-lg));margin-top:calc(var(--ic-space-sm) / 2)}.branch-corner{color:var(--ic-action-default);height:var(--ic-space-md);width:var(--ic-space-xl);border-radius:0 0 0 0.188rem;border-bottom:0.125rem solid var(--ic-action-default);border-left:0.125rem solid var(--ic-action-default)}.dynamic-container{display:flex;position:relative;margin:var(--ic-space-xxxs) 0 var(--ic-space-xxs) var(--ic-space-md);gap:var(--ic-space-xs)}.dynamic-text{color:var(--ic-action-default);margin-top:calc(var(--ic-space-sm) / 2);margin-bottom:var(--ic-space-xs);border-radius:2%}@media (max-width: 576px){::slotted(ic-text-field){--input-width:100%}}@media (forced-colors: active){.checkbox{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert;transition:none}.checkbox:checked{transition:none}.checkbox:focus-visible{outline:0.125rem solid highlight}.checkbox:disabled:not(:checked){-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:GrayText}.checkmark{fill:none}.indeterminate-symbol{display:none}}'}}]);