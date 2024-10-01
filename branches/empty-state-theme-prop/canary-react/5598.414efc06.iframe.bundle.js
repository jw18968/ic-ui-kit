"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[5598],{"../web-components/dist/esm/ic-breadcrumb-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_breadcrumb_group:()=>BreadcrumbGroup});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-1c9151ef.js");const BreadcrumbGroup=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ADD_CLASS_DELAY=50,this.IC_BREADCRUMB="ic-breadcrumb",this.resizeObserver=null,this.SHOW_BACK_ICON="show-back-icon",this.setAppearance=()=>{Array.from(this.el.querySelectorAll(this.IC_BREADCRUMB)).forEach((breadcrumb=>{breadcrumb.setAttribute("appearance",this.appearance)}))},this.setBackBreadcrumb=()=>{this.backBreadcrumbOnly&&this.setBackBreadcrumbAttr()},this.setBackBreadcrumbAttr=()=>{this.lastParentBreadcrumb&&(this.lastParentBreadcrumb.classList.add("show"),this.lastParentBreadcrumb.setAttribute(this.SHOW_BACK_ICON,"true"))},this.getLastParentBreadcrumb=()=>{const allBreadcrumbs=Array.from(this.el.querySelectorAll(this.IC_BREADCRUMB));return 1===allBreadcrumbs.length?null:(this.breadcrumbs=allBreadcrumbs.filter((breadcrumb=>!breadcrumb.getAttribute("current"))),this.breadcrumb=this.breadcrumbs[this.breadcrumbs.length-1],this.breadcrumb)},this.lastParentBreadcrumb=this.getLastParentBreadcrumb(),this.setDefaultBreadcrumbs=()=>{Array.from(this.el.querySelectorAll(this.IC_BREADCRUMB)).forEach((breadcrumb=>{breadcrumb.setAttribute(this.SHOW_BACK_ICON,"false")}))},this.setCollapsed=()=>{if(this.collapsed){const allBreadcrumbs=Array.from(this.el.querySelectorAll(this.IC_BREADCRUMB));this.collapsedBreadcrumbs=allBreadcrumbs.splice(1,allBreadcrumbs.length-2).filter((breadcrumb=>!breadcrumb.classList.contains("collapsed-breadcrumb-wrapper"))),this.collapsedBreadcrumbs.forEach((breadcrumb=>breadcrumb.classList.add("hide")));const firstBreadcrumb=allBreadcrumbs[0];firstBreadcrumb&&firstBreadcrumb.insertAdjacentElement("afterend",this.collapsedBreadcrumbWrapper)}},this.clickHandler=()=>{this.handleHiddenCollapsedBreadcrumbs(this.collapsedBreadcrumbWrapper)},this.renderCollapsedBreadcrumb=()=>{this.collapsedBreadcrumbWrapper=document.createElement("ic-breadcrumb"),this.collapsedBreadcrumbWrapper.classList.add("collapsed-breadcrumb-wrapper"),this.collapsedBreadcrumbEl=document.createElement("button");const ariaLabel=document.createElement("span");ariaLabel.id="collapsed-button-label",ariaLabel.innerText="Collapsed breadcrumbs",ariaLabel.className="hide",this.collapsedBreadcrumbEl.setAttribute("aria-labelledby","collapsed-button-label");const ariaDescribed=document.createElement("span");return ariaDescribed.id="collapsed-button-described",ariaDescribed.innerText="Select to view collapsed breadcrumbs",ariaDescribed.className="hide",this.collapsedBreadcrumbEl.setAttribute("aria-describedby","collapsed-button-described"),this.collapsedBreadcrumbEl.id="collapsed-ellipsis",this.collapsedBreadcrumbEl.innerText="...",this.collapsedBreadcrumbEl.classList.add("collapsed-breadcrumb"),this.collapsedBreadcrumbEl.addEventListener("click",this.clickHandler),this.collapsedBreadcrumbWrapper.append(ariaDescribed),this.collapsedBreadcrumbWrapper.append(ariaLabel),this.collapsedBreadcrumbWrapper.append(this.collapsedBreadcrumbEl),this.collapsedBreadcrumbWrapper},this.handleHiddenCollapsedBreadcrumbs=collapsedBreadcrumbWrapper=>{collapsedBreadcrumbWrapper.remove(),this.collapsedBreadcrumbs.forEach((breadcrumb=>{breadcrumb.classList.add("visuallyhidden"),breadcrumb.classList.remove("hide"),setTimeout((()=>{breadcrumb.classList.add("fade")}),this.ADD_CLASS_DELAY),this.removeVisuallyHiddenClass(breadcrumb)})),this.expandedBreadcrumbs=!0,this.collapsedBreadcrumbs[0].setFocus()},this.transitionendHandler=event=>{"opacity"===event.propertyName&&event.target.classList.remove("visuallyhidden")},this.removeVisuallyHiddenClass=breadcrumb=>{breadcrumb.addEventListener("transitionend",this.transitionendHandler)},this.setLastParentCollapsedBackBreadcrumb=()=>{this.setBackBreadcrumbAttr(),this.lastParentBreadcrumb.classList.remove("hide")},this.revertLastParentCollapsedBreadcrumb=()=>{this.lastParentBreadcrumb.setAttribute(this.SHOW_BACK_ICON,"false")},this.resizeObserverCallback=currSize=>{currSize!==this.deviceSize&&(this.deviceSize=currSize,this.deviceSize<=_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.D.S?(this.el.setAttribute("back-breadcrumb-only","true"),this.collapsed?this.setLastParentCollapsedBackBreadcrumb():this.setBackBreadcrumb()):(this.el.setAttribute("back-breadcrumb-only","false"),this.collapsed&&this.breadcrumbs&&this.breadcrumbs.length>2?(this.revertLastParentCollapsedBreadcrumb(),this.expandedBreadcrumbs?this.setDefaultBreadcrumbs():this.setCollapsed()):this.setDefaultBreadcrumbs()))},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{const currSize=(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.e)();this.resizeObserverCallback(currSize)})),this.resizeObserver.observe(this.el)},this.deviceSize=_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.D.XL,this.expandedBreadcrumbs=!1,this.appearance="default",this.backBreadcrumbOnly=!1,this.collapsed=!1}watchAppearanceHandler(){this.setAppearance()}watchBackBreadcrumbHandler(){this.setBackBreadcrumb()}componentWillLoad(){const allBreadcrumbs=Array.from(this.el.querySelectorAll(this.IC_BREADCRUMB));this.setAppearance(),this.backBreadcrumbOnly?this.setBackBreadcrumb():(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.runResizeObserver),this.collapsed&&(this.collapsedBreadcrumbWrapper=this.renderCollapsedBreadcrumb(),allBreadcrumbs.length>2&&((0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.e)()===_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.D.S?this.setLastParentCollapsedBackBreadcrumb():this.setCollapsed()))}disconnectedCallback(){this.breadcrumb&&this.breadcrumb.removeEventListener("transitionend",this.transitionendHandler),this.collapsedBreadcrumbEl&&this.collapsedBreadcrumbEl.removeEventListener("click",this.clickHandler)}render(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"ic-breadcrumb-group-back":this.backBreadcrumbOnly,"ic-breadcrumb-group-collapsed":this.collapsed}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{"aria-label":"breadcrumbs"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ol",null,(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{appearance:["watchAppearanceHandler"],backBreadcrumbOnly:["watchBackBreadcrumbHandler"]}}};BreadcrumbGroup.style=":host{display:block}:host ol{display:flex;list-style-type:none;align-items:center;flex-wrap:wrap;padding:0;margin:0}:host(.ic-breadcrumb-group-back) ol ::slotted(ic-breadcrumb){display:none}:host(.ic-breadcrumb-group-back) ol ::slotted(ic-breadcrumb.show){display:flex}:host(.ic-breadcrumb-group-collapsed) ol ::slotted(ic-breadcrumb.hide){display:none;opacity:0;visibility:hidden}:host(.ic-breadcrumb-group-collapsed) ol ::slotted(ic-breadcrumb.visuallyhidden){display:block;opacity:0;transition:all var(--ic-easing-transition-slow)}:host(.ic-breadcrumb-group-collapsed) ol ::slotted(ic-breadcrumb.fade){opacity:1}"}}]);