"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[4983],{"../web-components/dist/esm/ic-text-field.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_text_field:()=>TextField});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../web-components/dist/esm/helpers-35ac5e03.js"),inputIds=0,MUTABLE_ATTRIBUTES=[].concat((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__.A)(_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_3__.y),["title"]),TextField=function(){function TextField(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__.A)(this,TextField),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.getValidationText=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"getValidationText",7),this.icBlur=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icBlur",7),this.icChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icChange",7),this.icFocus=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icFocus",7),this.icInput=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icInput",7),this.icKeydown=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"icKeydown",7),this.inheritedAttributes={},this.hostMutationObserver=null,this.getMaxValueExceeded=function(value){"number"===_this.type&&(_this.minValueUnattained=value&&Number(value)<Number(_this.min),_this.maxValueExceeded=Number(value)>Number(_this.max))},this.getMaxCharactersReached=function(value){_this.numChars=value.length,_this.maxCharactersReached=_this.maxCharacters>0&&_this.numChars>=_this.maxCharacters,_this.maxCharactersWarning&&!_this.maxCharactersReached&&(_this.maxCharactersWarning=!1)},this.onInput=function(ev){_this.value=ev.target.value,_this.icInput.emit({value:_this.value})},this.onBlur=function(ev){var value=ev.target.value;_this.numChars=value.length,_this.minCharactersUnattained=_this.minCharacters>0&&_this.numChars<_this.minCharacters,_this.icBlur.emit({value})},this.onFocus=function(ev){_this.icFocus.emit({value:ev.target.value})},this.hasStatus=function(status){return""!==status&&!_this.disabled},this.handleFormReset=function(){_this.value=_this.initialValue},this.hostMutationCallback=function(mutationList){var forceComponentUpdate=!1;mutationList.forEach((function(_ref){var attributeName=_ref.attributeName,type=_ref.type,addedNodes=_ref.addedNodes,removedNodes=_ref.removedNodes;MUTABLE_ATTRIBUTES.includes(attributeName)?(_this.inheritedAttributes[attributeName]=_this.el.getAttribute(attributeName),forceComponentUpdate=!0):"childList"===type&&(forceComponentUpdate=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_3__.c)(addedNodes,removedNodes,"icon"))})),forceComponentUpdate&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.f)(_this)},this.numChars=0,this.maxCharactersReached=!1,this.maxCharactersWarning=!1,this.minCharactersUnattained=!1,this.maxValueExceeded=!1,this.minValueUnattained=!1,this.ariaActiveDescendant=void 0,this.ariaAutocomplete=void 0,this.ariaExpanded=void 0,this.ariaOwns=void 0,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autoFocus=!1,this.disabled=!1,this.fullWidth=!1,this.helperText="",this.hideCharCount=!1,this.hideLabel=!1,this.hiddenInput=!0,this.inputId="ic-text-field-input-".concat(inputIds++),this.inputmode="text",this.label=void 0,this.max=void 0,this.maxCharacters=0,this.min=void 0,this.minCharacters=0,this.name=this.inputId,this.placeholder="",this.readonly=!1,this.required=!1,this.resize=!1,this.role=void 0,this.rows=1,this.size="medium",this.spellcheck=!1,this.truncateValue=void 0,this.type="text",this.validationInline=!1,this.validationInlineInternal=!1,this.validationStatus="",this.validationText="",this.debounce=0,this.value="",this.initialValue=this.value}var _setFocus;return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.A)(TextField,[{key:"debounceChanged",value:function debounceChanged(){this.icChange=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_3__.O)(this.icChange,this.debounce)}},{key:"watchValueHandler",value:function watchValueHandler(newValue){var value;this.maxCharacters>0?(value=newValue.substring(0,this.maxCharacters),this.value=value):value=newValue,this.inputEl&&this.inputEl.value!==value&&(this.inputEl.value=value),this.getMaxValueExceeded(value),this.getMaxCharactersReached(value),this.icChange.emit({value})}},{key:"connectedCallback",value:function connectedCallback(){this.debounceChanged()}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _a;(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_3__.n)(this.el,this.handleFormReset),null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}},{key:"componentWillLoad",value:function componentWillLoad(){this.value!==this.initialValue?this.watchValueHandler(this.value):this.maxCharacters>0&&(this.value=this.value.substring(0,this.maxCharacters)),this.getMaxValueExceeded(this.value),this.getMaxCharactersReached(this.value),this.inheritedAttributes=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_3__.x)(this.el,MUTABLE_ATTRIBUTES),this.readonly&&(this.maxValueExceeded=!1,this.minValueUnattained=!1),(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_3__.m)(this.el,this.handleFormReset),(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_3__.k)(this.disabled,this.el)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_3__.a)([{prop:this.label,propName:"label"}],"Text Field"),this.validationInlineInternal&&this.getValidationText.emit({value:this.validationText}),this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{attributes:!0,childList:!0})}},{key:"handleKeyDown",value:function handleKeyDown(ev){this.icKeydown.emit({event:ev}),this.maxCharactersWarning=this.maxCharactersReached}},{key:"setFocus",value:(_setFocus=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(){var _a;return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:null===(_a=this.inputEl)||void 0===_a||_a.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"render",value:function render(){var _this2=this,inputId=this.inputId,name=this.name,label=this.label,required=this.required,size=this.size,placeholder=this.placeholder,helperText=this.helperText,hideCharCount=this.hideCharCount,rows=this.rows,resize=this.resize,disabled=this.disabled,value=this.value,min=this.min,max=this.max,numChars=this.numChars,readonly=this.readonly,maxCharacters=this.maxCharacters,maxCharactersWarning=this.maxCharactersWarning,maxCharactersReached=this.maxCharactersReached,minCharacters=this.minCharacters,minCharactersUnattained=this.minCharactersUnattained,minValueUnattained=this.minValueUnattained,maxValueExceeded=this.maxValueExceeded,validationStatus=this.validationStatus,validationText=this.validationText,validationInline=this.validationInline,validationInlineInternal=this.validationInlineInternal,spellcheck=this.spellcheck,inputmode=this.inputmode,fullWidth=this.fullWidth,truncateValue=this.truncateValue,hiddenInput=this.hiddenInput,disabledMode=!!readonly||disabled,currentStatus=maxValueExceeded||minValueUnattained||minCharactersUnattained||maxCharactersWarning?maxCharactersWarning?_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.a.Warning:_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.a.Error:validationStatus,currentValidationText=maxCharactersWarning?"Maximum input is ".concat(maxCharacters," characters"):maxValueExceeded?"Maximum value of ".concat(max," exceeded"):minValueUnattained?"Minimum value of ".concat(min," not met"):minCharactersUnattained?"Minimum input is ".concat(minCharacters," characters"):validationText,maxNumChars=readonly?0:maxCharacters,messageAriaLive=maxCharactersWarning||maxValueExceeded||minValueUnattained||currentStatus===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.a.Error?"assertive":"polite",showStatusText=this.hasStatus(currentStatus)&&!(currentStatus==_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.a.Success&&validationInline)&&!validationInlineInternal,multiline=rows>1,charsRemaining=maxNumChars-numChars,hiddenRemainingCharCountDesc="".concat(charsRemaining," character").concat(1===charsRemaining?"":"s"," remaining."),hiddenCharCountDescId=maxCharacters>0?"".concat(inputId,"-char-count-desc"):"",describedBy="".concat(hiddenCharCountDescId," ").concat((0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_3__.s)(inputId,""!==helperText,showStatusText)).trim(),disabledText=disabledMode&&!readonly,showLeftIcon=!!this.el.querySelector('[slot="icon"]')&&!disabledText,invalid="".concat(currentStatus===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.a.Error);return hiddenInput&&(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_3__.p)(!0,this.el,name,value,disabledMode),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.H,{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__.A)({},"ic-text-field-full-width",fullWidth)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-input-container",{readonly,disabled:disabledMode},!this.hideLabel&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-input-label",{for:inputId,label,helperText,required,disabled:disabledText,readonly}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-input-component-container",{size,validationStatus:currentStatus,multiLine:multiline,disabled:disabledMode,readonly,validationInline,fullWidth},showLeftIcon&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("span",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__.A)({},"readonly",readonly),"has-value",value.length>0),slot:"left-icon"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"icon"})),multiline?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("textarea",Object.assign({id:inputId,class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__.A)({},"no-resize",!1===resize||readonly),"no-left-pad",!showLeftIcon&&readonly),"readonly",readonly),name,ref:function ref(el){return _this2.inputEl=el},value,rows,required,disabled:disabledMode,placeholder:placeholder||"",readonly,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,"aria-label":label,"aria-describedby":describedBy,"aria-invalid":invalid,autocapitalize:this.autocapitalize,autoFocus:this.autoFocus,spellcheck,inputmode,maxlength:maxCharactersReached?maxCharacters:null,minlength:minCharactersUnattained?minCharacters:null},this.inheritedAttributes)):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("input",Object.assign({id:inputId,name,ref:function ref(el){return _this2.inputEl=el},type:this.type,min,max,value,class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__.A)({},"no-left-pad",!showLeftIcon&&readonly),"readonly",readonly),"truncate-value",truncateValue),placeholder:placeholder||"",required,disabled:disabledMode,readonly,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,"aria-label":label,"aria-describedby":describedBy,"aria-invalid":invalid,"aria-activedescendant":this.ariaActiveDescendant,"aria-expanded":this.ariaExpanded,"aria-owns":this.ariaOwns,autocomplete:this.autocomplete,autocapitalize:this.autocapitalize,autoFocus:this.autoFocus,spellcheck,inputmode,role:this.role,maxlength:maxCharactersReached?maxCharacters:null,minlength:minCharactersUnattained?minCharacters:null},this.inheritedAttributes)),(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.el,"clear-button")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"clear-button"}),(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.el,"search-submit-button")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"search-submit-button"})),(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.el,"menu")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"menu"}),(!(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_3__.G)(validationStatus)||!(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_3__.G)(validationText)||maxNumChars>0||maxValueExceeded||maxCharactersWarning||minCharactersUnattained||minValueUnattained)&&!validationInlineInternal&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-input-validation",{status:!1===this.hasStatus(currentStatus)||currentStatus===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.a.Success&&validationInline||validationInlineInternal?"":currentStatus,message:showStatusText?currentValidationText:"",ariaLiveMode:messageAriaLive,for:inputId,fullWidth},!readonly&&maxNumChars>0&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{slot:"validation-message-adornment"},!hideCharCount&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-typography",{variant:"caption",class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__.A)({},"char-count-text",!0)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("span",{class:"char-count"},numChars,"/",maxNumChars)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("span",{class:"remaining-char-count-desc","aria-live":"polite"},hiddenRemainingCharCountDesc),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("span",{hidden:!0,id:hiddenCharCountDescId},"Field can contain a maximum of ",maxNumChars," characters.")))))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}}],[{key:"watchers",get:function get(){return{debounce:["debounceChanged"],value:["watchValueHandler"]}}}]),TextField}();TextField.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}:host(.ic-text-field-full-width){width:100%}::-moz-placeholder{color:var(--ic-color-tertiary-text);opacity:1}::placeholder{color:var(--ic-color-tertiary-text);opacity:1}input,textarea{border:0;border-radius:var(--ic-border-radius);background-color:var(--ic-architectural-white);line-height:1.5rem;letter-spacing:0.005rem;width:100%;padding-right:var(--ic-space-xs);padding-left:var(--ic-space-xs)}textarea{min-height:var(--ic-space-lg);resize:vertical;padding-top:0.375rem}input:focus,textarea:focus{border:0;outline:0}input:disabled,textarea:disabled{color:var(--ic-architectural-200)}input.readonly,textarea.readonly{color:var(--ic-color-primary-text)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type="number"]{-moz-appearance:textfield}textarea.no-resize{resize:none}.char-count-text{color:var(--ic-color-secondary-text);padding-right:var(--ic-space-xxxs)}.no-left-pad{padding-left:0}::slotted([slot="icon"]){fill:var(--ic-color-tertiary-text)}.has-value ::slotted([slot="icon"]){fill:var(--ic-color-primary-text)}.char-count{margin-right:calc(-1 * var(--ic-space-xxxs))}.remaining-char-count-desc{position:absolute;left:-9999px}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-results-button,input[type="search"]::-webkit-search-results-decoration{display:none}input[type="search"].truncate-value{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (forced-colors: active){input.readonly,textarea.readonly{color:canvastext}.has-value ::slotted([slot="icon"]){fill:currentcolor}}'}}]);