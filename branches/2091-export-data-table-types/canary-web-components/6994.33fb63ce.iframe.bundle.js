"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[6994],{"./dist/esm/helpers-33a3a9f7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>isPropDefined,B:()=>isNumeric,C:()=>capitalize,D:()=>checkResizeObserver,E:()=>isMacDevice,I:()=>IcThemeForegroundEnum,a:()=>isEmptyString,b:()=>addDataToPosition,c:()=>checkSlotInChildMutations,d:()=>debounce,e:()=>IcDayNames,f:()=>IcDateInputMonths,g:()=>getThemeFromContext,h:()=>IcWeekDays,i:()=>isSlotUsed,j:()=>IcShortDayNames,k:()=>getLabelFromValue,l:()=>getFilteredMenuOptions,m:()=>getOptionsWithoutGroupTitlesCount,n:()=>removeFormResetListener,o:()=>onComponentRequiredPropUndefined,p:()=>pxToRem,q:()=>inheritAttributes,r:()=>removeDisabledFalse,s:()=>stringEnumToArray,t:()=>addFormResetListener,u:()=>renderHiddenInput,v:()=>getInputDescribedByText,w:()=>isMobileOrTablet,x:()=>hasValidationStatus,y:()=>IC_INHERITED_ARIA,z:()=>IcInformationStatus});const IC_INHERITED_ARIA=["aria-atomic","aria-autocomplete","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-expanded","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"],IC_BLOCK_COLOR_COMPONENTS=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],IC_FIXED_COLOR_COMPONENTS=["ic-alert"],IC_BLOCK_COLOR_EXCEPTIONS={"ic-alert":["ic-link"]};var IcInformationStatus,IcThemeForegroundEnum,IcDateInputMonths,IcShortDayNames,IcDayNames,IcWeekDays;!function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={})),function(IcDateInputMonths){IcDateInputMonths[IcDateInputMonths.January=0]="January",IcDateInputMonths[IcDateInputMonths.February=1]="February",IcDateInputMonths[IcDateInputMonths.March=2]="March",IcDateInputMonths[IcDateInputMonths.April=3]="April",IcDateInputMonths[IcDateInputMonths.May=4]="May",IcDateInputMonths[IcDateInputMonths.June=5]="June",IcDateInputMonths[IcDateInputMonths.July=6]="July",IcDateInputMonths[IcDateInputMonths.August=7]="August",IcDateInputMonths[IcDateInputMonths.September=8]="September",IcDateInputMonths[IcDateInputMonths.October=9]="October",IcDateInputMonths[IcDateInputMonths.November=10]="November",IcDateInputMonths[IcDateInputMonths.December=11]="December"}(IcDateInputMonths||(IcDateInputMonths={})),function(IcShortDayNames){IcShortDayNames[IcShortDayNames.Sun=0]="Sun",IcShortDayNames[IcShortDayNames.Mon=1]="Mon",IcShortDayNames[IcShortDayNames.Tue=2]="Tue",IcShortDayNames[IcShortDayNames.Wed=3]="Wed",IcShortDayNames[IcShortDayNames.Thu=4]="Thu",IcShortDayNames[IcShortDayNames.Fri=5]="Fri",IcShortDayNames[IcShortDayNames.Sat=6]="Sat"}(IcShortDayNames||(IcShortDayNames={})),function(IcDayNames){IcDayNames[IcDayNames.Sunday=0]="Sunday",IcDayNames[IcDayNames.Monday=1]="Monday",IcDayNames[IcDayNames.Tuesday=2]="Tuesday",IcDayNames[IcDayNames.Wednesday=3]="Wednesday",IcDayNames[IcDayNames.Thursday=4]="Thursday",IcDayNames[IcDayNames.Friday=5]="Friday",IcDayNames[IcDayNames.Saturday=6]="Saturday"}(IcDayNames||(IcDayNames={})),function(IcWeekDays){IcWeekDays[IcWeekDays.Sunday=0]="Sunday",IcWeekDays[IcWeekDays.Monday=1]="Monday",IcWeekDays[IcWeekDays.Tuesday=2]="Tuesday",IcWeekDays[IcWeekDays.Wednesday=3]="Wednesday",IcWeekDays[IcWeekDays.Thursday=4]="Thursday",IcWeekDays[IcWeekDays.Friday=5]="Friday",IcWeekDays[IcWeekDays.Saturday=6]="Saturday"}(IcWeekDays||(IcWeekDays={}));const stringEnumToArray=theEnum=>{const arr=[];return Object.values(theEnum).forEach((val=>{if(isNaN(Number(val))){const str=val;arr.push(str)}})),arr},inheritAttributes=(element,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(element.hasAttribute(attr)){null!==element.getAttribute(attr)&&(attributeObject[attr]=element.getAttribute(attr)),element.removeAttribute(attr)}})),attributeObject},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},renderHiddenInput=(always,container,name,value,disabled)=>{if(void 0!==name&&(always||hasShadowDom(container))){const inputs=container.querySelectorAll("input.ic-input");let input=Array.from(inputs).filter((el=>container===el.parentElement))[0];null==input&&(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("ic-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,value instanceof Date?input.value=value?value.toISOString():null:input.value=value||""}},getThemeFromContext=(el,themeFromEvent=null)=>{var _a;const blockColorParent=(el.parentElement||el.getRootNode().host.parentElement).closest(IC_BLOCK_COLOR_COMPONENTS.join(","));if(null!==blockColorParent){const parentTag=blockColorParent.tagName.toLowerCase(),currentTag=el.tagName.toLowerCase();return(null===(_a=IC_BLOCK_COLOR_EXCEPTIONS[parentTag])||void 0===_a?void 0:_a.includes(currentTag))?IcThemeForegroundEnum.Default:null===themeFromEvent||IC_FIXED_COLOR_COMPONENTS.includes(parentTag)?blockColorParent.classList.contains(IcThemeForegroundEnum.Dark)?IcThemeForegroundEnum.Dark:IcThemeForegroundEnum.Light:themeFromEvent}return IcThemeForegroundEnum.Default},isEmptyString=value=>!value||0===value.trim().length,isPropDefined=prop=>void 0!==prop?prop:null,getCssProperty=cssVar=>getComputedStyle(document.documentElement).getPropertyValue(cssVar);Number(getCssProperty("--ic-breakpoint-xs").replace("px","")),Number(getCssProperty("--ic-breakpoint-sm").replace("px","")),Number(getCssProperty("--ic-breakpoint-md").replace("px","")),Number(getCssProperty("--ic-breakpoint-lg").replace("px","")),Number(getCssProperty("--ic-breakpoint-xl").replace("px",""));const isSlotUsed=(element,slotName)=>Array.from(element.children).some((child=>child.getAttribute("slot")===slotName)),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,getInputDescribedByText=(inputId,helperText,validationText)=>{return`${helperText?(id=inputId,id+"-helper-text"):""} ${validationText?(id=>id+"-validation-text")(inputId):""}`.trim();var id},isMobileOrTablet=()=>"maxTouchPoints"in navigator&&navigator.maxTouchPoints>0,getLabelFromValue=(value,options,valueField="value",labelField="label")=>{const ungroupedOptions=[];if(options.length>0&&options.map){options.map((option=>{option.children?option.children.map((option=>ungroupedOptions.push(option))):ungroupedOptions.push(option)}));const matchingValue=ungroupedOptions.find((option=>option[valueField]===value));if(void 0!==matchingValue)return matchingValue[labelField]}},getFilteredMenuOptions=(options,includeDescriptions,searchString,position,labelField="label")=>options.filter((option=>{var _a;const label=option[labelField].toLowerCase(),description=null===(_a=option.description)||void 0===_a?void 0:_a.toLowerCase(),lowerSearchString=searchString.toLowerCase();return"anywhere"===position?includeDescriptions?label.includes(lowerSearchString)||(null==description?void 0:description.includes(lowerSearchString)):label.includes(lowerSearchString):includeDescriptions?label.startsWith(lowerSearchString)||(null==description?void 0:description.startsWith(lowerSearchString)):label.startsWith(lowerSearchString)})),getOptionsWithoutGroupTitlesCount=options=>{const optionsWithoutGroupTitles=[];return options.length>0&&options.map&&options.map((option=>{option.children?option.children.map((option=>optionsWithoutGroupTitles.push(option))):optionsWithoutGroupTitles.push(option)})),optionsWithoutGroupTitles.length},pxToRem=(px,base=16)=>1/base*parseInt(px)+"rem",isNumeric=value=>/^-?\d+$/.test(value),hasValidationStatus=(status,disabled)=>""!==status&&!disabled,onComponentRequiredPropUndefined=(props,component)=>{for(let i=0;i<props.length;i++){const{prop,propName}=props[i];null==prop&&console.error(`No ${propName} specified for ${component} component - prop '${propName}' (web components) / '${kebabToCamelCase(propName)}' (react) required`)}},kebabToCamelCase=kebabCase=>{const individualWords=(kebabCase=kebabCase.toLowerCase()).split("-");let camelCase=individualWords[0];for(let i=1;i<individualWords.length;i++)camelCase+=individualWords[i].substring(0,1).toUpperCase()+individualWords[i].substring(1);return camelCase},checkResizeObserver=callbackFn=>{"undefined"!=typeof window&&void 0!==window.ResizeObserver&&callbackFn()},getForm=el=>el.closest("FORM"),addFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.addEventListener("reset",callbackFn)},removeFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.removeEventListener("reset",callbackFn)},removeDisabledFalse=(disabled,element)=>{disabled||element.removeAttribute("disabled")},isMacDevice=()=>window.navigator.userAgent.toUpperCase().indexOf("MAC")>=0,capitalize=text=>text.charAt(0).toUpperCase()+text.slice(1),checkSlotInChildMutations=(addedNodes,removedNodes,slotName)=>{const hasSlot=nodeList=>Array.from(nodeList).some((node=>node.slot===slotName));return hasSlot(addedNodes)||hasSlot(removedNodes)},addDataToPosition=(dataObject,newKeys,newValue)=>{const newData={},newIndexes=newKeys.map((key=>key.index));let controlledIndex=0;return Object.keys(dataObject).forEach((dataKey=>{newIndexes.includes(controlledIndex)&&(newData[newKeys[newIndexes.indexOf(controlledIndex)].key]=newValue,controlledIndex++),newData[dataKey]=dataObject[dataKey],controlledIndex++})),newData}},"./dist/esm/ic-tree-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tree_item:()=>TreeItem});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-93509377.js"),_helpers_33a3a9f7_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-33a3a9f7.js");let treeItemIds=0;const TreeItem=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icTreeItemSelected=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icTreeItemSelected",7),this.treeItemId="ic-tree-item-"+treeItemIds++,this.treeItemTag="IC-TREE-ITEM",this.hostMutationObserver=null,this.TOOLTIP="ic-tooltip",this.handleTreeItemClicked=()=>{this.isParent&&(this.expanded=!this.expanded,this.hasParentExpanded=!0),this.updateAriaLabel(),this.selected=!0,this.watchSelectedHandler()},this.setTreeItemPadding=()=>{let level=1,parentElement=this.el.parentElement;const treeItemContent=this.el.shadowRoot.querySelector(".tree-item-content"),isSiblingOfParent=Array.from(parentElement.children).map((sibling=>sibling!==this.el&&!sibling.querySelector('[slot="router-item"]')&&!sibling.querySelector('[slot="label"]')&&sibling.children.length>0)).includes(!0),isChild=parentElement.tagName===this.treeItemTag,isRouterItem=this.hasRouterSlot();for((isSiblingOfParent&&!this.el.isParent||isChild&&!this.el.isParent)&&(isRouterItem?this.routerSlot.classList.add("ic-tree-item-single"):treeItemContent.classList.add("ic-tree-item-single"));parentElement;)parentElement.tagName===this.treeItemTag&&(level++,!this.el.isParent&&isSiblingOfParent?treeItemContent.style.paddingLeft=`calc(var(--ic-space-xl) + ${16*level}px)`:this.el.isParent?treeItemContent.style.paddingLeft=16*level+"px":treeItemContent.style.paddingLeft=`calc(var(--ic-space-xs) + ${24*level}px`),parentElement=parentElement.parentElement},this.truncateTreeItemLabel=treeItem=>{const typographyEl=treeItem.shadowRoot.querySelector(".tree-item-label"),tooltip=null==typographyEl?void 0:typographyEl.closest(this.TOOLTIP),treeContent=treeItem.shadowRoot.querySelector(".tree-item-content");if((null==typographyEl?void 0:typographyEl.scrollHeight)>(null==treeContent?void 0:treeContent.clientHeight)&&(typographyEl.classList.add("ic-text-overflow"),!tooltip)){const tooltipEl=document.createElement("ic-tooltip");tooltipEl.setAttribute("target",this.el.id),tooltipEl.setAttribute("label",typographyEl.textContent),tooltipEl.classList.add("ic-tooltip-overflow"),tooltipEl.setAttribute("placement","right"),treeContent.appendChild(tooltipEl),tooltipEl.appendChild(typographyEl)}},this.hostMutationCallback=mutationList=>{mutationList.some((({type,addedNodes,removedNodes})=>"childList"===type&&(0,_helpers_33a3a9f7_js__WEBPACK_IMPORTED_MODULE_1__.c)(addedNodes,removedNodes,"icon")))&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},this.handleDisplayTooltip=display=>{const typographyEl=this.el.shadowRoot.querySelector(".tree-item-label"),tooltip=null==typographyEl?void 0:typographyEl.closest(this.TOOLTIP);null==tooltip||tooltip.displayTooltip(display)},this.childTreeItems=void 0,this.appearance="dark",this.disabled=!1,this.expanded=!1,this.hasParentExpanded=!1,this.href=void 0,this.hreflang="",this.isParent=!1,this.label="",this.referrerpolicy=void 0,this.rel=void 0,this.selected=!1,this.size="default",this.target=void 0}watchSelectedHandler(){this.selected&&this.icTreeItemSelected.emit({id:this.el.id}),this.updateAriaLabel()}disconnectedCallback(){var _a;null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}componentDidLoad(){this.childTreeItems=Array.from(this.el.children).filter((child=>child.tagName===this.treeItemTag)),this.childTreeItems.length>0&&(this.isParent=!0),this.setTreeItemPadding(),this.updateAriaLabel(),this.truncateTreeItemLabel(this.el),!(0,_helpers_33a3a9f7_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"label")&&(0,_helpers_33a3a9f7_js__WEBPACK_IMPORTED_MODULE_1__.o)([{prop:this.label,propName:"label"}],"Tree item"),this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{childList:!0})}componentDidUpdate(){this.hasParentExpanded&&(this.childTreeItems.forEach((child=>{this.truncateTreeItemLabel(child)})),this.hasParentExpanded=!1)}handleKeyDown(ev){"Enter"!==ev.key&&" "!==ev.key||(ev.stopImmediatePropagation(),this.handleTreeItemClicked())}async setFocus(){var _a,_b;this.hasRouterSlot()?null===(_a=this.routerSlot)||void 0===_a||_a.focus():null===(_b=this.treeItemElement)||void 0===_b||_b.focus()}async updateAriaLabel(){let ariaLabel;if(ariaLabel=this.hasRouterSlot()?this.routerSlot.textContent:(0,_helpers_33a3a9f7_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"label")?this.el.querySelector('[slot="label"]').textContent:this.label,this.isParent&&(ariaLabel=`${ariaLabel}, triggers submenu, ${this.expanded?"expanded":"collapsed"}`),this.el.parentElement){const treeItems=Array.from(this.el.parentElement.children).filter((child=>child.tagName===this.treeItemTag));ariaLabel=`${ariaLabel}, ${treeItems.indexOf(this.el)+1} of ${treeItems.length}`}this.selected&&(ariaLabel=`${ariaLabel}, active`),this.disabled&&(ariaLabel=`${ariaLabel}, dimmed`),this.hasRouterSlot()?this.routerSlot.ariaLabel=ariaLabel:this.treeItemElement.ariaLabel=ariaLabel}hasRouterSlot(){return this.routerSlot=this.el.querySelector('[slot="router-item"]'),!!this.routerSlot}render(){const{appearance,disabled,label,selected,size,expanded}=this,Component=this.href&&!this.disabled?"a":"div",attrs="a"==Component&&{href:this.href,hrefLang:this.hreflang,referrerPolicy:this.referrerpolicy,rel:this.rel,target:this.target};return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[`ic-tree-item-${appearance}`]:!0,"ic-tree-item-disabled":disabled,"ic-tree-item-selected":!disabled&&selected,[`ic-tree-item-${size}`]:"default"!==size},id:this.treeItemId},this.hasRouterSlot()?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"router-item"}):(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(Component,Object.assign({class:{"tree-item-content":!0},tabIndex:disabled?-1:0,onClick:this.handleTreeItemClicked,ref:el=>this.treeItemElement=el,"aria-disabled":disabled?"true":"false","aria-live":"polite"},attrs,{onFocus:()=>this.handleDisplayTooltip(!0),onBlur:()=>this.handleDisplayTooltip(!1)}),this.isParent&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"arrow-dropdown":!0,"tree-item-expanded":expanded},"aria-hidden":"true",innerHTML:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="currentColor"/>\n</svg>'}),(0,_helpers_33a3a9f7_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"})),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:"tree-item-label"},(0,_helpers_33a3a9f7_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"label")?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"label"}):label)),expanded&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{"aria-hidden":`${!expanded}`},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{selected:["watchSelectedHandler"]}}};TreeItem.style=':host{display:block;border:none;position:relative}:host .tree-item-content{display:flex;align-items:center;height:calc(var(--ic-space-xl) + var(--ic-space-xs));padding:0 var(--ic-space-xs);text-decoration:none;color:var(--ic-primary-text)}::slotted([slot="router-item"]){display:flex;align-items:center;height:calc(var(--ic-space-xl) + var(--ic-space-xs));text-decoration:none;font-family:var(--ic-font-body-family);color:var(--ic-primary-text);padding:0 var(--ic-space-xs) !important}::slotted([slot="router-item"].ic-tree-item-single){padding-left:calc(var(--ic-space-xl) + var(--ic-space-xs)) !important}:host .tree-item-content:focus,::slotted([slot="router-item"]:focus){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);transition:var(--ic-transition-duration-fast);outline:none}:host .tree-item-content:hover,::slotted([slot="router-item"]:hover){background-color:var(--ic-action-dark-bg-hover) !important;cursor:pointer}:host .tree-item-content:active,::slotted([slot="router-item"]:active){background-color:var(--ic-action-dark-bg-active) !important}:host(.ic-tree-item-selected) .tree-item-content,:host(.ic-tree-item-selected) ::slotted([slot="router-item"]){background-color:var(--ic-action-default-bg-hover) !important}:host(.ic-tree-item-small) .tree-item-content,:host(.ic-tree-item-small) ::slotted([slot="router-item"]){height:var(--ic-space-xl)}:host(.ic-tree-item-large) .tree-item-content,:host(.ic-tree-item-large) ::slotted([slot="router-item"]){height:var(--ic-space-xxl)}:host(.ic-tree-item-disabled){pointer-events:none}:host(.ic-tree-item-disabled) .tree-item-content,:host(.ic-tree-item-disabled) .arrow-dropdown,:host(.ic-tree-item-disabled) ::slotted([slot="icon"]),:host(.ic-tree-item-disabled) ::slotted([slot="router-item"]){color:var(--ic-architectural-200) !important;fill:var(--ic-architectural-200);pointer-events:none}:host(.ic-tree-item-light) .tree-item-content,:host(.ic-tree-item-light) .arrow-dropdown,:host(.ic-tree-item-light) ::slotted([slot="icon"]),:host(.ic-tree-item-light) ::slotted([slot="router-item"]){color:var(--ic-architectural-white);fill:var(--ic-architectural-white)}:host .arrow-dropdown{color:var(--ic-action-default);margin-right:var(--ic-space-xs)}:host(.ic-tree-item-small) .arrow-dropdown{margin-right:var(--ic-space-xxs)}:host .tree-item-expanded{transform:rotate(180deg);margin-top:calc(-1 * var(--ic-space-xxs))}:host .ic-tree-item-single{padding-left:calc(var(--ic-space-xl) + var(--ic-space-xs))}:host(.ic-tree-item-small) .ic-tree-item-single{padding-left:calc(var(--ic-space-xl) + var(--ic-space-xxs))}.icon-container{width:var(--ic-space-lg);height:var(--ic-space-lg);margin:0 var(--ic-space-xs) 0 0}:host(.ic-tree-item-small) .icon-container{margin:0 var(--ic-space-xxs) 0 0}.ic-text-overflow{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ic-tooltip-overflow{overflow:hidden}@media (forced-colors: active){::slotted([slot="icon"]){fill:currentcolor}:host(.ic-tree-item-disabled) .tree-item-content,:host(.ic-tree-item-disabled) .arrow-dropdown,:host(.ic-tree-item-disabled) ::slotted([slot="icon"]),:host(.ic-tree-item-disabled) ::slotted([slot="router-item"]){color:GrayText !important;fill:GrayText !important}:host .tree-item-content:focus,::slotted([slot="router-item"]:focus){border:var(--ic-hc-border) !important}:host(.ic-tree-item-selected) .tree-item-content,:host(.ic-tree-item-selected) ::slotted([slot="router-item"]){color:Highlight !important}}'}}]);