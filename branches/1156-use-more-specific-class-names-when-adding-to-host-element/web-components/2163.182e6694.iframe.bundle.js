"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[2163],{"./dist/esm/ic-footer-link-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_footer_link_group:()=>FooterLinkGroup});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js"),_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-988ce06b.js");__webpack_require__("./dist/esm/types-6f6b41a5.js");const FooterLinkGroup=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.handleKeydown=event=>{" "!==event.key&&"Enter"!==event.key||this.toggleExpanded()},this.toggleExpanded=()=>{this.expanded=!this.expanded},this.expanded=!1,this.deviceSize=_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.D.XL,this.dropdownIconStyle=(0,_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.b)(),this.small=!1,this.label=void 0}componentWillLoad(){this.small=this.isSmall(this.el)}componentDidLoad(){(0,_helpers_988ce06b_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"}],"Footer Link Group")}footerResizeHandler(){this.small=this.isSmall(this.el)}footerThemeChangeHandler(ev){const theme=ev.detail;this.dropdownIconStyle=theme.mode}isSmall(e){return null!==e.parentElement&&(e.parentElement.classList.contains("ic-footer")?e.parentElement.classList.contains("footer-small"):this.isSmall(e.parentElement))}render(){const{small,label}=this;return small?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"footer-link-group footer-link-group-small":!0,[`footer-link-group-${this.dropdownIconStyle}`]:!0},tabIndex:"1",onClick:this.toggleExpanded,onKeydown:this.handleKeydown,"aria-expanded":this.expanded},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-section-container",{fullHeight:!0},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-link-group-header"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-link-label"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"label"},label)),this.expanded?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"footer-link-group-toggle",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1200 1200"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{fill:"currentColor",d:"M600.002 210.605L421.285 389.336L0 810.559l178.721 178.836l421.281-421.341l421.281 421.341L1200 810.559L778.733 389.336L600.002 210.605z"})):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"footer-link-group-toggle",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1200 1200"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("g",{transform:"translate(0 1200) scale(1 -1)"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{fill:"currentColor",d:"M600.002 210.605L421.285 389.336L0 810.559l178.721 178.836l421.281-421.341l421.281 421.341L1200 810.559L778.733 389.336L600.002 210.605z"})))),this.expanded&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-link-group-links"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"footer-link-group footer-link-group-sparse":!0,[`footer-link-group-${this.dropdownIconStyle}`]:!0}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-link-label"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"subtitle-small"},label)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-link-group-links"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}static get delegatesFocus(){return!0}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};FooterLinkGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.footer-link-group-sparse){--footer-link-group-margin-right:5.938rem;--footer-link-group-border-bottom:0 solid transparent;--footer-link-label-margin-top:0;--footer-link-label-margin-bottom:var(--ic-space-md)}:host(.footer-link-group-small){--footer-link-group-margin-right:0;--footer-link-label-margin-top:var(--ic-space-md);--footer-link-label-margin-bottom:var(--ic-space-md);--footer-link-group-links-padding-left:var(--ic-space-md);--footer-link-group-links-padding-bottom:var(--ic-space-md)}:host(.footer-link-group-light.footer-link-group-small){--footer-link-group-border-bottom:var(--ic-keyline-lighten)}:host(.footer-link-group-dark.footer-link-group-small){--footer-link-group-border-bottom:var(--ic-keyline-darken)}:host(.footer-link-group){margin-right:var(--footer-link-group-margin-right);border-bottom:var(--footer-link-group-border-bottom)}:host(.footer-link-group-small.footer-link-group-light:hover){background-color:var(--ic-action-light-bg-hover);cursor:pointer}:host(.footer-link-group-small.footer-link-group-dark:hover){background-color:var(--ic-action-dark-bg-hover);cursor:pointer}:host(.footer-link-group-sparse:focus){box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);outline:var(--ic-hc-focus-outline);z-index:1}:host(.footer-link-group-small:focus){box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);outline:var(--ic-hc-focus-outline);z-index:1}:host(.footer-link-group-small.footer-link-group-light:active){background-color:var(--ic-action-light-bg-active)}:host(.footer-link-group-small.footer-link-group-dark:active){background-color:var(--ic-action-dark-bg-active)}.footer-link-label{margin-top:var(--footer-link-label-margin-top);margin-bottom:var(--footer-link-label-margin-bottom);flex-grow:1}.footer-link-group-toggle{fill:white !important}.footer-link-group-links{display:flex;flex-direction:column}.footer-link-group-header{display:flex;align-items:center}'}}]);