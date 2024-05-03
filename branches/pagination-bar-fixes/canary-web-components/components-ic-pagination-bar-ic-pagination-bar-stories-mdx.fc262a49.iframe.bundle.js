/*! For license information please see components-ic-pagination-bar-ic-pagination-bar-stories-mdx.fc262a49.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[8108],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-pagination-bar/ic-pagination-bar.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,alignmentLeft:()=>alignmentLeft,alignmentSpaceBetween:()=>alignmentSpaceBetween,appearance:()=>appearance,basic:()=>basic,default:()=>ic_pagination_bar_stories,goToPageControl:()=>goToPageControl,hideRangeLabel:()=>hideRangeLabel,itemsPerPageControl:()=>itemsPerPageControl,paginationLabelType:()=>paginationLabelType,paginationRangeLabelType:()=>paginationRangeLabelType,paginationType:()=>paginationType});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const readme_namespaceObject='# ic-pagination-bar\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                  | Attribute                     | Description                                                                                                                                                                    | Type                                   | Default     |\n| ------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- | ----------- |\n| `alignment`               | `alignment`                   | Sets the alignment of the items in the pagination bar.                                                                                                                         | `"left" \\| "right" \\| "space-between"` | `"right"`   |\n| `appearance`              | `appearance`                  | Sets the styling for the items in the pagination bar.                                                                                                                          | `"dark" \\| "default" \\| "light"`       | `"default"` |\n| `hideRangeLabel`          | `hide-range-label`            | If `true`, the number of total items and current item range or number of total pages and current page will be hidden.                                                          | `boolean`                              | `false`     |\n| `itemsPerPageOptions`     | --                            | The options which will be displayed for \'items per page\' select input. Set a maximum of 4 options including a required \'All\' option with value equal to total number of items. | `{ label: string; value: string; }[]`  | `undefined` |\n| `pageLabel`               | `page-label`                  | The label which will be used in place of \'Page\' if rangeLabelType is page. Should be capitalised.                                                                              | `string`                               | `"Page"`    |\n| `rangeItemLabel`          | `range-item-label`            | The label which will be used in place of \'items\' if type is data. Should be capitalised.                                                                                       | `string`                               | `"Item"`    |\n| `rangeLabelType`          | `range-label-type`            | Whether total number of items and current item range or total number of pages and current page is displayed.                                                                   | `"data" \\| "page"`                     | `"page"`    |\n| `showGoToPageControl`     | `show-go-to-page-control`     | If `true`, the \'go to page\' control should be displayed.                                                                                                                       | `boolean`                              | `false`     |\n| `showItemsPerPageControl` | `show-items-per-page-control` | If `true`, the select input to control \'items per page\' should be displayed.                                                                                                   | `boolean`                              | `false`     |\n| `totalItems` _(required)_ | `total-items`                 | Total number of items to be displayed across all pages.                                                                                                                        | `number`                               | `undefined` |\n| `type`                    | `type`                        | Whether the displayed pagination is simple or complex.                                                                                                                         | `"complex" \\| "simple"`                | `"simple"`  |\n\n\n## Events\n\n| Event                  | Description                                                | Type                              |\n| ---------------------- | ---------------------------------------------------------- | --------------------------------- |\n| `icItemsPerPageChange` | Emitted when the items per page option is changed.         | `CustomEvent<{ value: number; }>` |\n| `icPageChange`         | Emitted when a page is navigated to via the \'go to\' input. | `CustomEvent<{ value: number; }>` |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-data-table](../ic-data-table)\n\n### Depends on\n\n- ic-typography\n- ic-select\n- ic-pagination\n- ic-tooltip\n- ic-text-field\n- ic-button\n\n### Graph\n```mermaid\ngraph TD;\n  ic-pagination-bar --\x3e ic-typography\n  ic-pagination-bar --\x3e ic-select\n  ic-pagination-bar --\x3e ic-pagination\n  ic-pagination-bar --\x3e ic-tooltip\n  ic-pagination-bar --\x3e ic-text-field\n  ic-pagination-bar --\x3e ic-button\n  ic-select --\x3e ic-input-container\n  ic-select --\x3e ic-input-label\n  ic-select --\x3e ic-input-component-container\n  ic-select --\x3e ic-typography\n  ic-select --\x3e ic-button\n  ic-select --\x3e ic-menu\n  ic-select --\x3e ic-input-validation\n  ic-input-label --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-menu --\x3e ic-loading-indicator\n  ic-menu --\x3e ic-typography\n  ic-menu --\x3e ic-button\n  ic-input-validation --\x3e ic-typography\n  ic-pagination --\x3e ic-button\n  ic-pagination --\x3e ic-pagination-item\n  ic-pagination-item --\x3e ic-typography\n  ic-text-field --\x3e ic-input-container\n  ic-text-field --\x3e ic-input-label\n  ic-text-field --\x3e ic-input-component-container\n  ic-text-field --\x3e ic-input-validation\n  ic-text-field --\x3e ic-typography\n  ic-data-table --\x3e ic-pagination-bar\n  style ic-pagination-bar fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",h4:"h4",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Pagination Bar",component:"ic-pagination-bar",parameters:{componentAPI:{data:readme_namespaceObject}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"canary-pagination-bar",children:"[Canary]: Pagination Bar"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use the pagination bar when large amounts of content are split across multiple pages and various pagination options are required."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There is one required attribute for the pagination bar:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["total-items: ",(0,jsx_runtime.jsx)(_components.code,{children:"number"})]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Click the 'Component API' tab to view all the available attributes, events and slots for pagination bar."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To use the pagination bar component, import ",(0,jsx_runtime.jsx)(_components.code,{children:"@ukic/canary-web-components"})," into your application."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"basic",children:"Basic"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["A basic example using the ",(0,jsx_runtime.jsx)(_components.code,{children:"total-items"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Basic",parameters:{loki:{skip:!0}},children:lit_html.dy`<div style="height: 120px;"><ic-pagination-bar total-items="100"></ic-pagination-bar></div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"basic-code-example",children:"Basic code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-pagination-bar total-items="100"></ic-pagination-bar>\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Pagination bar will display the number of pages out of the total number of pages as well as the ",(0,jsx_runtime.jsx)(_components.code,{children:"simple"})," pagination type."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"By default, the items per page is set to 10. If the total items is greater than 100, the default items per page is set to 25."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"items-per-page-control",children:"Items per page control"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To display the items per page control, set the ",(0,jsx_runtime.jsx)(_components.code,{children:"show-items-per-page-control"})," attribute to ",(0,jsx_runtime.jsx)(_components.code,{children:"true"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Items per page control",parameters:{loki:{skip:!0}},children:lit_html.dy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
      ></ic-pagination-bar>
    </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"items-per-page-control-code-example",children:"Items per page control code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-pagination-bar\n  total-items="100"\n  show-items-per-page-control="true"\n></ic-pagination-bar>\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The items per page control will display a dropdown with options to select the number of items to display per page. Customize the options by setting the ",(0,jsx_runtime.jsx)(_components.code,{children:"itemsPerPageOptions"})," property.\n",(0,jsx_runtime.jsx)(_components.code,{children:"itemsPerPageOptions"})," is an array of objects with ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"value"})," properties. If more than three options are provided, the dropdown will display the first three options and an 'All' option."]}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"items-per-page-options-code-example",children:"Items per page options code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-pagination-bar\n  total-items="100"\n  show-items-per-page-control="true"\n></ic-pagination-bar>\n<script>\n  const paginationBar = document.querySelector("ic-pagination-bar");\n  paginationBar.itemsPerPageOptions = [\n    { label: "50", value: "50" },\n    { label: "100", value: "100" },\n    { label: "250", value: "250" },\n  ];\n<\/script>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"go-to-page-control",children:"Go to page control"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To display the go to page control, set the ",(0,jsx_runtime.jsx)(_components.code,{children:"show-go-to-page-control"})," attribute to ",(0,jsx_runtime.jsx)(_components.code,{children:"true"}),". 'Go to page' allows the user to jump to a specific page. If the page number is invalid, the input will be styled in the ",(0,jsx_runtime.jsx)(_components.code,{children:"ic-status-error"})," colour with a tooltip detailing the error."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Go to page control",parameters:{loki:{skip:!0}},children:lit_html.dy`<div style="height: 120px;">
      <ic-pagination-bar
        total-items="100"
        show-go-to-page-control="true"
      ></ic-pagination-bar>
    </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"go-to-page-control-code-example",children:"Go to page control code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-pagination-bar\n  total-items="100"\n  show-go-to-page-control="true"\n></ic-pagination-bar>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"pagination-range-label-type",children:"Pagination range label type"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The pagination range label type can be set to two types:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"simple"}),": [default]: Display the total number of pages and the current page number."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"data"}),": Displays the total number of items and the items range."]}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The example belows uses the ",(0,jsx_runtime.jsx)(_components.code,{children:"data"})," pagination range label type. The range is updated when the page is changed."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Pagination range label type",parameters:{loki:{skip:!0}},children:lit_html.dy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
        range-label-type="data"
      ></ic-pagination-bar>
    </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"pagination-range-label-type-code-example",children:"Pagination range label type code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-pagination-bar\n  total-items="100"\n  show-items-per-page-control="true"\n  show-go-to-page-control="true"\n  range-label-type="data"\n></ic-pagination-bar>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"pagination-range-item-label",children:"Pagination range item label"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["'Items' can be changed to a custom label by setting the ",(0,jsx_runtime.jsx)(_components.code,{children:"range-item-label"})," attribute. Set ",(0,jsx_runtime.jsx)(_components.code,{children:"range-item-label"})," with a capitalized singular noun.\nThe range label type must be set to ",(0,jsx_runtime.jsx)(_components.code,{children:"data"})," for the ",(0,jsx_runtime.jsx)(_components.code,{children:"range-item-label"})," attribute to take effect."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Pagination label type",parameters:{loki:{skip:!0}},children:lit_html.dy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
        range-label-type="data"
        range-item-label="Image"
      ></ic-pagination-bar>
    </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"pagination-range-item-label-code-example",children:"Pagination range item label code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-pagination-bar\n  total-items="100"\n  show-items-per-page-control="true"\n  show-go-to-page-control="true"\n  range-label-type="data"\n  range-item-label="Image"\n></ic-pagination-bar>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"pagination-type",children:"Pagination type"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The pagination type can be set to two types:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"simple"}),": [default]: Display the current page as a label with back and next buttons."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"complex"}),": Displays all the page numbers as buttons with back and next buttons."]}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"complex"})," pagination type is useful when there are many pages to navigate through."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Pagination type",parameters:{loki:{skip:!0}},children:lit_html.dy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
        type="complex"
      ></ic-pagination-bar>
    </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"pagination-type-code-example",children:"Pagination type code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-pagination-bar\n  total-items="100"\n  show-items-per-page-control="true"\n  type="complex"\n></ic-pagination-bar>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"alignment",children:"Alignment"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The pagination elements can be aligned to the ",(0,jsx_runtime.jsx)(_components.code,{children:"right"})," (default), ",(0,jsx_runtime.jsx)(_components.code,{children:"left"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"space-between"}),". The default alignment is right."]}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"alignment-left",children:"Alignment left"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Alignment left",parameters:{loki:{skip:!0}},children:lit_html.dy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        alignment="left"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
      ></ic-pagination-bar>
    </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"alignment-left-code-example",children:"Alignment left code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-pagination-bar\n  total-items="100"\n  alignment="left"\n  show-items-per-page-control="true"\n  show-go-to-page-control="true"\n></ic-pagination-bar>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"alignment-space-between",children:"Alignment space between"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Alignment space between",parameters:{loki:{skip:!0}},children:lit_html.dy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        alignment="space-between"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
      ></ic-pagination-bar>
    </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"alignment-space-between-code-example",children:"Alignment space between code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<ic-pagination-bar\n  total-items="100"\n  alignment="space-between"\n  show-items-per-page-control="true"\n  show-go-to-page-control="true"\n></ic-pagination-bar>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"appearance",children:"Appearance"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The background colour of the pagination bar can be customized by adding a background colour to the parent element. The ",(0,jsx_runtime.jsx)(_components.code,{children:"appearance"})," attribute can be set to ",(0,jsx_runtime.jsx)(_components.code,{children:"light"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"dark"})," to change the appearance of the pagination bar labels."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Appearance",parameters:{loki:{skip:!0}},children:lit_html.dy`<div
      style="display: flex; flex-direction: column; gap: 8px; height: 220px"
    >
      <div style="background-color: var(--ic-architectural-black)">
        <ic-pagination-bar
          total-items="100"
          appearance="light"
          show-items-per-page-control="true"
          show-go-to-page-control="true"
        ></ic-pagination-bar>
      </div>
      <div style="background-color: var(--ic-status-info-contrast)">
        <ic-pagination-bar
          total-items="100"
          appearance="dark"
          show-items-per-page-control="true"
          show-go-to-page-control="true"
        ></ic-pagination-bar>
      </div>
    </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"appearance-code-example",children:"Appearance code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<div style="background-color: var(--ic-architectural-black)">\n  <ic-pagination-bar\n    total-items="100"\n    appearance="light"\n    show-items-per-page-control="true"\n    show-go-to-page-control="true"\n  ></ic-pagination-bar>\n</div>\n\n<div style="background-color: var(--ic-status-info-contrast)">\n  <ic-pagination-bar\n    total-items="100"\n    appearance="dark"\n    show-items-per-page-control="true"\n    show-go-to-page-control="true"\n  ></ic-pagination-bar>\n</div>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"hide-range-label",children:"Hide range label"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["If the pagination bar becomes clutted due to the number of pagination elements displayed, the range label can be hidden by setting the ",(0,jsx_runtime.jsx)(_components.code,{children:"hide-range-label"})," attribute to ",(0,jsx_runtime.jsx)(_components.code,{children:"true"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"none",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Hide range label",parameters:{loki:{skip:!0}},children:lit_html.dy`<div style="height:150px">
      <div style="background-color: var(--ic-architectural-100)">
        <ic-pagination-bar
          total-items="100"
          appearance="dark"
          hide-range-label="true"
          show-items-per-page-control="true"
          show-go-to-page-control="true"
        ></ic-pagination-bar>
      </div>
    </div>`})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"hide-range-label-code-example",children:"Hide range label code example"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<div style="background-color: var(--ic-architectural-100)">\n  <ic-pagination-bar\n    total-items="100"\n    appearance="dark"\n    hide-range-label="true"\n    show-items-per-page-control="true"\n    show-go-to-page-control="true"\n  ></ic-pagination-bar>\n</div>\n'})})]})}const basic=()=>lit_html.dy`<div style="height: 120px;"><ic-pagination-bar total-items="100"></ic-pagination-bar></div>`;basic.storyName="Basic",basic.parameters={storySource:{source:'html`<div style="height: 120px;"><ic-pagination-bar total-items="100"></ic-pagination-bar></div>`'},loki:{skip:!0}};const itemsPerPageControl=()=>lit_html.dy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
      ></ic-pagination-bar>
    </div>`;itemsPerPageControl.storyName="Items per page control",itemsPerPageControl.parameters={storySource:{source:'html`<div style="height: 150px;">\n      <ic-pagination-bar\n        total-items="100"\n        show-items-per-page-control="true"\n      ></ic-pagination-bar>\n    </div>`'},loki:{skip:!0}};const goToPageControl=()=>lit_html.dy`<div style="height: 120px;">
      <ic-pagination-bar
        total-items="100"
        show-go-to-page-control="true"
      ></ic-pagination-bar>
    </div>`;goToPageControl.storyName="Go to page control",goToPageControl.parameters={storySource:{source:'html`<div style="height: 120px;">\n      <ic-pagination-bar\n        total-items="100"\n        show-go-to-page-control="true"\n      ></ic-pagination-bar>\n    </div>`'},loki:{skip:!0}};const paginationRangeLabelType=()=>lit_html.dy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
        range-label-type="data"
      ></ic-pagination-bar>
    </div>`;paginationRangeLabelType.storyName="Pagination range label type",paginationRangeLabelType.parameters={storySource:{source:'html`<div style="height: 150px;">\n      <ic-pagination-bar\n        total-items="100"\n        show-items-per-page-control="true"\n        show-go-to-page-control="true"\n        range-label-type="data"\n      ></ic-pagination-bar>\n    </div>`'},loki:{skip:!0}};const paginationLabelType=()=>lit_html.dy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
        range-label-type="data"
        range-item-label="Image"
      ></ic-pagination-bar>
    </div>`;paginationLabelType.storyName="Pagination label type",paginationLabelType.parameters={storySource:{source:'html`<div style="height: 150px;">\n      <ic-pagination-bar\n        total-items="100"\n        show-items-per-page-control="true"\n        show-go-to-page-control="true"\n        range-label-type="data"\n        range-item-label="Image"\n      ></ic-pagination-bar>\n    </div>`'},loki:{skip:!0}};const paginationType=()=>lit_html.dy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        show-items-per-page-control="true"
        type="complex"
      ></ic-pagination-bar>
    </div>`;paginationType.storyName="Pagination type",paginationType.parameters={storySource:{source:'html`<div style="height: 150px;">\n      <ic-pagination-bar\n        total-items="100"\n        show-items-per-page-control="true"\n        type="complex"\n      ></ic-pagination-bar>\n    </div>`'},loki:{skip:!0}};const alignmentLeft=()=>lit_html.dy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        alignment="left"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
      ></ic-pagination-bar>
    </div>`;alignmentLeft.storyName="Alignment left",alignmentLeft.parameters={storySource:{source:'html`<div style="height: 150px;">\n      <ic-pagination-bar\n        total-items="100"\n        alignment="left"\n        show-items-per-page-control="true"\n        show-go-to-page-control="true"\n      ></ic-pagination-bar>\n    </div>`'},loki:{skip:!0}};const alignmentSpaceBetween=()=>lit_html.dy`<div style="height: 150px;">
      <ic-pagination-bar
        total-items="100"
        alignment="space-between"
        show-items-per-page-control="true"
        show-go-to-page-control="true"
      ></ic-pagination-bar>
    </div>`;alignmentSpaceBetween.storyName="Alignment space between",alignmentSpaceBetween.parameters={storySource:{source:'html`<div style="height: 150px;">\n      <ic-pagination-bar\n        total-items="100"\n        alignment="space-between"\n        show-items-per-page-control="true"\n        show-go-to-page-control="true"\n      ></ic-pagination-bar>\n    </div>`'},loki:{skip:!0}};const appearance=()=>lit_html.dy`<div
      style="display: flex; flex-direction: column; gap: 8px; height: 220px"
    >
      <div style="background-color: var(--ic-architectural-black)">
        <ic-pagination-bar
          total-items="100"
          appearance="light"
          show-items-per-page-control="true"
          show-go-to-page-control="true"
        ></ic-pagination-bar>
      </div>
      <div style="background-color: var(--ic-status-info-contrast)">
        <ic-pagination-bar
          total-items="100"
          appearance="dark"
          show-items-per-page-control="true"
          show-go-to-page-control="true"
        ></ic-pagination-bar>
      </div>
    </div>`;appearance.storyName="Appearance",appearance.parameters={storySource:{source:'html`<div\n      style="display: flex; flex-direction: column; gap: 8px; height: 220px"\n    >\n      <div style="background-color: var(--ic-architectural-black)">\n        <ic-pagination-bar\n          total-items="100"\n          appearance="light"\n          show-items-per-page-control="true"\n          show-go-to-page-control="true"\n        ></ic-pagination-bar>\n      </div>\n      <div style="background-color: var(--ic-status-info-contrast)">\n        <ic-pagination-bar\n          total-items="100"\n          appearance="dark"\n          show-items-per-page-control="true"\n          show-go-to-page-control="true"\n        ></ic-pagination-bar>\n      </div>\n    </div>`'},loki:{skip:!0}};const hideRangeLabel=()=>lit_html.dy`<div style="height:150px">
      <div style="background-color: var(--ic-architectural-100)">
        <ic-pagination-bar
          total-items="100"
          appearance="dark"
          hide-range-label="true"
          show-items-per-page-control="true"
          show-go-to-page-control="true"
        ></ic-pagination-bar>
      </div>
    </div>`;hideRangeLabel.storyName="Hide range label",hideRangeLabel.parameters={storySource:{source:'html`<div style="height:150px">\n      <div style="background-color: var(--ic-architectural-100)">\n        <ic-pagination-bar\n          total-items="100"\n          appearance="dark"\n          hide-range-label="true"\n          show-items-per-page-control="true"\n          show-go-to-page-control="true"\n        ></ic-pagination-bar>\n      </div>\n    </div>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Pagination Bar",parameters:{componentAPI:{data:readme_namespaceObject}},tags:["stories-mdx"],includeStories:["basic","itemsPerPageControl","goToPageControl","paginationRangeLabelType","paginationLabelType","paginationType","alignmentLeft","alignmentSpaceBetween","appearance","hideRangeLabel"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_pagination_bar_stories=componentMeta,__namedExportsOrder=["basic","itemsPerPageControl","goToPageControl","paginationRangeLabelType","paginationLabelType","paginationType","alignmentLeft","alignmentSpaceBetween","appearance","hideRangeLabel"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-pagination-bar-ic-pagination-bar-stories-mdx.fc262a49.iframe.bundle.js.map