"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[2965],{"../web-components/dist/esm/chevron-icon-589e3b46.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Chevron});var Chevron='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"../web-components/dist/esm/close-icon-539ec8d1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>closeIcon});var closeIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n    <title>close icon</title>\n</svg>\n'},"../web-components/dist/esm/ic-side-navigation.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_side_navigation:()=>SideNavigation});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_close_icon_539ec8d1_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../web-components/dist/esm/close-icon-539ec8d1.js"),_chevron_icon_589e3b46_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../web-components/dist/esm/chevron-icon-589e3b46.js"),_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-02325877.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),SideNavigation=function(){function SideNavigation(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__.A)(this,SideNavigation),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.sideNavExpanded=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"sideNavExpanded",7),this.ANIMATION_DURATION=parseInt((0,_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.g)("--ic-transition-duration-slow"))||0,this.IC_NAVIGATION_ITEM="ic-navigation-item",this.resizeObserver=null,this.COLLAPSED_ICON_LABELS_END="collapsed-icon-labels-end",this.COLLAPSED_ICON_LABELS_START="collapsed-icon-labels-start",this.menuButton=null,this.emitSideNavigationExpanded=function(objDetails){_this.sideNavExpanded.emit({sideNavExpanded:objDetails.sideNavExpanded,sideNavMobile:objDetails.sideNavMobile})},this.toggleMenu=function(){_this.menuOpen=!_this.menuOpen,_this.setMobileMenuAriaAttributes(_this.menuOpen),_this.arrangeSlottedNavigationItem(_this.menuOpen),_this.setToggleMenuFlyoutMenuVisibility(_this.menuOpen),_this.emitSideNavigationExpanded({sideNavExpanded:_this.menuOpen,sideNavMobile:!0})},this.setToggleMenuFlyoutMenuVisibility=function(menuOpen){var sideNav=_this.el.shadowRoot.querySelector("#side-navigation"),sideNavInner=sideNav.querySelector(".side-navigation-inner"),bottomWrapper=sideNav.querySelector(".bottom-wrapper");menuOpen?(bottomWrapper.classList.add("menu-visibility-visible"),sideNavInner.classList.add("menu-visibility-visible")):setTimeout((function(){sideNavInner.classList.remove("menu-visibility-visible"),bottomWrapper.classList.remove("menu-visibility-visible")}),_this.ANIMATION_DURATION)},this.setMobileMenuAriaAttributes=function(menuOpen){null!==_this.menuButton&&(_this.menuButton.setAttribute("aria-expanded","".concat(menuOpen)),_this.menuButton.setAttribute("aria-label","".concat(menuOpen?"Close":"Open"," navigation menu")))},this.setAndRemoveNoWrapAfterMenuExpanded=function(){var appTitle=_this.el.shadowRoot.querySelector(".title-link ic-typography")||_this.el.querySelector("[slot='app-title']");appTitle.classList.add("ic-typography-no-wrap"),setTimeout((function(){appTitle.classList.remove("ic-typography-no-wrap")}),_this.ANIMATION_DURATION)},this.toggleMenuExpanded=function(){_this.menuExpanded=!_this.menuExpanded,_this.menuExpanded?(_this.setAndRemoveNoWrapAfterMenuExpanded(),_this.el.shadowRoot.querySelector(".app-title-inner-wrapper").classList.add("app-title-show")):(_this.el.style.setProperty("--navigation-item-width","320px"),_this.el.shadowRoot.querySelector(".app-title-inner-wrapper").classList.remove("app-title-show"),_this.el.addEventListener("transitionend",(function(e){"width"===e.propertyName&&_this.el.style.setProperty("--navigation-item-width",null)}))),_this.arrangeSlottedNavigationItem(_this.menuExpanded),_this.displayTooltipWithExpandedLongLabel(_this.menuExpanded),_this.collapsedIconLabels&&_this.animateCollapsedIconLabels(),_this.setExpandedButtonHeight(),_this.emitSideNavigationExpanded({sideNavExpanded:_this.menuExpanded})},this.arrangeSlottedNavigationItem=function(menuExpanded){_this.el.querySelectorAll("ic-navigation-item").forEach((function(navItem){var isNamedSlot=(0,_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.i)(navItem,"navigation-item"),isUnnamedSlot=navItem.children[0]&&!navItem.children[0].getAttribute("slot");if(isNamedSlot||isUnnamedSlot){var navItemSlot;navItemSlot=isNamedSlot?navItem.querySelector("[slot='navigation-item']"):navItem.children[0];var iconWrapper=document.createElement("div"),icon=navItemSlot.querySelector("svg"),label=navItem.textContent.trim(),icTypography=document.createElement("ic-typography");icTypography.classList.add("ic-typography-label","hydrated","navigation-item-side-nav-slotted-text"),iconWrapper.style.height="var(--ic-space-lg)",iconWrapper.append(icon),navItemSlot.textContent="",icTypography.textContent=label,navItemSlot.append(iconWrapper),navItemSlot.append(icTypography),_this.collapsedIconLabels?_this.styleSlottedCollapsedIconLabels(menuExpanded,icTypography):_this.styleSlottedIconLabels(menuExpanded,icTypography)}}))},this.styleSlottedCollapsedIconLabels=function(menuExpanded,icTypography){menuExpanded?(icTypography.style.marginTop="0",icTypography.style.whiteSpace="nowrap",icTypography.style.overflow="hidden",icTypography.style.textOverflow="ellipsis"):(icTypography.style.marginTop="10px",icTypography.style.whiteSpace="nowrap",icTypography.style.overflow="hidden",icTypography.style.textOverflow="ellipsis")},this.setExpandedButtonHeight=function(){var appStatusWrapper=_this.el.shadowRoot.querySelector("#side-navigation > .bottom-wrapper > .bottom-side-nav > .app-status-wrapper");0!==appStatusWrapper.offsetHeight&&_this.el.style.setProperty("--sm-side-navigation-bottom-bar-height","".concat(appStatusWrapper.offsetHeight,"px"))},this.styleSlottedIconLabels=function(menuExpanded,icTypography){menuExpanded?(icTypography.style.opacity="1",icTypography.style.visibility="visible",icTypography.style.transition="visibility 0s, opacity var(--ic-easing-transition-slow)"):(icTypography.style.opacity="0",icTypography.style.visibility="hidden",icTypography.style.transition="visibility 0s, opacity var(--ic-easing-transition-slow)")},this.transitionHandler=function(type){var primaryNavigationWrapper=_this.el.shadowRoot.querySelector(".primary-navigation"),secondaryNavigationWrapper=_this.el.shadowRoot.querySelector(".bottom-wrapper > .secondary-navigation"),classToRemove="start"===type?_this.COLLAPSED_ICON_LABELS_END:_this.COLLAPSED_ICON_LABELS_START,classToAdd="start"===type?_this.COLLAPSED_ICON_LABELS_START:_this.COLLAPSED_ICON_LABELS_END;primaryNavigationWrapper&&(primaryNavigationWrapper.classList.remove(classToRemove),primaryNavigationWrapper.classList.add(classToAdd)),secondaryNavigationWrapper&&(secondaryNavigationWrapper.classList.remove(classToRemove),secondaryNavigationWrapper.classList.add(classToAdd))},this.transitionEndHandler=function(){_this.transitionHandler("end")},this.animateCollapsedIconLabels=function(){_this.transitionHandler("start"),_this.transitionEndHandler(),_this.el.addEventListener("transitionend",_this.transitionEndHandler)},this.paddingIconWidth=function(navItems){var navItemLink=navItems[0].shadowRoot&&(navItems[0].shadowRoot.querySelector("ic-tooltip a")||navItems[0].shadowRoot.querySelector("ic-tooltip div"))||navItems[0].querySelector("a")||navItems[0].querySelector("div"),navItemSVG=navItems[0].querySelector("svg"),navStyles={gap:window.getComputedStyle(navItemLink).gap,iconWidth:window.getComputedStyle(navItemSVG).width,paddingLeft:window.getComputedStyle(navItemLink).paddingLeft};return Object.values(navStyles).reduce((function(prev,curr){return prev+parseInt(curr)}),0)},this.displayTooltipWithExpandedLongLabel=function(menuExpanded){var timer;menuExpanded?timer=setTimeout((function(){var sideNavWidth=_this.el.clientWidth,navigationItems=Array.from(_this.el.querySelectorAll(_this.IC_NAVIGATION_ITEM)),paddingIconDelta=navigationItems.length?_this.paddingIconWidth(navigationItems):0;navigationItems.forEach((function(navigationItem){var _a,_b;((null===(_a=navigationItem.shadowRoot&&navigationItem.shadowRoot.querySelector("ic-tooltip .link ic-typography.ic-typography-label"))||void 0===_a?void 0:_a.scrollWidth)||(null===(_b=navigationItem.querySelector("ic-typography.ic-typography-label"))||void 0===_b?void 0:_b.scrollWidth))>sideNavWidth-paddingIconDelta&&navigationItem.setAttribute("display-navigation-tooltip","true")}))}),_this.ANIMATION_DURATION):(clearTimeout(timer),Array.from(_this.el.querySelectorAll(_this.IC_NAVIGATION_ITEM)).forEach((function(navigationItem){navigationItem.setAttribute("display-navigation-tooltip","false")})))},this.setMenuExpanded=function(expanded){_this.menuExpanded=expanded},this.setParentPaddingTop=function(value){_this.el.parentElement.style.setProperty("padding-top",value)},this.setParentPaddingLeft=function(value){_this.el.parentElement.style.setProperty("padding-left",value)},this.renderAppTitle=function(isAppNameSubtitleVariant){var displayShortAppTitle=_this.deviceSize<=_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.D.S&&!(0,_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.E)(_this.shortAppTitle);return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:displayShortAppTitle||isAppNameSubtitleVariant?"subtitle-small":"h3","aria-label":displayShortAppTitle?"".concat(_this.appTitle," (").concat(_this.shortAppTitle,")"):void 0},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("h1",null,displayShortAppTitle?_this.shortAppTitle:_this.appTitle))},this.resizeObserverCallback=function(currSize){var _a;_this.deviceSize=currSize;var isSmallAndDisableTopBar=currSize===_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.D.S&&!_this.disableTopBarBehaviour;if(!_this.disableAutoParentStyling){var topBarHeight=null===(_a=_this.el.shadowRoot.querySelector(".top-bar"))||void 0===_a?void 0:_a.scrollHeight;_this.setParentPaddingTop(isSmallAndDisableTopBar?"".concat(topBarHeight,"px"):"0"),isSmallAndDisableTopBar&&_this.setParentPaddingLeft("0"),isSmallAndDisableTopBar&&_this.inline?_this.el.parentElement.style.setProperty("height","calc(100% - ".concat(topBarHeight,"px)")):isSmallAndDisableTopBar||_this.el.parentElement.style.setProperty("height","100%")}if(!_this.disableAutoParentStyling){var paddingLeft="calc(var(--ic-space-xxl) ".concat(_this.collapsedIconLabels?"* 2":"+ var(--ic-space-xs)",")");currSize>_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.D.L?(_this.setParentPaddingTop("0"),_this.setParentPaddingLeft("0")):(currSize>_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.D.S||_this.disableTopBarBehaviour)&&currSize<=_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.D.M&&_this.static?_this.setParentPaddingLeft(paddingLeft):(currSize>_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.D.S||_this.disableTopBarBehaviour)&&currSize<=_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.D.L&&_this.setParentPaddingLeft(_this.static&&_this.menuExpanded?"calc(var(--ic-space-xl) * 10)":paddingLeft)}},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){var currSize=(0,_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.e)();_this.deviceSizeAppTitle=currSize,_this.resizeObserverCallback(currSize)})),_this.resizeObserver.observe(document.body,{box:"content-box"})},this.setCollapsedIconLabels=function(){Array.from(_this.el.querySelectorAll(_this.IC_NAVIGATION_ITEM)).forEach((function(navigationItem){navigationItem.setAttribute("collapsed-icon-label","true")}))},this.styleSlottedCollapsedIconLabel=function(){Array.from(_this.el.querySelectorAll(".navigation-item-side-nav-slotted-text")).forEach((function(icTypography){var _a,_b;(null===(_b=null===(_a=null==icTypography?void 0:icTypography.parentElement)||void 0===_a?void 0:_a.parentElement)||void 0===_b?void 0:_b.classList.contains("navigation-item-side-nav-collapsed-with-label"))&&(icTypography.style.whiteSpace="nowrap",icTypography.style.overflow="hidden",icTypography.style.textOverflow="ellipsis",icTypography.style.marginTop="10px")}))},this.renderTopBar=function(_ref){var isSDevice=_ref.isSDevice,foregroundColor=_ref.foregroundColor,menuOpen=_ref.menuOpen,href=_ref.href,isAppNameSubtitleVariant=_ref.isAppNameSubtitleVariant,hasTitle=""!==_this.appTitle&&(0,_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.d)(_this.appTitle),Component=(0,_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.i)(_this.el,"app-title")?"div":"a",attrs="a"==Component&&{href};return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__.A)({"top-bar":!0},_this.foregroundColor,!0)},isSDevice&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{"aria-labelledby":"menu-navigation-toggle-button-landmark","aria-hidden":"false"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{"aria-label":"Open navigation menu",class:"menu-button",id:"menu-button",variant:"secondary",size:"small","full-width":"true",appearance:foregroundColor,onClick:_this.toggleMenu,ariaOwnsId:"side-navigation","aria-haspopup":"true","aria-expanded":"false",ref:function ref(el){return _this.menuButton=el}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"mobile-top-bar-menu-icon",slot:"icon",innerHTML:menuOpen?_close_icon_539ec8d1_js__WEBPACK_IMPORTED_MODULE_5__.c:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n  <path d="M0 0h24v24H0V0z" fill="none" />\n  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />\n  <title>menu icon</title>\n</svg>\n'}),menuOpen?"Close":"Menu"),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{id:"menu-navigation-toggle-button-landmark",class:"navigation-landmark-title","aria-hidden":"true"},"Navigation menu toggle button")),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"app-title-wrapper"},(hasTitle||(0,_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.i)(_this.el,"app-title"))&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(Component,Object.assign({},attrs,{class:"title-link"}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"app-icon-container","aria-hidden":"true"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"app-icon"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"app-title-inner-wrapper"},(0,_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.i)(_this.el,"app-title")?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"app-title"}):_this.renderAppTitle(isAppNameSubtitleVariant)))))},this.deviceSize=(0,_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.e)(),this.deviceSizeAppTitle=_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.D.S,this.foregroundColor=(0,_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.b)(),this.hasSecondaryNavigation=!1,this.menuExpanded=!1,this.menuOpen=!1,this.appTitle=void 0,this.collapsedIconLabels=!1,this.disableAutoParentStyling=!1,this.disableTopBarBehaviour=!1,this.expanded=!1,this.href="/",this.inline=!1,this.shortAppTitle="",this.static=!1,this.status=void 0,this.version=void 0}return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.A)(SideNavigation,[{key:"watchExpandedHandler",value:function watchExpandedHandler(){this.setMenuExpanded(this.expanded)}},{key:"componentWillLoad",value:function componentWillLoad(){this.setMenuExpanded(this.expanded),this.collapsedIconLabels&&this.setCollapsedIconLabels(),this.hasSecondaryNavigation=(0,_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"secondary-navigation")}},{key:"componentDidLoad",value:function componentDidLoad(){this.emitSideNavigationExpanded({sideNavExpanded:this.menuExpanded,sideNavMobile:this.deviceSize===_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.D.S&&!this.disableTopBarBehaviour}),(0,_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.runResizeObserver),this.styleSlottedCollapsedIconLabel(),this.arrangeSlottedNavigationItem(this.menuExpanded),this.displayTooltipWithExpandedLongLabel(this.menuExpanded),this.setExpandedButtonHeight(),!(0,_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"app-title")&&(0,_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.appTitle,propName:"app-title"}],"Side Navigation")}},{key:"disconnectedCallback",value:function disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect(),this.el.removeEventListener("transitionend",this.transitionEndHandler)}},{key:"themeChangeHandler",value:function themeChangeHandler(_ref2){var detail=_ref2.detail;this.foregroundColor=detail.mode}},{key:"render",value:function render(){var appTitle=this.appTitle,menuOpen=this.menuOpen,foregroundColor=this.foregroundColor,menuExpanded=this.menuExpanded,href=this.href,status=this.status,version=this.version,collapsedIconLabels=this.collapsedIconLabels,inline=this.inline,isSDevice=!this.disableTopBarBehaviour&&this.deviceSize===_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.D.S,isMdDevice=this.deviceSize===_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.D.M,isLgDevice=this.deviceSize>=_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.D.L,isAppNameSubtitleVariant=this.deviceSizeAppTitle===_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.D.S,displayExpandBtn=isMdDevice||this.disableTopBarBehaviour||isLgDevice&&!this.static,topBarProps={isSDevice,foregroundColor,menuOpen,href,isAppNameSubtitleVariant,appTitle};return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__.A)({"xs-menu-open":menuOpen&&isSDevice,"xs-menu-close":!menuOpen&&isSDevice,"sm-collapsed":!isSDevice&&!menuExpanded,"sm-expanded":!isSDevice&&menuExpanded,"side-display":this.deviceSize>_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.D.S||this.disableTopBarBehaviour},_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Dark,foregroundColor===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Dark),"collapsed-labels",!isSDevice&&!menuExpanded&&collapsedIconLabels),"inline",inline)},isSDevice&&this.renderTopBar(Object.assign({},topBarProps)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"side-navigation",id:"side-navigation"},!isSDevice&&this.renderTopBar(Object.assign({},topBarProps)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"side-navigation-inner"},(0,_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"primary-navigation")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{class:"primary-navigation","aria-labelledby":"primary-navigation-landmark"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"aria-hidden":"true",class:"navigation-landmark-title",id:"primary-navigation-landmark"},"Primary"),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{class:"navigation-list"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"primary-navigation"})))),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__.A)({},"bottom-wrapper",!0),"classification-spacing",(0,_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.u)())},(0,_helpers_02325877_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"secondary-navigation")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{class:"secondary-navigation","aria-labelledby":"secondary-navigation-landmark"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"aria-hidden":"true",class:"navigation-landmark-title",id:"secondary-navigation-landmark"},"Secondary"),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{class:"navigation-list"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"secondary-navigation"}))),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"bottom-side-nav"},this.hasSecondaryNavigation&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-divider",null),displayExpandBtn&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{class:"menu-expand-button",innerHTML:_chevron_icon_589e3b46_js__WEBPACK_IMPORTED_MODULE_7__.C,onClick:this.toggleMenuExpanded,"aria-label":"".concat(menuExpanded?"Collapse":"Expand"," side navigation")}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"app-status-wrapper"},""!==status&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__.A)({},"app-status",!0)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{"aria-label":"app tag",variant:"label-uppercase",class:"app-status-text"},status)),""!==version&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"label",class:"app-version","aria-label":"app version"},version))))))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"watchers",get:function get(){return{expanded:["watchExpandedHandler"]}}}]),SideNavigation}();SideNavigation.style=':host{display:block;--side-navigation-position:fixed;--side-navigation-position-left:0;--side-navigation-position-top:var(--ic-space-xxl);--side-navigation-height:var(--ic-space-xxl);--sm-side-navigation-top-bar-height:3.5rem;--sm-side-navigation-collapsed-labels-width:6rem;--sm-side-navigation-expand-transition-duration:var(\n    --ic-transition-duration-slow\n  );--side-navigation-width:20rem;--sm-side-navigation-bottom-bar-height:3.5rem;z-index:var(--ic-z-index-side-navigation)}:host>*{box-sizing:border-box}.side-navigation{display:flex;flex-direction:column;width:var(--side-navigation-width);color:var(--ic-theme-text);position:var(--side-navigation-position);top:var(--side-navigation-position-top);left:calc(var(--side-navigation-width) * -1);bottom:0;background-color:var(--ic-theme-primary);z-index:var(--ic-z-index-side-navigation)}:host(.inline) .side-navigation{position:absolute;height:100%}:host(.anchor-right) .side-navigation{right:calc(var(--side-navigation-width) * -1)}.classification-spacing{margin-bottom:var(--ic-space-lg)}.navigation-list{padding:0;margin:0;list-style:none}.side-navigation-inner{background-color:var(--ic-theme-primary);display:flex;flex-direction:column;flex:1 1 0;overflow:auto}:host(.inline) .side-navigation-inner{flex:1}:host(.xs-menu-open) .side-navigation{transition:left var(--ic-easing-transition-slow);left:0}:host(:has(.xs-menu-open,.xs-menu-close)) ::slotted(ic-navigation-item){--navigation-item-side-nav-right:var(--ic-space-xl)}:host(.xs-menu-close) .side-navigation{left:calc(var(--side-navigation-width) * -1);transition:left var(--ic-easing-transition-slow)}:host(.xs-menu-close) .side-navigation>*{visibility:hidden}:host(.anchor-right.xs-menu-open) .side-navigation{right:0;left:auto}:host(.anchor-right.xs-menu-close) .side-navigation{right:calc(var(--side-navigation-width) * -1);left:auto;transition:right var(--ic-easing-transition-slow)}.bottom-wrapper{border-top:var(--ic-keyline-lighten);bottom:0;left:0;z-index:2;box-shadow:-0.188rem -0.188rem 0.5rem rgb(0 0 0 / 20%);background-color:var(--ic-theme-primary);display:flex;flex-direction:column}:host(.inline) .bottom-wrapper{position:sticky}:host(.dark) .bottom-wrapper{border-top:var(--ic-keyline-darken)}.top-bar{display:flex;flex-direction:row;align-items:center;min-height:var(--side-navigation-height);padding:var(--ic-space-xs);box-sizing:border-box;background-color:var(--ic-theme-primary);position:fixed;top:0;left:0;right:0;border-bottom:var(--ic-keyline-darken);box-shadow:var(--ic-elevation-overlay);z-index:2;overflow:hidden;visibility:visible}:host(.inline) .top-bar{position:absolute}.top-bar.dark a:focus{box-shadow:var(--ic-border-focus)}.top-bar.light{border-bottom:var(--ic-keyline-lighten)}.app-title-wrapper{display:flex;margin-left:var(--ic-space-xs);border-left:var(--ic-keyline-darken);padding-left:var(--ic-space-xxs);color:var(--ic-theme-text);align-items:center}.app-title-wrapper ic-typography h1{margin:0}@media screen and (min-width: 340px){.app-title-wrapper ic-typography{margin-left:var(--ic-space-xs)}}:host .title-link{display:flex;align-items:center;transition:box-shadow var(--ic-easing-transition-fast),\n    background-color var(--ic-easing-transition-fast);text-decoration:none;padding:var(--ic-space-xxs);color:var(--ic-theme-text)}:host .title-link:visited,:host .title-link:active{color:var(--ic-theme-text)}slot[name="app-title"]::slotted(a),slot[name="app-icon"]::slotted(a){color:var(--ic-theme-text);outline:none;text-decoration:none;display:flex}slot[name="app-title"]::slotted(ic-typography),slot[name="app-title"]::slotted(a){margin-left:var(--ic-space-xs) !important}slot[name="app-title"]::slotted(a){font:var(--ic-font-subtitle-small)}@media screen and (min-width: 577px){:host(.sm-collapsed) slot[name="app-title"]::slotted(ic-typography),:host(.sm-collapsed) slot[name="app-title"]::slotted(a){position:absolute;left:-9999px;opacity:0;transition:opacity var(--ic-easing-transition-slow)}:host(.sm-expanded) slot[name="app-title"]::slotted(a){font:var(--ic-font-h3) !important;font-weight:var(--ic-font-weight-semibold) !important;margin-left:var(--ic-space-xs) !important}}:host .title-link:hover{border-radius:var(--ic-border-radius);background-color:var(--ic-theme-hover)}:host .title-link:active{background-color:var(--ic-theme-active)}:host .title-link:focus,:host .title-link:focus-within{border-radius:var(--ic-border-radius);box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline);background-color:transparent}:host .title-link ic-typography{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.app-title-wrapper ::slotted(svg){fill:var(--ic-theme-text)}.app-icon-container{display:none}.button-label{display:flex;align-items:center}.mobile-top-bar-menu-icon{display:flex}.menu-button{width:6.5rem}.app-status-wrapper{inset:0 var(--ic-space-sm) 0 3.5rem;width:auto;display:flex;gap:var(--ic-space-xs);padding:var(--ic-space-sm) 0;justify-content:flex-end;align-items:flex-end;pointer-events:none;height:-moz-fit-content;height:fit-content;margin:0 var(--ic-space-xs)}.app-status-wrapper .app-version{display:flex;overflow-wrap:break-word;padding-bottom:var(--ic-space-xxs)}.app-status-wrapper .app-status{display:flex;border-radius:1rem;background-color:var(--ic-theme-text);color:var(--ic-color-primary-text);padding:var(--ic-space-xxs) var(--ic-space-lg);min-width:1rem}.app-status-wrapper .app-status-text{overflow-wrap:break-word}:host(.dark) .app-status-wrapper .app-status{color:var(--ic-color-white-text)}.navigation-landmark-title{position:absolute;width:var(--ic-space-1px);height:var(--ic-space-1px);padding:0;margin:calc(-1 * var(--ic-space-1px));overflow:hidden}::slotted(ic-navigation-group){--navigation-group-height:2.75rem;--navigation-group-width:100%;--navigation-group-justify-content:space-between;--navigation-group-hover:var(--ic-theme-hover);--navigation-group-text-hover:var(--ic-theme-text);--navigation-item-child-height:3.5rem;--navigation-item-child-active:var(--ic-action-dark-bg-active);--navigation-item-child-color:var(--ic-theme-text);--navigation-group-expand-toggle-padding:0.25rem}::slotted(ic-navigation-item),::slotted(ic-navigation-group){--navigation-item-justify-content:flex-start;--navigation-item-min-height:56px;--navigation-item-height:auto}.bottom-side-nav{position:relative;align-content:flex-end;min-height:var(--sm-side-navigation-top-bar-height)}.bottom-side-nav ic-divider{position:absolute;top:0;width:100%}.primary-navigation{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none}.primary-navigation::-webkit-scrollbar{display:none}.primary-navigation,.secondary-navigation{overflow-x:hidden}.bottom-side-nav .menu-expand-button{position:absolute;display:none}.menu-visibility-visible{visibility:visible;width:100%}.app-title-show{min-width:15.5rem}:host(.side-display){display:flex;flex-direction:column;height:100vh;position:var(--side-navigation-position);left:0;top:0;bottom:0}:host(.side-display) .app-icon-container{height:40px;display:flex;align-items:center}:host(.side-display) .top-bar{--side-navigation-height:var(--sm-side-navigation-top-bar-height);position:relative;padding:0;box-shadow:-0.188rem 0.188rem 0.5rem rgb(0 0 0 / 20%)}:host(.inline.side-display) .top-bar{position:sticky}:host(.anchor-right.side-display) .top-bar{box-shadow:0.188rem 0.188rem 0.5rem rgb(0 0 0 / 20%)}:host(.anchor-right.side-display) .bottom-wrapper{box-shadow:0.188rem -0.188rem 0.5rem rgb(0 0 0 / 20%)}:host(.side-display) .side-navigation,:host(.side-display) .top-bar{width:var(--sm-side-navigation-top-bar-height)}:host(.sm-collapsed.side-display){width:var(--sm-side-navigation-top-bar-height);transition:width var(--ic-easing-transition-slow)}:host(.sm-collapsed.collapsed-labels.side-display){width:var(--sm-side-navigation-collapsed-labels-width)}:host(.sm-expanded.side-display){width:var(--side-navigation-width);transition:width var(--ic-easing-transition-slow);box-shadow:var(--ic-elevation-overlay)}:host(.side-display) .side-navigation{--side-navigation-position-top:0;flex:1;position:relative;top:auto;left:auto;bottom:auto}:host(.inline.side-display) .side-navigation{position:relative}:host(.anchor-right.side-display) .side-navigation{left:auto;right:0}:host(.side-display) .app-title-wrapper{margin-left:0;border-left:none;padding:var(--ic-space-xs) var(--ic-space-sm)}:host(.side-display) .app-title-wrapper ::slotted(svg){height:var(--ic-space-lg);width:var(--ic-space-lg)}:host(.side-display) .app-title-wrapper ic-typography{font-weight:var(--ic-font-weight-semibold)}:host(.sm-collapsed.side-display) .app-title-wrapper ic-typography{position:absolute;left:-9999px;opacity:0;transition:opacity var(--ic-easing-transition-slow)}:host(.sm-expanded.side-display) ic-typography{position:relative;left:0}:host(.sm-expanded.side-display) :is(.side-navigation,.top-bar){width:var(--side-navigation-width);transition:width var(--ic-easing-transition-slow)}:host(.sm-collapsed.side-display) :is(.side-navigation,.top-bar){width:var(--sm-side-navigation-top-bar-height);transition:width var(--ic-easing-transition-slow)}:host(.anchor-right.sm-expanded.side-display) :is(.side-navigation,.top-bar){left:auto;right:0}:host(.side-display) .app-status-wrapper,:host(.sm-collapsed.side-display) .app-status-wrapper{display:none;margin-left:0}:host(.sm-expanded.side-display) .app-status-wrapper{display:flex;max-width:16rem;margin-right:calc(var(--ic-space-xxxs) + var(--ic-space-xs))}:host(.side-display) .bottom-side-nav{justify-items:flex-end;align-items:flex-end;justify-content:flex-end;display:flex;outline:none}:host(.side-display) .bottom-side-nav .menu-expand-button{padding-left:var(--ic-space-md);height:var(--sm-side-navigation-top-bar-height);width:100%;color:var(--ic-theme-text);background-color:transparent;outline:var(--ic-hc-focus-outline);border:none;cursor:pointer;display:flex;transition:var(--ic-easing-transition-fast)}:host(.sm-expanded.side-display) .bottom-side-nav .menu-expand-button{height:100%}:host(.side-display) .bottom-side-nav .menu-expand-button svg{justify-items:flex-start;align-self:center;display:inline-block;width:var(--ic-space-lg);height:var(--ic-space-lg)}:host(.side-display) .bottom-side-nav .menu-expand-button:hover{background-color:var(--ic-theme-hover)}:host(.side-display) .bottom-side-nav .menu-expand-button:focus{box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);background-color:transparent}:host(.sm-collapsed.side-display) .bottom-side-nav .menu-expand-button svg{transform:scaleX(1);transition:transform var(--ic-easing-transition-slow)}:host(.sm-expanded.side-display) .bottom-side-nav .menu-expand-button svg{transform:scaleX(-1);transition:transform var(--ic-easing-transition-slow);align-self:flex-end;margin-bottom:0.875rem}:host(.anchor-right.sm-collapsed.side-display) .bottom-side-nav .menu-expand-button svg{transform:scaleX(-1)}:host(.anchor-right.sm-expanded.side-display) .bottom-side-nav .menu-expand-button svg{transform:scaleX(1)}:host(.sm-collapsed.side-display) ::slotted(ic-navigation-item){--navigation-item-label-opacity:1}:host(.sm-collapsed.side-display) ::slotted(ic-navigation-item),:host(.sm-collapsed.side-display) ::slotted(ic-navigation-group){--navigation-item-label-opacity:0;--navigation-item-min-height:56px;--navigation-item-height:56px}:host(.sm-expanded.side-display) ::slotted(ic-navigation-item),:host(.sm-expanded.side-display) ::slotted(ic-navigation-group){--navigation-item-label-opacity:1;--navigation-item-height:auto;--navigation-item-min-height:56px;--navigation-item-width:320px;--navigation-item-side-nav-right:var(--ic-space-xl)}:host(.sm-collapsed.side-display) ::slotted(ic-navigation-group){--navigation-group-title-position:absolute;--navigation-group-title-position-left:-9999px;--navigation-group-title-opacity:none}:host(.sm-expanded.side-display) ::slotted(ic-navigation-group){--navigation-group-title-position:relative;--navigation-group-title-position-left:0;--navigation-group-expand-toggle-padding:0.25rem;--navigation-group-title-opacity:flex}:host(.sm-collapsed.collapsed-labels.side-display) .side-navigation,:host(.sm-collapsed.collapsed-labels.side-display) .top-bar{width:var(--sm-side-navigation-collapsed-labels-width)}:host(.sm-collapsed.collapsed-labels.side-display) .menu-expand-button{padding:0}:host(.sm-collapsed.collapsed-labels.side-display) .app-title-wrapper{width:100%;justify-content:center}:host(.sm-collapsed.collapsed-labels.side-display) ::slotted(ic-navigation-group){--navigation-group-justify-content:center;--navigation-item-label-opacity:1;--navigation-group-item-min-width:100%;--navigation-group-expand-toggle-padding:1rem}:host(.collapsed-labels.side-display) .bottom-side-nav .menu-expand-button{justify-content:center}:host(.side-display) .collapsed-icon-labels-start{visibility:hidden;opacity:0}:host(.side-display) .collapsed-icon-labels-end{visibility:visible;opacity:1;transition:visibility 0s, opacity var(--ic-easing-transition-slow)}@media screen and (min-width: 340px){.app-icon-container{display:flex}}@media screen and (min-width: 993px){:host(.side-display){position:sticky;left:auto;top:0;bottom:0}:host(.sm-expanded.side-display){box-shadow:none}}@media (forced-colors: active){.side-navigation,.top-bar{border-right:var(--ic-hc-border)}slot[name="app-icon"]::slotted(svg){fill:currentcolor}}'}}]);