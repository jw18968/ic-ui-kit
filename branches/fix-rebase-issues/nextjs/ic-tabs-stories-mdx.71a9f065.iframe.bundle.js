"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[6210],{"../react/src/stories/ic-tabs.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ControlledTabsExample:()=>ControlledTabsExample,__namedExportsOrder:()=>__namedExportsOrder,controlled:()=>controlled,default:()=>ic_tabs_stories,defaultArgs:()=>defaultArgs,defaultStory:()=>defaultStory,disabled:()=>disabled,inline:()=>inline,lightText:()=>lightText,manualActivation:()=>manualActivation,playground:()=>playground,responsive:()=>responsive,responsiveLightText:()=>responsiveLightText,withIcons:()=>withIcons});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../react/node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("../react/src/components.ts");const readme_namespaceObject='# ic-tab-context\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property           | Attribute            | Description                                                                                                                               | Type                      | Default       |\n| ------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------- |\n| `activationType`   | `activation-type`    | Determines whether tabs have to be manually activated (by pressing \'Enter\' or \'Space\') when they receive focus using keyboard navigation. | `"automatic" \\| "manual"` | `"automatic"` |\n| `appearance`       | `appearance`         | The appearance of the tab context, e.g dark, or light.                                                                                    | `"dark" \\| "light"`       | `"dark"`      |\n| `contextId`        | `context-id`         | The unique context needed if using multiple tabs inside one another i.e. rendering another set of tabs inside a tab panel.                | `string`                  | `"default"`   |\n| `selectedTabIndex` | `selected-tab-index` | The selected tab to be controlled by the user. Must be used alongside the icTabSelect event to manage tab selection.                      | `number`                  | `undefined`   |\n\n\n## Events\n\n| Event         | Description                        | Type                                  |\n| ------------- | ---------------------------------- | ------------------------------------- |\n| `icTabSelect` | Emitted when a user selects a tab. | `CustomEvent<IcTabSelectEventDetail>` |\n\n\n----------------------------------------------\n\n\n',ic_tab_readme_namespaceObject='# ic-tab\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property   | Attribute  | Description                                | Type      | Default |\n| ---------- | ---------- | ------------------------------------------ | --------- | ------- |\n| `disabled` | `disabled` | If `true`, the disabled state will be set. | `boolean` | `false` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the tab.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot      | Description                                     |\n| --------- | ----------------------------------------------- |\n| `"badge"` | Badge component displayed inline with the tab.  |\n| `"icon"`  | Content will be rendered next to the tab label. |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tab --\x3e ic-typography\n  style ic-tab fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_tab_group_readme_namespaceObject="# ic-tab-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute | Description                                                                  | Type      | Default     |\n| -------------------- | --------- | ---------------------------------------------------------------------------- | --------- | ----------- |\n| `inline`             | `inline`  | If `true`, the tabs and tab panels will be positioned separately.            | `boolean` | `false`     |\n| `label` _(required)_ | `label`   | The label to describe the purpose of the set of tabs to screen reader users. | `string`  | `undefined` |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-horizontal-scroll](../ic-horizontal-scroll)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-tab-group --\x3e ic-horizontal-scroll\n  ic-horizontal-scroll --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-tab-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n",ic_tab_panel_readme_namespaceObject="# ic-tab-panel\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n----------------------------------------------\n\n\n";var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");const ControlledTabsExample=()=>{const[selectedTab,setSelectedTab]=(0,react.useState)(0);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(components.Pw,{selectedTabIndex:selectedTab,onIcTabSelect:event=>setSelectedTab(event.detail.tabIndex),children:[(0,jsx_runtime.jsxs)(components.Dq,{label:"Example tab group",children:[(0,jsx_runtime.jsx)(components.I7,{children:"One"}),(0,jsx_runtime.jsx)(components.I7,{children:"Two"}),(0,jsx_runtime.jsx)(components.I7,{children:"Three"})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"})]})})},defaultArgs={activationType:"automatic",appearance:"dark",disabled:!1,inline:!1,groupLabel:"Example tab group"};function _createMdxContent(props){const _components=Object.assign({h3:"h3",p:"p",pre:"pre",code:"code",div:"div",svg:"svg",path:"path"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Tabs",component:components.Pw}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject+ic_tab_group_readme_namespaceObject+ic_tab_readme_namespaceObject+ic_tab_panel_readme_namespaceObject}),"\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",children:(0,jsx_runtime.jsxs)(components.Pw,{onIcTabSelect:ev=>console.log(ev.detail),children:[(0,jsx_runtime.jsxs)(components.Dq,{label:"Example tab group",children:[(0,jsx_runtime.jsx)(components.I7,{children:"One"}),(0,jsx_runtime.jsx)(components.I7,{children:"Two"}),(0,jsx_runtime.jsx)(components.I7,{children:"Three"})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-icons",children:"With icons"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With icons",children:(0,jsx_runtime.jsxs)(components.Pw,{children:[(0,jsx_runtime.jsxs)(components.Dq,{label:"Example tab group",children:[(0,jsx_runtime.jsxs)(components.I7,{children:[(0,jsx_runtime.jsx)(_components.p,{children:"One"}),(0,jsx_runtime.jsxs)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})]})]}),(0,jsx_runtime.jsxs)(components.I7,{children:[(0,jsx_runtime.jsx)(_components.p,{children:"Two"}),(0,jsx_runtime.jsxs)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"})]})]}),(0,jsx_runtime.jsxs)(components.I7,{children:[(0,jsx_runtime.jsx)(_components.p,{children:"Three"}),(0,jsx_runtime.jsx)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:(0,jsx_runtime.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"})})]})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Disabled",children:(0,jsx_runtime.jsxs)(components.Pw,{children:[(0,jsx_runtime.jsxs)(components.Dq,{label:"Example tab group",children:[(0,jsx_runtime.jsx)(components.I7,{children:"One"}),(0,jsx_runtime.jsx)(components.I7,{disabled:!0,children:"Two"}),(0,jsx_runtime.jsx)(components.I7,{children:"Three"})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"inline",children:"Inline"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Inline",children:(0,jsx_runtime.jsxs)(components.Pw,{children:[(0,jsx_runtime.jsxs)(components.Dq,{label:"Example tab group",inline:!0,children:[(0,jsx_runtime.jsx)(components.I7,{children:"One"}),(0,jsx_runtime.jsx)(components.I7,{children:"Two"}),(0,jsx_runtime.jsx)(components.I7,{children:"Three"})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"controlled",children:"Controlled"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:'export const ControlledTabsExample = () => {\n  const [selectedTab, setSelectedTab] = useState(0);\n  return (\n    <>\n      <IcTabContext\n        selectedTabIndex={selectedTab}\n        onIcTabSelect={(event) => setSelectedTab(event.detail.tabIndex)}\n      >\n        <IcTabGroup label="Example tab group">\n          <IcTab>One</IcTab>\n          <IcTab>Two</IcTab>\n          <IcTab>Three</IcTab>\n        </IcTabGroup>\n        <IcTabPanel>Tab One</IcTabPanel>\n        <IcTabPanel>Tab Two</IcTabPanel>\n        <IcTabPanel>Tab Three</IcTabPanel>\n      </IcTabContext>\n    </>\n  );\n};\n'})}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Controlled",children:(0,jsx_runtime.jsx)(ControlledTabsExample,{})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"manual-activation",children:"Manual activation"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Manual activation",children:(0,jsx_runtime.jsxs)(components.Pw,{activationType:"manual",children:[(0,jsx_runtime.jsxs)(components.Dq,{label:"Example tab group",children:[(0,jsx_runtime.jsx)(components.I7,{children:"One"}),(0,jsx_runtime.jsx)(components.I7,{children:"Two"}),(0,jsx_runtime.jsx)(components.I7,{children:"Three"})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"light-text",children:"Light text"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Light text",parameters:{backgrounds:{default:"dark"}},children:(0,jsx_runtime.jsxs)(components.Pw,{appearance:"light",children:[(0,jsx_runtime.jsxs)(components.Dq,{label:"Example tab group",children:[(0,jsx_runtime.jsx)(components.I7,{children:"One"}),(0,jsx_runtime.jsx)(components.I7,{children:"Two"}),(0,jsx_runtime.jsxs)(components.I7,{children:[(0,jsx_runtime.jsx)(_components.p,{children:"Three"}),(0,jsx_runtime.jsxs)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})]})]})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"responsive",children:"Responsive"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Responsive",children:(0,jsx_runtime.jsxs)(components.Pw,{children:[(0,jsx_runtime.jsxs)(components.Dq,{label:"Example tab group",children:[(0,jsx_runtime.jsx)(components.I7,{children:"One"}),(0,jsx_runtime.jsx)(components.I7,{children:"Two"}),(0,jsx_runtime.jsx)(components.I7,{children:"Three"}),(0,jsx_runtime.jsx)(components.I7,{children:"Four"}),(0,jsx_runtime.jsx)(components.I7,{children:"Five"}),(0,jsx_runtime.jsx)(components.I7,{children:"Six"}),(0,jsx_runtime.jsx)(components.I7,{children:"Seven"}),(0,jsx_runtime.jsx)(components.I7,{children:"Eight"}),(0,jsx_runtime.jsx)(components.I7,{children:"Nine"}),(0,jsx_runtime.jsx)(components.I7,{children:"Ten"}),(0,jsx_runtime.jsx)(components.I7,{children:"Eleven"}),(0,jsx_runtime.jsx)(components.I7,{children:"Twelve"})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Four"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Five"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Six"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Seven"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Eight"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Nine"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Ten"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Eleven"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Twelve"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"responsive-light-text",children:"Responsive (Light text)"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Responsive (Light text)",parameters:{backgrounds:{default:"dark"}},children:(0,jsx_runtime.jsxs)(components.Pw,{appearance:"light",children:[(0,jsx_runtime.jsxs)(components.Dq,{label:"Example tab group",children:[(0,jsx_runtime.jsx)(components.I7,{children:"One"}),(0,jsx_runtime.jsx)(components.I7,{children:"Two"}),(0,jsx_runtime.jsx)(components.I7,{children:"Three"}),(0,jsx_runtime.jsx)(components.I7,{children:"Four"}),(0,jsx_runtime.jsx)(components.I7,{children:"Five"}),(0,jsx_runtime.jsx)(components.I7,{children:"Six"}),(0,jsx_runtime.jsx)(components.I7,{children:"Seven"}),(0,jsx_runtime.jsx)(components.I7,{children:"Eight"}),(0,jsx_runtime.jsx)(components.I7,{children:"Nine"})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Four"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Five"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Six"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Seven"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Eight"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Nine"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{args:defaultArgs,parameters:{loki:{skip:!0}},argTypes:{activationType:{options:["automatic","manual"],control:{type:"inline-radio"}},appearance:{options:["dark","light"],control:{type:"inline-radio"}}},name:"Playground",children:args=>(0,jsx_runtime.jsx)(_components.div,{style:{backgroundColor:"light"==args.appearance?"black":""},children:(0,jsx_runtime.jsxs)(components.Pw,{activationType:args.activationType,appearance:args.appearance,children:[(0,jsx_runtime.jsxs)(components.Dq,{label:args.groupLabel,inline:args.inline,children:[(0,jsx_runtime.jsx)(components.I7,{disabled:args.disabled,children:"One"}),(0,jsx_runtime.jsxs)(components.I7,{children:["Two",(0,jsx_runtime.jsx)(components.E3,{label:"1",slot:"badge",position:"inline",accessibleLabel:"1 notification found"})]}),(0,jsx_runtime.jsxs)(components.I7,{children:["Three",(0,jsx_runtime.jsxs)(_components.svg,{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)(_components.path,{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)(_components.path,{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})]})]})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"})]})})})})]})}const defaultStory=()=>(0,jsx_runtime.jsxs)(components.Pw,{onIcTabSelect:ev=>console.log(ev.detail),children:[(0,jsx_runtime.jsxs)(components.Dq,{label:"Example tab group",children:[(0,jsx_runtime.jsx)(components.I7,{children:"One"}),(0,jsx_runtime.jsx)(components.I7,{children:"Two"}),(0,jsx_runtime.jsx)(components.I7,{children:"Three"})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"})]});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'<IcTabContext onIcTabSelect={ev => console.log(ev.detail)}><IcTabGroup label="Example tab group"><IcTab>{"One"}</IcTab><IcTab>{"Two"}</IcTab><IcTab>{"Three"}</IcTab></IcTabGroup><IcTabPanel>{"Tab One"}</IcTabPanel><IcTabPanel>{"Tab Two"}</IcTabPanel><IcTabPanel>{"Tab Three"}</IcTabPanel></IcTabContext>'}};const withIcons=()=>(0,jsx_runtime.jsxs)(components.Pw,{children:[(0,jsx_runtime.jsxs)(components.Dq,{label:"Example tab group",children:[(0,jsx_runtime.jsxs)(components.I7,{children:[(0,jsx_runtime.jsx)("p",{children:"One"}),(0,jsx_runtime.jsxs)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})]})]}),(0,jsx_runtime.jsxs)(components.I7,{children:[(0,jsx_runtime.jsx)("p",{children:"Two"}),(0,jsx_runtime.jsxs)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"})]})]}),(0,jsx_runtime.jsxs)(components.I7,{children:[(0,jsx_runtime.jsx)("p",{children:"Three"}),(0,jsx_runtime.jsx)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:(0,jsx_runtime.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"})})]})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"})]});withIcons.storyName="With icons",withIcons.parameters={storySource:{source:'<IcTabContext><IcTabGroup label="Example tab group"><IcTab><p>{"One"}</p><svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg></IcTab><IcTab><p>{"Two"}</p><svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" /></svg></IcTab><IcTab><p>{"Three"}</p><svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg></IcTab></IcTabGroup><IcTabPanel>{"Tab One"}</IcTabPanel><IcTabPanel>{"Tab Two"}</IcTabPanel><IcTabPanel>{"Tab Three"}</IcTabPanel></IcTabContext>'}};const disabled=()=>(0,jsx_runtime.jsxs)(components.Pw,{children:[(0,jsx_runtime.jsxs)(components.Dq,{label:"Example tab group",children:[(0,jsx_runtime.jsx)(components.I7,{children:"One"}),(0,jsx_runtime.jsx)(components.I7,{disabled:!0,children:"Two"}),(0,jsx_runtime.jsx)(components.I7,{children:"Three"})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"})]});disabled.storyName="Disabled",disabled.parameters={storySource:{source:'<IcTabContext><IcTabGroup label="Example tab group"><IcTab>{"One"}</IcTab><IcTab disabled>{"Two"}</IcTab><IcTab>{"Three"}</IcTab></IcTabGroup><IcTabPanel>{"Tab One"}</IcTabPanel><IcTabPanel>{"Tab Two"}</IcTabPanel><IcTabPanel>{"Tab Three"}</IcTabPanel></IcTabContext>'}};const inline=()=>(0,jsx_runtime.jsxs)(components.Pw,{children:[(0,jsx_runtime.jsxs)(components.Dq,{label:"Example tab group",inline:!0,children:[(0,jsx_runtime.jsx)(components.I7,{children:"One"}),(0,jsx_runtime.jsx)(components.I7,{children:"Two"}),(0,jsx_runtime.jsx)(components.I7,{children:"Three"})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"})]});inline.storyName="Inline",inline.parameters={storySource:{source:'<IcTabContext><IcTabGroup label="Example tab group" inline><IcTab>{"One"}</IcTab><IcTab>{"Two"}</IcTab><IcTab>{"Three"}</IcTab></IcTabGroup><IcTabPanel>{"Tab One"}</IcTabPanel><IcTabPanel>{"Tab Two"}</IcTabPanel><IcTabPanel>{"Tab Three"}</IcTabPanel></IcTabContext>'}};const controlled=()=>(0,jsx_runtime.jsx)(ControlledTabsExample,{});controlled.storyName="Controlled",controlled.parameters={storySource:{source:"<ControlledTabsExample />"}};const manualActivation=()=>(0,jsx_runtime.jsxs)(components.Pw,{activationType:"manual",children:[(0,jsx_runtime.jsxs)(components.Dq,{label:"Example tab group",children:[(0,jsx_runtime.jsx)(components.I7,{children:"One"}),(0,jsx_runtime.jsx)(components.I7,{children:"Two"}),(0,jsx_runtime.jsx)(components.I7,{children:"Three"})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"})]});manualActivation.storyName="Manual activation",manualActivation.parameters={storySource:{source:'<IcTabContext activationType="manual"><IcTabGroup label="Example tab group"><IcTab>{"One"}</IcTab><IcTab>{"Two"}</IcTab><IcTab>{"Three"}</IcTab></IcTabGroup><IcTabPanel>{"Tab One"}</IcTabPanel><IcTabPanel>{"Tab Two"}</IcTabPanel><IcTabPanel>{"Tab Three"}</IcTabPanel></IcTabContext>'}};const lightText=()=>(0,jsx_runtime.jsxs)(components.Pw,{appearance:"light",children:[(0,jsx_runtime.jsxs)(components.Dq,{label:"Example tab group",children:[(0,jsx_runtime.jsx)(components.I7,{children:"One"}),(0,jsx_runtime.jsx)(components.I7,{children:"Two"}),(0,jsx_runtime.jsxs)(components.I7,{children:[(0,jsx_runtime.jsx)("p",{children:"Three"}),(0,jsx_runtime.jsxs)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})]})]})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"})]});lightText.storyName="Light text",lightText.parameters={storySource:{source:'<IcTabContext appearance="light"><IcTabGroup label="Example tab group"><IcTab>{"One"}</IcTab><IcTab>{"Two"}</IcTab><IcTab><p>{"Three"}</p><svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg></IcTab></IcTabGroup><IcTabPanel>{"Tab One"}</IcTabPanel><IcTabPanel>{"Tab Two"}</IcTabPanel><IcTabPanel>{"Tab Three"}</IcTabPanel></IcTabContext>'},backgrounds:{default:"dark"}};const responsive=()=>(0,jsx_runtime.jsxs)(components.Pw,{children:[(0,jsx_runtime.jsxs)(components.Dq,{label:"Example tab group",children:[(0,jsx_runtime.jsx)(components.I7,{children:"One"}),(0,jsx_runtime.jsx)(components.I7,{children:"Two"}),(0,jsx_runtime.jsx)(components.I7,{children:"Three"}),(0,jsx_runtime.jsx)(components.I7,{children:"Four"}),(0,jsx_runtime.jsx)(components.I7,{children:"Five"}),(0,jsx_runtime.jsx)(components.I7,{children:"Six"}),(0,jsx_runtime.jsx)(components.I7,{children:"Seven"}),(0,jsx_runtime.jsx)(components.I7,{children:"Eight"}),(0,jsx_runtime.jsx)(components.I7,{children:"Nine"}),(0,jsx_runtime.jsx)(components.I7,{children:"Ten"}),(0,jsx_runtime.jsx)(components.I7,{children:"Eleven"}),(0,jsx_runtime.jsx)(components.I7,{children:"Twelve"})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Four"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Five"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Six"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Seven"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Eight"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Nine"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Ten"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Eleven"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Twelve"})]});responsive.storyName="Responsive",responsive.parameters={storySource:{source:'<IcTabContext><IcTabGroup label="Example tab group"><IcTab>{"One"}</IcTab><IcTab>{"Two"}</IcTab><IcTab>{"Three"}</IcTab><IcTab>{"Four"}</IcTab><IcTab>{"Five"}</IcTab><IcTab>{"Six"}</IcTab><IcTab>{"Seven"}</IcTab><IcTab>{"Eight"}</IcTab><IcTab>{"Nine"}</IcTab><IcTab>{"Ten"}</IcTab><IcTab>{"Eleven"}</IcTab><IcTab>{"Twelve"}</IcTab></IcTabGroup><IcTabPanel>{"Tab One"}</IcTabPanel><IcTabPanel>{"Tab Two"}</IcTabPanel><IcTabPanel>{"Tab Three"}</IcTabPanel><IcTabPanel>{"Tab Four"}</IcTabPanel><IcTabPanel>{"Tab Five"}</IcTabPanel><IcTabPanel>{"Tab Six"}</IcTabPanel><IcTabPanel>{"Tab Seven"}</IcTabPanel><IcTabPanel>{"Tab Eight"}</IcTabPanel><IcTabPanel>{"Tab Nine"}</IcTabPanel><IcTabPanel>{"Tab Ten"}</IcTabPanel><IcTabPanel>{"Tab Eleven"}</IcTabPanel><IcTabPanel>{"Tab Twelve"}</IcTabPanel></IcTabContext>'}};const responsiveLightText=()=>(0,jsx_runtime.jsxs)(components.Pw,{appearance:"light",children:[(0,jsx_runtime.jsxs)(components.Dq,{label:"Example tab group",children:[(0,jsx_runtime.jsx)(components.I7,{children:"One"}),(0,jsx_runtime.jsx)(components.I7,{children:"Two"}),(0,jsx_runtime.jsx)(components.I7,{children:"Three"}),(0,jsx_runtime.jsx)(components.I7,{children:"Four"}),(0,jsx_runtime.jsx)(components.I7,{children:"Five"}),(0,jsx_runtime.jsx)(components.I7,{children:"Six"}),(0,jsx_runtime.jsx)(components.I7,{children:"Seven"}),(0,jsx_runtime.jsx)(components.I7,{children:"Eight"}),(0,jsx_runtime.jsx)(components.I7,{children:"Nine"})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Four"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Five"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Six"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Seven"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Eight"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Nine"})]});responsiveLightText.storyName="Responsive (Light text)",responsiveLightText.parameters={storySource:{source:'<IcTabContext appearance="light"><IcTabGroup label="Example tab group"><IcTab>{"One"}</IcTab><IcTab>{"Two"}</IcTab><IcTab>{"Three"}</IcTab><IcTab>{"Four"}</IcTab><IcTab>{"Five"}</IcTab><IcTab>{"Six"}</IcTab><IcTab>{"Seven"}</IcTab><IcTab>{"Eight"}</IcTab><IcTab>{"Nine"}</IcTab></IcTabGroup><IcTabPanel>{"Tab One"}</IcTabPanel><IcTabPanel>{"Tab Two"}</IcTabPanel><IcTabPanel>{"Tab Three"}</IcTabPanel><IcTabPanel>{"Tab Four"}</IcTabPanel><IcTabPanel>{"Tab Five"}</IcTabPanel><IcTabPanel>{"Tab Six"}</IcTabPanel><IcTabPanel>{"Tab Seven"}</IcTabPanel><IcTabPanel>{"Tab Eight"}</IcTabPanel><IcTabPanel>{"Tab Nine"}</IcTabPanel></IcTabContext>'},backgrounds:{default:"dark"}};const playground=args=>(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"light"==args.appearance?"black":""},children:(0,jsx_runtime.jsxs)(components.Pw,{activationType:args.activationType,appearance:args.appearance,children:[(0,jsx_runtime.jsxs)(components.Dq,{label:args.groupLabel,inline:args.inline,children:[(0,jsx_runtime.jsx)(components.I7,{disabled:args.disabled,children:"One"}),(0,jsx_runtime.jsxs)(components.I7,{children:["Two",(0,jsx_runtime.jsx)(components.E3,{label:"1",slot:"badge",position:"inline",accessibleLabel:"1 notification found"})]}),(0,jsx_runtime.jsxs)(components.I7,{children:["Three",(0,jsx_runtime.jsxs)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})]})]})]}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab One"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Two"}),(0,jsx_runtime.jsx)(components.eF,{children:"Tab Three"})]})});playground.storyName="Playground",playground.argTypes={activationType:{options:["automatic","manual"],control:{type:"inline-radio"}},appearance:{options:["dark","light"],control:{type:"inline-radio"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => <div style={{\n  backgroundColor: args.appearance == "light" ? "black" : ""\n}}>\n        <IcTabContext activationType={args.activationType} appearance={args.appearance}>\n          <IcTabGroup label={args.groupLabel} inline={args.inline}>\n            <IcTab disabled={args.disabled}>\n              One\n            </IcTab>\n            <IcTab>\n              Two\n              <IcBadge label="1" slot="badge" position="inline" accessibleLabel="1 notification found" />\n            </IcTab>\n            <IcTab>\n              Three\n              <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />\n              </svg>\n            </IcTab>\n          </IcTabGroup>\n          <IcTabPanel>Tab One</IcTabPanel>\n          <IcTabPanel>Tab Two</IcTabPanel>\n          <IcTabPanel>Tab Three</IcTabPanel>\n        </IcTabContext>\n      </div>'},loki:{skip:!0}};const componentMeta={title:"Tabs",component:components.Pw,tags:["stories-mdx"],includeStories:["defaultStory","withIcons","disabled","inline","controlled","manualActivation","lightText","responsive","responsiveLightText","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_tabs_stories=componentMeta,__namedExportsOrder=["ControlledTabsExample","defaultArgs","defaultStory","withIcons","disabled","inline","controlled","manualActivation","lightText","responsive","responsiveLightText","playground"]}}]);