"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[7264],{"../web-components/dist/esm/ic-tab-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tab_group:()=>TabGroup});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-e8797e8d.js");const TabGroup=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.handleHorizontalScrollAppearance=()=>"dark"===this.theme||"inherit"===this.theme&&window.matchMedia("(prefers-color-scheme: dark)").matches?"light":this.monochrome?"dark":"default",this.inline=!1,this.label=void 0,this.monochrome=!1,this.theme="inherit"}componentDidLoad(){(0,_helpers_e8797e8d_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"}],"Tab Group")}render(){const{theme,label,monochrome}=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{role:"tablist","aria-label":label,class:{"ic-tab-group-inline":this.inline,[`ic-theme-${theme}`]:"inherit"!==theme,"ic-tab-group-monochrome":monochrome}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-horizontal-scroll",{appearance:this.handleHorizontalScrollAppearance(),"focus-trigger":"tabFocus"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"tabs-container"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}static get delegatesFocus(){return!0}};TabGroup.style=":host{display:block;margin-bottom:var(--ic-space-md);border-bottom:var(--ic-space-1px) solid var(--ic-tab-bottom-border)}:host(.ic-tab-group-monochrome){border-bottom:var(--ic-space-1px) solid\n    var(--ic-tab-bottom-border-monochrome)}:host(.ic-tab-group-inline){margin-bottom:0;border-bottom:none}.tabs-container{display:flex;flex-direction:row}.tabs-container::-webkit-scrollbar{display:none}"}}]);