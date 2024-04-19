"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[8905],{"./dist/esm/ic-radio-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_radio_group:()=>RadioGroup});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js"),_helpers_24ba0b83_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-24ba0b83.js");__webpack_require__("./dist/esm/types-6f6b41a5.js");const RadioGroup=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icChange",7),this.resizeObserver=null,this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{this.checkOrientation()})),this.resizeObserver.observe(this.el)},this.handleKeyDown=event=>{switch(event.key){case"ArrowDown":case"ArrowRight":this.radioOptions[this.getNextItemToSelect(this.selectedChild,!0)].click(),event.preventDefault();break;case"ArrowUp":case"ArrowLeft":this.radioOptions[this.getNextItemToSelect(this.selectedChild,!1)].click(),event.preventDefault()}},this.getNextItemToSelect=(currentItem,movingDown)=>{const numRadios=this.radioOptions.length-1;currentItem<1&&(currentItem=0);let nextItem=movingDown?currentItem+1:currentItem-1;return nextItem<0?nextItem=numRadios:nextItem>numRadios&&(nextItem=0),this.radioOptions[nextItem].disabled&&(nextItem=this.getNextItemToSelect(nextItem,movingDown)),nextItem},this.checkedValue="",this.currentOrientation=void 0,this.initialOrientation=void 0,this.selectedChild=-1,this.disabled=!1,this.helperText=void 0,this.hideLabel=!1,this.label=void 0,this.name=void 0,this.orientation="vertical",this.required=!1,this.size="default",this.small=!1,this.validationStatus="",this.validationText=""}orientationChangeHandler(){this.initialOrientation=this.orientation}disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}componentWillLoad(){(0,_helpers_24ba0b83_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el),this.orientationChangeHandler(),this.currentOrientation=this.initialOrientation}componentDidLoad(){this.radioOptions=Array.from(this.el.querySelectorAll("ic-radio-option")),this.radioOptions.forEach(((radioOption,index)=>{radioOption.selected||(radioOption.selected=this.checkedValue===radioOption.value),radioOption.name=this.name,radioOption.groupLabel=this.label,radioOption.selected&&(this.selectedChild=index,this.checkedValue=radioOption.value)})),this.radioOptions[0].shadowRoot.querySelector("input").tabIndex=this.selectedChild>0?-1:0,"horizontal"===this.initialOrientation&&void 0!==this.radioOptions&&(this.radioOptions.length>2||2===this.radioOptions.length&&((0,_helpers_24ba0b83_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.radioOptions[0],"additional-field")||(0,_helpers_24ba0b83_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.radioOptions[1],"additional-field")))&&(this.currentOrientation="vertical"),(0,_helpers_24ba0b83_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.runResizeObserver),(0,_helpers_24ba0b83_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"},{prop:this.name,propName:"name"}],"Radio Group")}selectHandler(event){var _a;this.checkedValue=event.detail.value;const selectedOption=event.target;this.icChange.emit({value:this.checkedValue,selectedOption:{radio:selectedOption,textFieldValue:null===(_a=null==selectedOption?void 0:selectedOption.querySelector("ic-text-field"))||void 0===_a?void 0:_a.value}}),void 0!==this.radioOptions&&(this.radioOptions.forEach(((radioOption,index)=>{radioOption.selected=this.checkedValue===radioOption.value,radioOption.selected&&(this.selectedChild=index)})),this.radioOptions[0].shadowRoot.querySelector("input").tabIndex=this.selectedChild>0?-1:0)}changeHandler(){const selectedOption=this.radioOptions.findIndex((radioOption=>radioOption.selected));selectedOption<0&&(this.radioOptions[0].shadowRoot.querySelector("input").tabIndex=0,this.selectedChild=selectedOption)}checkOrientation(){if("horizontal"===this.initialOrientation){let totalWidth=0;const radioOptionGap=40;for(let i=0;i<this.radioOptions.length;i++)totalWidth+=this.radioOptions[i].clientWidth,i<this.radioOptions.length-1&&(totalWidth+=radioOptionGap);"horizontal"===this.currentOrientation&&totalWidth>this.radioContainer.clientWidth?this.currentOrientation="vertical":"vertical"===this.currentOrientation&&totalWidth<this.radioContainer.clientWidth&&(this.currentOrientation="horizontal")}}render(){return(0,_helpers_24ba0b83_js__WEBPACK_IMPORTED_MODULE_1__.n)(!0,this.el,this.name,this.checkedValue,this.disabled),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{onKeyDown:this.handleKeyDown,class:{small:this.small||"small"===this.size}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{role:"radiogroup","aria-label":`${this.label}${this.required?", required":""}`},!this.hideLabel&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-label",{class:{[`${this.validationStatus}`]:!0},label:this.label,helperText:this.helperText,required:this.required,disabled:this.disabled}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"radio-buttons-container":!0,horizontal:"horizontal"===this.currentOrientation},ref:el=>this.radioContainer=el},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))),(0,_helpers_24ba0b83_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.validationStatus,this.disabled)&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-validation",{ariaLiveMode:"polite",status:this.validationStatus,message:this.validationText}))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{orientation:["orientationChangeHandler"]}}};RadioGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}ic-input-label.error{color:var(--ic-status-error)}ic-input-validation{margin-top:var(--ic-space-sm)}:host(.small) ic-input-validation{margin-top:calc(var(--ic-space-sm) / 2)}ic-input-label ic-typography{margin-bottom:var(--ic-space-sm)}:host(.small) ic-input-label ic-typography{margin-bottom:calc(var(--ic-space-sm) / 2)}:host .radio-buttons-container{display:flex;flex-direction:column;gap:var(--ic-space-xxs)}:host(.small) .radio-buttons-container{gap:var(--ic-space-xxxs)}:host .radio-buttons-container.horizontal{display:flex;flex-direction:row;gap:calc(var(--ic-space-xl) + var(--ic-space-xs))}:host(.small) .radio-buttons-container.horizontal{gap:var(--ic-space-xl)}'}}]);