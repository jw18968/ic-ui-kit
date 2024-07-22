"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[2598],{"../react/src/stories/ic-pagination.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,complex:()=>complex,complexAdjacentBoundaryItemsSet:()=>complexAdjacentBoundaryItemsSet,default:()=>ic_pagination_stories,defaultArgs:()=>defaultArgs,playground:()=>playground,simple:()=>simple});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../react/node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("../react/src/components.ts");const readme_namespaceObject='# ic-pagination\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                     | Attribute                         | Description                                                                                                                             | Type                             | Default            |\n| ---------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |\n| `adjacentCount`              | `adjacent-count`                  | The number of pages displayed adjacent to the current page when using \'complex\' type pagination. Accepted values are 0, 1 & 2.          | `number`                         | `1`                |\n| `appearance`                 | `appearance`                      | The appearance of the pagination, e.g. dark, light or the default.                                                                      | `"dark" \\| "default" \\| "light"` | `"default"`        |\n| `boundaryCount`              | `boundary-count`                  | The number of pages displayed as boundary items to the current page when using \'complex\' type pagination. Accepted values are 0, 1 & 2. | `number`                         | `1`                |\n| `currentPage`                | `current-page`                    | The current page displayed by the pagination.                                                                                           | `number`                         | `this.defaultPage` |\n| `defaultPage`                | `default-page`                    | The default page to display.                                                                                                            | `number`                         | `1`                |\n| `disabled`                   | `disabled`                        | If `true`, the pagination will not allow interaction.                                                                                   | `boolean`                        | `false`            |\n| `hideCurrentPage`            | `hide-current-page`               | If `true`, the current page of the simple pagination will not be displayed.                                                             | `boolean`                        | `false`            |\n| `hideFirstAndLastPageButton` | `hide-first-and-last-page-button` | If `true`, the first and last page buttons will not be displayed.                                                                       | `boolean`                        | `false`            |\n| `label`                      | `label`                           | The label for the pagination item (applicable when simple pagination is being used).                                                    | `string`                         | `"Page"`           |\n| `pages` _(required)_         | `pages`                           | The total number of pages.                                                                                                              | `number`                         | `undefined`        |\n| `type`                       | `type`                            | The type of pagination to be used.                                                                                                      | `"complex" \\| "simple"`          | `"simple"`         |\n\n\n## Events\n\n| Event          | Description                      | Type                               |\n| -------------- | -------------------------------- | ---------------------------------- |\n| `icPageChange` | Emitted when a page is selected. | `CustomEvent<IcChangeEventDetail>` |\n\n\n## Methods\n\n### `setCurrentPage(page: number) => Promise<void>`\n\nSets the currently displayed page.\n\n#### Parameters\n\n| Name   | Type     | Description                                |\n| ------ | -------- | ------------------------------------------ |\n| `page` | `number` | The page number to set as the current page |\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-button](../ic-button)\n- [ic-pagination-item](../ic-pagination-item)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-pagination --\x3e ic-button\n  ic-pagination --\x3e ic-pagination-item\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-pagination-item --\x3e ic-typography\n  style ic-pagination fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const defaultArgs={pages:15,paginationType:"simple",appearance:"default",hideCurrentPage:!1,hideFirstAndLastPageButton:!1,defaultPage:1,disabled:!1,label:"",adjacentCount:1,boundaryCount:1};function _createMdxContent(props){const _components=Object.assign({h3:"h3",div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Pagination",component:components.r$}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"simple",children:"Simple"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Simple",children:[(0,jsx_runtime.jsx)("p",{children:"Default/Dark/Light appearance"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(components.r$,{pages:"20",appearance:"dark"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#2c2f34",width:"fit-content",padding:"6px 8px"},children:(0,jsx_runtime.jsx)(components.r$,{pages:"15",appearance:"light"})}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:"Hidden current page"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",hideCurrentPage:!0}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:"Hidden first and last buttons"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",hideFirstAndLastPageButton:!0}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:"Default page"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",defaultPage:"3"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:"Disabled"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",defaultPage:"3",disabled:!0}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:"Label set"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",label:"Label"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"complex",children:"Complex"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Complex",children:[(0,jsx_runtime.jsx)("p",{children:"Default/Dark/Light appearance"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",appearance:"dark"}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#2c2f34",width:"fit-content",padding:"6px 8px"},children:(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",appearance:"light"})}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:"Hidden first and last buttons"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",hideFirstAndLastPageButton:!0}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:"Default page"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",defaultPage:7}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:"Disabled"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",disabled:!0})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"complex---adjacent--boundary-items-set",children:"Complex - Adjacent & Boundary Items Set"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Complex - Adjacent & Boundary Items Set",children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("p",{style:{padding:10},children:"Adjacent: 0, Boundary: 0"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",adjacentCount:"0",boundaryCount:"0"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{style:{padding:10},children:"Adjacent: 0, Boundary: 1"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",adjacentCount:"0",boundaryCount:"1"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{style:{padding:10},children:"Adjacent: 0, Boundary: 2"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",adjacentCount:"0",boundaryCount:"2"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{style:{padding:10},children:"Adjacent: 1, Boundary: 0"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",adjacentCount:"1",boundaryCount:"0"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{style:{padding:10},children:"Adjacent: 2, Boundary: 0"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",adjacentCount:"2",boundaryCount:"0"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{style:{padding:10},children:"Adjacent: 1, Boundary: 1"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{style:{padding:10},children:"Adjacent: 2, Boundary: 2"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",adjacentCount:"2",boundaryCount:"2"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Playground",args:defaultArgs,argTypes:{paginationType:{control:{type:"inline-radio"},options:["simple","complex"]},appearance:{control:{type:"inline-radio"},options:["default","dark","light"]}},children:args=>(0,jsx_runtime.jsx)(_components.div,{style:{backgroundColor:"light"==args.appearance?"black":null,width:"fit-content"},children:(0,jsx_runtime.jsx)(components.r$,{pages:args.pages,type:args.paginationType,adjacentCount:args.adjacentCount,boundaryCount:args.boundaryCount,label:args.label,disabled:args.disabled,defaultPage:args.defaultPage,hideFirstAndLastPageButton:args.hideFirstAndLastPageButton,hideCurrentPage:args.hideCurrentPage,appearance:args.appearance})})})})]})}const simple=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("p",{children:"Default/Dark/Light appearance"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(components.r$,{pages:"20",appearance:"dark"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#2c2f34",width:"fit-content",padding:"6px 8px"},children:(0,jsx_runtime.jsx)(components.r$,{pages:"15",appearance:"light"})}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:"Hidden current page"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",hideCurrentPage:!0}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:"Hidden first and last buttons"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",hideFirstAndLastPageButton:!0}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:"Default page"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",defaultPage:"3"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:"Disabled"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",defaultPage:"3",disabled:!0}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:"Label set"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",label:"Label"})]});simple.storyName="Simple",simple.parameters={storySource:{source:'<p>{"Default/Dark/Light appearance"}</p>\n<IcPagination pages="15" />\n<br />\n<IcPagination pages="20" appearance="dark" />\n<br />\n<div style={{\n  backgroundColor: "#2c2f34",\n  width: "fit-content",\n  padding: "6px 8px"\n}}><IcPagination pages="15" appearance="light" /></div>\n<br />\n<p>{"Hidden current page"}</p>\n<IcPagination pages="15" hideCurrentPage />\n<br />\n<p>{"Hidden first and last buttons"}</p>\n<IcPagination pages="15" hideFirstAndLastPageButton />\n<br />\n<p>{"Default page"}</p>\n<IcPagination pages="15" defaultPage="3" />\n<br />\n<p>{"Disabled"}</p>\n<IcPagination pages="15" defaultPage="3" disabled />\n<br />\n<p>{"Label set"}</p>\n<IcPagination pages="15" label="Label" />'}};const complex=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("p",{children:"Default/Dark/Light appearance"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",appearance:"dark"}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#2c2f34",width:"fit-content",padding:"6px 8px"},children:(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",appearance:"light"})}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:"Hidden first and last buttons"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",hideFirstAndLastPageButton:!0}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:"Default page"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",defaultPage:7}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:"Disabled"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",disabled:!0})]});complex.storyName="Complex",complex.parameters={storySource:{source:'<p>{"Default/Dark/Light appearance"}</p>\n<IcPagination pages="15" type="complex" />\n<IcPagination pages="15" type="complex" appearance="dark" />\n<div style={{\n  backgroundColor: "#2c2f34",\n  width: "fit-content",\n  padding: "6px 8px"\n}}><IcPagination pages="15" type="complex" appearance="light" /></div>\n<br />\n<p>{"Hidden first and last buttons"}</p>\n<IcPagination pages="15" type="complex" hideFirstAndLastPageButton />\n<br />\n<p>{"Default page"}</p>\n<IcPagination pages="15" type="complex" defaultPage={7} />\n<br />\n<p>{"Disabled"}</p>\n<IcPagination pages="15" type="complex" disabled />'}};const complexAdjacentBoundaryItemsSet=()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("p",{style:{padding:10},children:"Adjacent: 0, Boundary: 0"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",adjacentCount:"0",boundaryCount:"0"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{style:{padding:10},children:"Adjacent: 0, Boundary: 1"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",adjacentCount:"0",boundaryCount:"1"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{style:{padding:10},children:"Adjacent: 0, Boundary: 2"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",adjacentCount:"0",boundaryCount:"2"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{style:{padding:10},children:"Adjacent: 1, Boundary: 0"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",adjacentCount:"1",boundaryCount:"0"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{style:{padding:10},children:"Adjacent: 2, Boundary: 0"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",adjacentCount:"2",boundaryCount:"0"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{style:{padding:10},children:"Adjacent: 1, Boundary: 1"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{style:{padding:10},children:"Adjacent: 2, Boundary: 2"}),(0,jsx_runtime.jsx)(components.r$,{pages:"15",type:"complex",adjacentCount:"2",boundaryCount:"2"})]});complexAdjacentBoundaryItemsSet.storyName="Complex - Adjacent & Boundary Items Set",complexAdjacentBoundaryItemsSet.parameters={storySource:{source:'<div><p style={{\n    padding: 10\n  }}>{"Adjacent: 0, Boundary: 0"}</p><IcPagination pages="15" type="complex" adjacentCount="0" boundaryCount="0" /><br /><p style={{\n    padding: 10\n  }}>{"Adjacent: 0, Boundary: 1"}</p><IcPagination pages="15" type="complex" adjacentCount="0" boundaryCount="1" /><br /><p style={{\n    padding: 10\n  }}>{"Adjacent: 0, Boundary: 2"}</p><IcPagination pages="15" type="complex" adjacentCount="0" boundaryCount="2" /><br /><p style={{\n    padding: 10\n  }}>{"Adjacent: 1, Boundary: 0"}</p><IcPagination pages="15" type="complex" adjacentCount="1" boundaryCount="0" /><br /><p style={{\n    padding: 10\n  }}>{"Adjacent: 2, Boundary: 0"}</p><IcPagination pages="15" type="complex" adjacentCount="2" boundaryCount="0" /><br /><p style={{\n    padding: 10\n  }}>{"Adjacent: 1, Boundary: 1"}</p><IcPagination pages="15" type="complex" /><br /><p style={{\n    padding: 10\n  }}>{"Adjacent: 2, Boundary: 2"}</p><IcPagination pages="15" type="complex" adjacentCount="2" boundaryCount="2" /></div>'}};const playground=args=>(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"light"==args.appearance?"black":null,width:"fit-content"},children:(0,jsx_runtime.jsx)(components.r$,{pages:args.pages,type:args.paginationType,adjacentCount:args.adjacentCount,boundaryCount:args.boundaryCount,label:args.label,disabled:args.disabled,defaultPage:args.defaultPage,hideFirstAndLastPageButton:args.hideFirstAndLastPageButton,hideCurrentPage:args.hideCurrentPage,appearance:args.appearance})});playground.storyName="Playground",playground.argTypes={paginationType:{control:{type:"inline-radio"},options:["simple","complex"]},appearance:{control:{type:"inline-radio"},options:["default","dark","light"]}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => <div style={{\n  backgroundColor: args.appearance == "light" ? "black" : null,\n  width: "fit-content"\n}}>\n            <IcPagination pages={args.pages} type={args.paginationType} adjacentCount={args.adjacentCount} boundaryCount={args.boundaryCount} label={args.label} disabled={args.disabled} defaultPage={args.defaultPage} hideFirstAndLastPageButton={args.hideFirstAndLastPageButton} hideCurrentPage={args.hideCurrentPage} appearance={args.appearance} />\n          </div>'}};const componentMeta={title:"Pagination",component:components.r$,tags:["stories-mdx"],includeStories:["simple","complex","complexAdjacentBoundaryItemsSet","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_pagination_stories=componentMeta,__namedExportsOrder=["defaultArgs","simple","complex","complexAdjacentBoundaryItemsSet","playground"]}}]);