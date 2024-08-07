"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[8554],{"../web-components/dist/esm/ic-badge.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_badge:()=>Badge});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-3905ccc4.js");__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js");const Badge=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ariaLabel=null,this.setBadgeColour=()=>{const colorRGBA=(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.customColor);if(colorRGBA){this.customColorRGBA=colorRGBA;const{r,g,b,a}=colorRGBA;this.el.style.backgroundColor=`rgba(${r}, ${g}, ${b}, ${a})`}},this.getBadgeRGB=()=>{switch(this.variant){case"custom":return this.customColorRGBA;case"error":case"success":case"warning":case"info":return(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__.r)((0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__.g)(`--ic-status-${this.variant}`));case"neutral":case"light":return(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__.h)((0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__.g)("--ic-architectural-"+("neutral"===this.variant?500:40)))}},this.getBadgeForeground=()=>{const{r,g,b}=this.getBadgeRGB();this.foregroundColour=(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__.b)((299*r+587*g+114*b)/1e3)},this.getTextLabel=()=>this.maxNumber&&Number(this.textLabel)>this.maxNumber?`${this.maxNumber}+`:this.textLabel,this.setAccessibleLabel=()=>{const parentEl=this.el.parentElement,defaultAriaLabel=this.isAccessibleLabelDefined()?this.accessibleLabel:this.textLabel||"with badge being displayed";if(parentEl){const{tagName}=parentEl;if("IC-CARD"!==tagName&&("IC-TAB"!==tagName||"IC-TAB"===tagName&&this.parentAriaLabel)){const ariaLabelPrefix=this.parentAriaLabel?`${this.parentAriaLabel} ,`:"";parentEl.ariaLabel=this.visible?`${ariaLabelPrefix} ${defaultAriaLabel}`:void 0}else this.ariaLabel=`, ${defaultAriaLabel}`}},this.isAccessibleLabelDefined=()=>(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.accessibleLabel)&&null!==this.accessibleLabel,this.accessibleLabel=void 0,this.customColor=null,this.maxNumber=void 0,this.position="far",this.size="default",this.textLabel=void 0,this.type="text",this.variant="neutral",this.visible=!0}accessibleLabelHandler(){this.setAccessibleLabel()}customColorHandler(){"custom"===this.variant&&this.setBadgeColour()}variantHandler(){this.getBadgeForeground()}visibleHandler(){this.setAccessibleLabel()}componentWillLoad(){var _a;"custom"===this.variant&&this.setBadgeColour(),this.getBadgeForeground();const ariaLabel=null===(_a=this.el.parentElement)||void 0===_a?void 0:_a.ariaLabel;ariaLabel&&(this.parentAriaLabel=ariaLabel),this.setAccessibleLabel()}componentDidLoad(){"text"===this.type&&(0,_helpers_3905ccc4_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.textLabel,propName:"text-label"}],"Badge")}async showBadge(){this.visible=!0}async hideBadge(){this.visible=!1}render(){const{ariaLabel,el,foregroundColour,getTextLabel,position,size,textLabel,type,variant,visible}=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[`${position}`]:!0,[`${size}`]:!0,[`${variant}`]:!0,[`${type}`]:!0,[`foreground-${foregroundColour}`]:null!==foregroundColour,[""+(visible?"show":"hide")]:!0},id:el.id||null,"aria-label":ariaLabel,role:"status"},"icon"===type&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"badge-icon"}),"text"===type&&textLabel&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"small"===size?"badge-small":"badge"},getTextLabel()))}static get delegatesFocus(){return!0}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{accessibleLabel:["accessibleLabelHandler"],customColor:["customColorHandler"],variant:["variantHandler"],visible:["visibleHandler"]}}};Badge.style="@media (prefers-reduced-motion: no-preference){:host(.show){animation:expand var(--ic-transition-duration-slow)}:host(.hide){animation:shrink var(--ic-transition-duration-slow)}}:host{display:flex;height:var(--ic-space-md);min-width:var(--ic-space-md);width:-moz-fit-content;width:fit-content;border-radius:calc(2 * var(--ic-space-xxl));position:absolute}:host(.neutral){background-color:var(--ic-architectural-500)}:host(.light){background-color:var(--ic-architectural-40)}:host(.info){background-color:var(--ic-status-info)}:host(.warning){background-color:var(--ic-status-warning-mid)}:host(.error){background-color:var(--ic-status-error)}:host(.success){background-color:var(--ic-status-success)}:host(.small){height:var(--ic-space-sm);min-width:var(--ic-space-sm)}:host(.large){height:calc(var(--ic-space-md) + var(--ic-space-xxs));min-width:calc(var(--ic-space-md) + var(--ic-space-xxs))}:host(.dot.default){height:var(--ic-space-xs);width:var(--ic-space-xs);min-width:var(--ic-space-xs)}:host(.dot.small){height:calc(var(--ic-space-xxs) + var(--ic-space-xxxs));width:calc(var(--ic-space-xxs) + var(--ic-space-xxxs));min-width:calc(var(--ic-space-xxs) + var(--ic-space-xxxs))}:host(.dot.large){height:var(--ic-space-sm);width:var(--ic-space-sm);min-width:var(--ic-space-sm)}:host(.foreground-dark) ::slotted(*){fill:var(--ic-color-primary-text)}:host(.foreground-light) ::slotted(*){fill:white}:host(.foreground-dark) ic-typography{color:var(--ic-color-primary-text)}:host(.foreground-light) ic-typography{color:white}:host(.text) ic-typography{align-self:center;padding:0 calc((var(--ic-space-xs) + var(--ic-space-1px)) / 2)\n    var(--ic-space-1px)}:host(.text.small) ic-typography{padding:0 0.2132rem}:host(.text.large) ic-typography{padding:0 calc((var(--ic-space-sm) + var(--ic-space-1px)) / 2)\n    var(--ic-space-1px)}:host(.icon) ::slotted(svg){width:var(--ic-space-sm);height:var(--ic-space-sm);padding:var(--ic-space-xxxs)}:host(.icon.small) ::slotted(svg){width:var(--ic-space-xs);height:var(--ic-space-xs)}:host(.icon.large) ::slotted(svg){width:calc(var(--ic-space-sm) + var(--ic-space-xxxs));height:calc(var(--ic-space-sm) + var(--ic-space-xxxs));padding:calc(var(--ic-space-xxxs) + var(--ic-space-1px))}:host(.far){top:calc(-1 * var(--ic-space-xs));right:calc(-1 * var(--ic-space-xs))}:host(.far.small),:host(.dot.far.large){top:calc(-1 * var(--ic-space-xxs));right:calc(-1 * var(--ic-space-xxs))}:host(.dot.far),:host(.dot.far.small){top:calc(-1 * var(--ic-space-xxxs));right:calc(-1 * var(--ic-space-xxxs))}:host(.near){top:calc(-1 * calc(var(--ic-space-xxs) + var(--ic-space-1px)));right:calc(-1 * calc(var(--ic-space-xxs) + var(--ic-space-1px)))}:host(.dot.near){top:calc(-1 * var(--ic-space-1px));right:calc(-1 * var(--ic-space-1px))}:host(.inline){position:static}:host(.hide){visibility:hidden !important;transition:visibility var(--ic-transition-duration-slow)}@keyframes expand{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes shrink{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0)}}"}}]);