"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[7901],{"../web-components/dist/esm/ic-toggle-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_toggle_button:()=>ToggleButton});__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_05003e1c_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../web-components/dist/esm/index-05003e1c.js"),_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../web-components/dist/esm/helpers-c597f246.js");__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var ToggleButton=function(){function ToggleButton(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ToggleButton),(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.icToggleChecked=(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"icToggleChecked",7),this.handleClick=function(){!_this.loading&&!_this.disabled&&_this.icToggleChecked.emit({checked:_this.toggleChecked})},this.accessibleLabel=void 0,this.appearance="default",this.disabled=!1,this.fullWidth=!1,this.iconPlacement=void 0,this.label=void 0,this.loading=!1,this.size="default",this.toggleChecked=!1,this.variant="default"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ToggleButton,[{key:"componentWillLoad",value:function componentWillLoad(){(0,_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_8__.j)(this.disabled,this.el)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_8__.a)([{prop:"icon"===this.variant?this.accessibleLabel:this.label,propName:"icon"===this.variant?"accessible-label":"label"}],"Toggle button")}},{key:"handleHostClick",value:function handleHostClick(e){this.disabled?e.stopImmediatePropagation():this.loading||(this.toggleChecked=!this.toggleChecked)}},{key:"render",value:function render(){var _class;return(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_7__.h)(_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_7__.H,{class:(_class={},_class.disabled=this.disabled,_class.checked=!this.disabled&&this.toggleChecked,_class[""+this.appearance]=!0,_class.icon="icon"===this.variant,_class[""+this.size]=!0,_class.loading=this.loading,_class)},(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-button",{variant:"icon"===this.variant?"icon":"secondary",onClick:this.handleClick,"aria-label":this.accessibleLabel,disabled:this.disabled,appearance:this.appearance,size:this.size,fullWidth:this.fullWidth,loading:this.loading,"aria-disabled":""+this.disabled,"aria-checked":""+this.toggleChecked},"icon"!==this.variant&&this.label,(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",null),(0,_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_8__.i)(this.el,"icon")&&(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",{name:"icon",slot:this.iconPlacement?this.iconPlacement+"-icon":"icon"}),(0,_helpers_c597f246_js__WEBPACK_IMPORTED_MODULE_8__.i)(this.el,"badge")&&(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",{name:"badge",slot:"badge"})))}},{key:"el",get:function get(){return(0,_index_05003e1c_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}}]),ToggleButton}();ToggleButton.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.checked)::part(button){background-color:var(--ic-action-default);color:var(--ic-architectural-white);box-shadow:inset 0 0 0 var(--ic-space-xxxs) var(--ic-architectural-white)}:host(.checked)::part(button):focus{box-shadow:inset 0 0 0 var(--ic-space-xxxs) var(--ic-architectural-white),\n    var(--ic-border-focus)}:host(.checked)::part(button):hover{background-color:var(--button-default-hover)}:host(.checked)::part(button):active,:host(.icon.checked)::part(button):active{background-color:var(--ic-action-default-active)}:host(.dark.checked)::part(button){background-color:var(--ic-action-dark)}:host(.dark.checked)::part(button):hover{background-color:var(--ic-action-dark-hover)}:host(.dark.checked)::part(button):active,:host(.icon.dark.checked)::part(button):active{background-color:var(--ic-action-dark-active)}:host(.light.checked)::part(button){background-color:var(--ic-action-light);color:var(--ic-color-primary-text);box-shadow:inset 0 0 0 var(--ic-space-xxxs) var(--ic-architectural-black)}:host(.light.checked)::part(button):hover{background-color:var(--ic-action-light-hover)}:host(.light.checked)::part(button):active,:host(.icon.light.checked)::part(button):active{background-color:var(--ic-action-light-active)}:host(.disabled)::part(button),:host(.icon.disabled)::part(button){border:1px dashed var(--ic-architectural-300)}:host(.icon)::part(button){border:var(--ic-border-width) solid var(--button-default);height:calc(var(--ic-space-xl) + var(--ic-space-xs));width:calc(var(--ic-space-xl) + var(--ic-space-xs))}:host(.icon)::part(button):active{background-color:var(--ic-action-default-bg-active)}:host(.icon.dark)::part(button):active{background-color:var(--ic-action-dark-bg-active)}:host(.icon.light)::part(button):active{background-color:var(--ic-action-light-bg-active)}:host(.icon.small)::part(button){height:var(--ic-space-xl);width:var(--ic-space-xl)}:host(.icon.large)::part(button){height:var(--ic-space-xxl);width:var(--ic-space-xxl)}:host(.checked.loading)::part(button){background-color:var(--button-default-active)}:host(.loading)::part(ic-loading-container){--inner-color:var(--ic-architectural-white)}:host(.checked.loading.light)::part(button){background-color:var(--ic-action-light-active)}:host(.checked.loading.dark)::part(button){background-color:var(--ic-action-dark-active)}'}}]);