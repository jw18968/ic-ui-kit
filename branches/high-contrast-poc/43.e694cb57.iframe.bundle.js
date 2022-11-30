(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"./dist/esm/ic-classification-banner.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ic_classification_banner",(function(){return ClassificationBanner}));__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/index-1500de1f.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var classificationText={default:"protective marking not set",official:"official","official-sensitive":"official sensitive",secret:"secret","top-secret":"top secret"},ClassificationBanner=function(){function ClassificationBanner(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ClassificationBanner),Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,hostRef),this.additionalSelectors="",this.classification="default",this.country="uk",this.inline=!1,this.upTo=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ClassificationBanner,[{key:"render",value:function render(){var _class,_class2,classification=this.classification,inline=this.inline,country=this.country,upTo=this.upTo,additionalSelectors=this.additionalSelectors;return Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_1__.e)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_1__.a,{class:(_class={},_class.inline=inline,_class)},Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_1__.e)("banner",{"aria-label":"Protective marking",class:(_class2={},_class2["classification-banner"]=!0,_class2[""+classification]=classification,_class2),role:"contentinfo"},"default"!==classification?Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_1__.e)("span",{class:"offscreen"},"The protective marking of this page is:"," "):null,Object(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_1__.e)("ic-typography",{variant:"caption-uppercase"},"default"===classification?classificationText[classification]:(upTo?"up to":"")+" \n               "+(""!==country?country:"")+" \n               "+classificationText[classification]+" \n               "+(""!==additionalSelectors?additionalSelectors:""))))}}]),ClassificationBanner}();ClassificationBanner.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{position:fixed;left:0;bottom:0;width:100%;height:var(--ic-space-lg);z-index:var(--ic-z-index-overlay)}:host(.inline){position:static;left:auto;bottom:auto}.classification-banner{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:var(--ic-space-xxxs) var(--ic-space-md)}.default{background-color:var(--ic-classification-not-set);color:var(--ic-classification-not-set-foreground)}.official,.official-sensitive{background-color:var(--ic-classification-official);color:var(--ic-classification-official-foreground)}.secret{background-color:var(--ic-classification-secret);color:var(--ic-classification-secret-foreground)}.top-secret{background-color:var(--ic-classification-top-secret);color:var(--ic-classification-top-secret-foreground)}.offscreen{position:absolute;left:-9999px;background-color:#fff;color:#000;text-transform:none}'}}]);