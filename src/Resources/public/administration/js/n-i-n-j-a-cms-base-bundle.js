!function(t){var e={};function n(o){if(e[o])return e[o].exports;var l=e[o]={i:o,l:!1,exports:{}};return t[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)n.d(o,l,function(e){return t[e]}.bind(null,l));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/bundles/ninjacmsbasebundle/",n(n.s="bbV4")}({"277S":function(t,e,n){var o=n("3KOn");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("SZ7m").default)("86b6fb4e",o,!0,{})},"3FRV":function(t,e,n){},"3KOn":function(t,e,n){},"5h9q":function(t,e,n){var o=n("3FRV");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("SZ7m").default)("46c9ac12",o,!0,{})},SZ7m:function(t,e,n){"use strict";function o(t,e){for(var n=[],o={},l=0;l<e.length;l++){var s=e[l],i=s[0],c={id:t+":"+l,css:s[1],media:s[2],sourceMap:s[3]};o[i]?o[i].parts.push(c):n.push(o[i]={id:i,parts:[c]})}return n}n.r(e),n.d(e,"default",(function(){return p}));var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},i=l&&(document.head||document.getElementsByTagName("head")[0]),c=null,a=0,r=!1,m=function(){},u=null,d="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,n,l){r=n,u=l||{};var i=o(t,e);return b(i),function(e){for(var n=[],l=0;l<i.length;l++){var c=i[l];(a=s[c.id]).refs--,n.push(a)}e?b(i=o(t,e)):i=[];for(l=0;l<n.length;l++){var a;if(0===(a=n[l]).refs){for(var r=0;r<a.parts.length;r++)a.parts[r]();delete s[a.id]}}}}function b(t){for(var e=0;e<t.length;e++){var n=t[e],o=s[n.id];if(o){o.refs++;for(var l=0;l<o.parts.length;l++)o.parts[l](n.parts[l]);for(;l<n.parts.length;l++)o.parts.push(v(n.parts[l]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var i=[];for(l=0;l<n.parts.length;l++)i.push(v(n.parts[l]));s[n.id]={id:n.id,refs:1,parts:i}}}}function g(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function v(t){var e,n,o=document.querySelector("style["+d+'~="'+t.id+'"]');if(o){if(r)return m;o.parentNode.removeChild(o)}if(f){var l=a++;o=c||(c=g()),e=_.bind(null,o,l,!1),n=_.bind(null,o,l,!0)}else o=g(),e=x.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}var h,w=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function _(t,e,n,o){var l=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(e,l);else{var s=document.createTextNode(l),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}function x(t,e){var n=e.css,o=e.media,l=e.sourceMap;if(o&&t.setAttribute("media",o),u.ssrId&&t.setAttribute(d,e.id),l&&(n+="\n/*# sourceURL="+l.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},bM9L:function(t,e,n){var o=n("k5Uo");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("SZ7m").default)("428760e2",o,!0,{})},bbV4:function(t,e,n){"use strict";n.r(e);Shopware.Component.register("sw-cms-button",{template:'{% block sw_cms_block_button %}\n\t<div class="sw-cms-block-button">\n\t\t<slot name="button"></slot>\n\t</div>\n{% endblock %}\n'});n("jyUz");Shopware.Component.register("sw-cms-preview-button",{template:'{% block sw_cms_block_ninja_button_preview %}\n\t<div class="ninja-button-flex-center">\n\t\t<button class="sw-cms-preview-ninja-button">Button</button>\n\t</div>\n{% endblock %}\n'}),Shopware.Service("cmsService").registerCmsBlock({name:"cms-button",label:"sw-cms.blocks.text.ninja-cms-button.label",category:"ninja-text-elements",component:"sw-cms-block-button",previewComponent:"sw-cms-preview-button",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{button:"cms-button"}});n("5h9q");var o=Shopware,l=o.Component,s=o.Mixin;l.register("sw-cms-el-cms-button",{template:'{% block sw_cms_element_ninja_cms_button %}\n\t<div class="sw-cms-el-ninja-cms-button" v-model="element.config.buttonAlign.value" :style="buttonAlignStyle">\n\t\t<a href="{{element.config.url.value}}" target="_blank" v-model="element.config.title.value" @input="onInputText">\n\t\t\t<button class="sw-el-ninja-btn" :style="[buttonStyles, styles]">{{element.config.title.value}}</button>\n\t\t</a>\n\t</div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[s.getByName("cms-element")],created:function(){this.createdComponent()},computed:{buttonStyles:function(){var t={};return this.element.config.textColor.value&&this.element.config.buttonColor.value&&(t.color="".concat(this.element.config.textColor.value),t.backgroundColor="".concat(this.element.config.buttonColor.value)),this.element.config.buttonWidth.value?t.width="".concat(this.element.config.buttonWidth.value,"px"):t.width="auto",this.element.config.buttonHeight.value?t.height="".concat(this.element.config.buttonHeight.value,"px"):t.height="auto",this.element.config.borderRadius.value?t.borderRadius="".concat(this.element.config.borderRadius.value,"px"):t.borderRadius="0",t},buttonAlignStyle:function(){var t={};return this.element.config.buttonAlign.value&&(t.justifyContent="".concat(this.element.config.buttonAlign.value)),t},styles:function(){var t={};return this.element.config.borderColor.value&&this.element.config.borderWidth&&(t.border="".concat(this.element.config.borderColor.value," ").concat(this.element.config.borderWidth.value,"px solid")),t}},methods:{createdComponent:function(){this.initElementConfig("cms-button"),this.initElementData("cms-button")},onInputText:function(t){this.emitChanges(t)}}});var i=Shopware,c=i.Component,a=i.Mixin;c.register("sw-cms-el-config-cms-button",{template:'{% block sw_cms_el_ninja_cms_button %}\n\t<sw-tabs class="sw-cms-el-config-ninja-cms-button__tabs" defaultItem="content">\n\n\t\t<template slot-scope="{ active }">\n\t\t\t{% block sw_cms_el_config_ninja_button_tab_content %}\n\t\t\t\t<sw-tabs-item :title="$tc(\'sw-cms.elements.general.config.tab.content\')" name="content" :active-tab="active">\n\t\t\t\t\t{{ $tc(\'sw-cms.elements.general.config.tab.content\') }}\n\t\t\t\t</sw-tabs-item>\n\t\t\t{% endblock %}\n\t\t\t{% block sw_cms_el_ninja_button_config_tab_options %}\n\t\t\t\t<sw-tabs-item :title="$tc(\'sw-cms.elements.general.config.tab.settings\')" name="settings" :active-tab="active">\n\t\t\t\t\t{{ $tc(\'sw-cms.elements.general.config.tab.settings\') }}\n\t\t\t\t</sw-tabs-item>\n\t\t\t{% endblock %}\n\t\t</template>\n\n\t\t<template slot="content" slot-scope="{ active }">\n\t\t\t{% block sw_cms_el_ninja_cms_button_config_content %}\n\t\t\t\t<sw-container v-if="active === \'content\'" class="sw-cms-el-config-ninja-button__tab-content">\n\t\t\t\t\t<sw-text-field :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.buttonText\')" :placeholder="$tc(\'sw-cms.elements.ninja-cms-button.config.placeholder.buttonText\')" v-model="element.config.title.value" @element-update="onElementUpdate" :helpText="$tc(\'sw-cms.elements.ninja-cms-button.config.helpText.buttonText\')"></sw-text-field>\n\t\t\t\t\t<sw-colorpicker v-model="element.config.textColor.value" :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.buttonTextColor\')" coloroutput="hex" :zIndex="1001" :alpha="true" :helpText="$tc(\'sw-cms.elements.ninja-cms-button.config.helpText.buttonTextColor\')"></sw-colorpicker>\n\t\t\t\t\t<sw-colorpicker v-model="element.config.textHoverColor.value" :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.textHoverColor\')" coloroutput="hex" :zIndex="1001" :alpha="true" :helpText="$tc(\'sw-cms.elements.ninja-cms-button.config.helpText.textHoverColor\')"></sw-colorpicker>\n\n\t\t\t\t\t<sw-field v-model="element.config.url.value" :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.buttonUrl\')" :placeholder="$tc(\'sw-cms.elements.ninja-cms-button.config.placeholder.buttonUrl\')" :helpText="$tc(\'sw-cms.elements.ninja-cms-button.config.helpText.buttonUrl\')"></sw-field>\n\t\t\t\t\t<sw-field v-model="element.config.newTab.value" type="switch" :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.newTab\')"></sw-field>\n\t\t\t\t</sw-container>\n\t\t\t{% endblock %}\n\n\t\t\t{% block sw_cms_el_ninja_button_config_settings %}\n\t\t\t\t<sw-container v-if="active === \'settings\'" class="sw-cms-el-config-ninja-button__tab-settings">\n\t\t\t\t\t{% block sw_cms_el_cms_ninja_button_config_settings_horizontal_align %}\n\t\t\t\t\t\t<sw-select-field :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.hAlignment\')" v-model="element.config.buttonAlign.value">\n\t\t\t\t\t\t\t<option value="flex-start">left</option>\n\t\t\t\t\t\t\t<option value="center">center</option>\n\t\t\t\t\t\t\t<option value="flex-end">right</option>\n\t\t\t\t\t\t</sw-select-field>\n\t\t\t\t\t\t<sw-colorpicker v-model="element.config.buttonColor.value" :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.buttonColor\')" coloroutput="hex" :zIndex="1001" :alpha="true" :helpText="$tc(\'sw-cms.elements.ninja-cms-button.config.helpText.buttonColor\')"></sw-colorpicker>\n\t\t\t\t\t\t<sw-colorpicker v-model="element.config.buttonHoverColor.value" :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.buttonHoverColor\')" coloroutput="hex" :zIndex="1001" :alpha="true" :helpText="$tc(\'sw-cms.elements.ninja-cms-button.config.helpText.buttonHoverColor\')"></sw-colorpicker>\n\t\t\t\t\t\t<sw-field v-model="element.config.borderWidth.value"\n                                      type="number"\n                                      :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.border\')"\n                                      :placeholder="$tc(\'sw-cms.elements.ninja-cms-button.config.placeholder.border\')"\n\t\t\t\t\t\t\t\t\t  :helpText="$tc(\'sw-cms.elements.ninja-cms-button.config.helpText.border\')">\n                                <template #suffix>px</template>\n                        </sw-field>\n\t\t\t\t\t\t<sw-field v-model="element.config.borderRadius.value"\n                                      type="number"\n                                      :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.borderRadius\')"\n                                      :placeholder="$tc(\'sw-cms.elements.ninja-cms-button.config.placeholder.borderRadius\')"\n\t\t\t\t\t\t\t\t\t  :helpText="$tc(\'sw-cms.elements.ninja-cms-button.config.helpText.borderRadius\')">\n                                <template #suffix>px</template>\n                        </sw-field>\n\t\t\t\t\t\t<sw-colorpicker v-model="element.config.borderColor.value" :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.borderColor\')" coloroutput="hex" :zIndex="1001" :alpha="true" :helpText="$tc(\'sw-cms.elements.ninja-cms-button.config.helpText.borderColor\')"></sw-colorpicker>\n\t\t\t\t\t\t<sw-field v-model="element.config.buttonWidth.value"\n                                      type="number"\n                                      :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.width\')"\n                                      :placeholder="$tc(\'sw-cms.elements.ninja-cms-button.config.placeholder.width\')">\n                                <template #suffix>px</template>\n                        </sw-field>\n\t\t\t\t\t\t<sw-field v-model="element.config.buttonHeight.value"\n                                      type="number"\n                                      :label="$tc(\'sw-cms.elements.ninja-cms-button.config.label.height\')"\n                                      :placeholder="$tc(\'sw-cms.elements.ninja-cms-button.config.placeholder.height\')">\n                                <template #suffix>px</template>\n                        </sw-field>\n\t\t\t\t\t\t\n\t\t\t\t\t{% endblock %}\n\t\t\t\t</sw-container>\n\t\t\t{% endblock %}\n\t\t</template>\n\t</sw-tabs>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[a.getByName("cms-element")],created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("cms-button")},onElementUpdate:function(t){this.$emit("element-update",t)},onInputText:function(t){this.emitChanges(t)}}});n("bM9L");Shopware.Component.register("sw-cms-el-preview-cms-button",{template:'{% block sw_cms_element_ninja_button_preview %}\n\t<div class="ninja-button-preview">\n\t\t<button class="ninja-btn">Button</button>\n\t</div>\n{% endblock %}\n'}),Shopware.Service("cmsService").registerCmsElement({name:"cms-button",label:"sw-cms.blocks.text.ninja-cms-button.label",component:"sw-cms-el-cms-button",configComponent:"sw-cms-el-config-cms-button",previewComponent:"sw-cms-el-preview-cms-button",defaultConfig:{title:{source:"static",value:"ButtonText"},textColor:{source:"static",value:"#fff"},textHoverColor:{source:"static",value:"#fff"},url:{source:"static",value:""},newTab:{source:"static",value:"true"},buttonAlign:{source:"static",value:"center"},buttonColor:{source:"static",value:"#4492ed"},buttonHoverColor:{source:"static",value:"#0f4686"},borderColor:{source:"static",value:"#4492ed"},borderWidth:{source:"static",value:"0"},buttonWidth:{source:"static",value:""},buttonHeight:{source:"static",value:""},borderRadius:{source:"static",value:"0"}}});Shopware.Component.register("sw-cms-single-faq",{template:'{% block sw_cms_block_single_faq %}\n\t<div class="sw-cms-block-single-faq">\n\t\t<slot name="singleFaq"></slot>\n\t</div>\n{% endblock %}'});n("277S");Shopware.Component.register("sw-cms-preview-single-faq",{template:'{% block sw_cms_block_ninja_button_preview %}\n\t<div class="ninja-flex-center">\n\t\t<div class="sw-cms-preview-faq-question">\n            Single FAQ\n            <span class="faq-icon">+</span>\n        </div>\n\t</div>\n{% endblock %}\n'}),Shopware.Service("cmsService").registerCmsBlock({name:"single-faq",label:"Single FAQ",category:"ninja-text-elements",component:"sw-cms-block-cms-single-faq",previewComponent:"sw-cms-preview-single-faq",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{singleFaq:"single-faq"}});n("eTdz");var r=Shopware,m=r.Component,u=r.Mixin;m.register("sw-cms-el-cms-single-faq",{template:'{% block sw_cms_element_cms_single_faq %}\n\t<div class="cms-element-admin-single-faq">\n\t\t<div :style="[headlineBgColor, borderColor]" class="ninja-single-faq-button">\n\t\t\t<h2 :style="headlineColor" v-model="element.config.title.value" @input="onInputText">{{ element.config.title.value }}</h2>\n\t\t\t<sw-icon :name="icon" :style="headlineColor"></sw-icon>\n\t\t</div>\n\t\t<div v-if="element.config.content.source === \'mapped\'" class="sw-cms-el-text__mapping-preview content-editor" v-html="$sanitize(demoValue)"></div>\n\t\t<sw-text-editor :style="collapseStyles" v-else v-model="element.config.content.value" :disabled="disabled" :vertical-align="element.config.verticalAlign.value" :allow-inline-data-mapping="true" :is-inline-edit="true" sanitize-input enable-transparent-background @blur="onBlur" @input="onInput"/>\n\t</div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[u.getByName("cms-element")],data:function(){return{editable:!0,demoValue:""}},watch:{cmsPageState:{deep:!0,handler:function(){this.updateDemoValue()}},"element.config.content.source":{handler:function(){this.updateDemoValue()}}},created:function(){this.createdComponent()},computed:{headlineColor:function(){var t={};return this.element.config.headlineColor.value&&(t.color="".concat(this.element.config.headlineColor.value)),t},headlineBgColor:function(){var t={};return this.element.config.headlineBgColor.value&&(t.backgroundColor="".concat(this.element.config.headlineBgColor.value)),t},collapseStyles:function(){if(this.element.config.collapseColor.value&&this.element.config.collapseBgColor.value)return{"--ninja-collapse-clr":this.element.config.collapseColor.value,"--ninja-bg-collapse-clr":this.element.config.collapseBgColor.value}},icon:function(){if(this.element.config.icon.value)return this.element.config.icon.value},borderColor:function(){var t={};return this.element.config.borderColor.value&&(t.borderBottom="1px solid "+"".concat(this.element.config.borderColor.value)),t}},methods:{createdComponent:function(){this.initElementConfig("single-faq")},updateDemoValue:function(){"mapped"===this.element.config.content.source&&(this.demoValue=this.getDemoValue(this.element.config.content.value))},onBlur:function(t){this.emitChanges(t)},onInputText:function(t){this.emitChanges(t)},onInput:function(t){this.emitChanges(t)},emitChanges:function(t){t!==this.element.config.content.value&&(this.element.config.content.value=t,this.$emit("element-update",this.element))}}});var d=Shopware,f=d.Component,p=d.Mixin;f.register("sw-cms-el-config-single-faq",{template:'{% block sw_cms_el_config_text %}\n\t<sw-tabs class="sw-cms-el-config-text__tabs" defaultItem="content">\n\n\t\t<template slot-scope="{ active }">\n\t\t\t{% block sw_cms_el_config_text_tab_content %}\n\t\t\t\t<sw-tabs-item :title="$tc(\'sw-cms.elements.general.config.tab.content\')" name="content" :active-tab="active">\n\t\t\t\t\t{{ $tc(\'sw-cms.elements.general.config.tab.content\') }}\n\t\t\t\t</sw-tabs-item>\n\t\t\t{% endblock %}\n\t\t\t{% block sw_cms_el_text_config_tab_options %}\n\t\t\t\t<sw-tabs-item :title="$tc(\'sw-cms.elements.general.config.tab.settings\')" name="settings" :active-tab="active">\n\t\t\t\t\t{{ $tc(\'sw-cms.elements.general.config.tab.settings\') }}\n\t\t\t\t</sw-tabs-item>\n\t\t\t{% endblock %}\n\t\t</template>\n\n\t\t<template slot="content" slot-scope="{ active }">\n\t\t\t{% block sw_cms_el_text_config_content %}\n\t\t\t\t<sw-container v-if="active === \'content\'" class="sw-cms-el-config-text__tab-content">\n\t\t\t\t\t<sw-text-field :label="$tc(\'sw-cms.elements.ninja-cms-single-faq.config.label.headline\')" v-model="element.config.title.value" @element-update="onElementUpdate" :helpText="$tc(\'sw-cms.elements.ninja-cms-single-faq.config.helpText.headline\')"></sw-text-field>\n\t\t\t\t\t<sw-select-field :label="$tc(\'sw-cms.elements.ninja-cms-single-faq.config.label.icon\')" v-model="element.config.icon.value">\n\t\t\t\t\t\t<option value="solid-chevron-up-s">{{ $tc(\'sw-cms.elements.ninja-cms-single-faq.config.label.chevron\') }}</option>\n\t\t\t\t\t\t<option value="solid-minus-s">{{ $tc(\'sw-cms.elements.ninja-cms-single-faq.config.label.plus\') }}</option>\n\t\t\t\t\t</sw-select-field>\n\t\t\t\t\t<sw-cms-mapping-field :label="$tc(\'sw-cms.elements.text.config.label.content\')" valuetypes="string" v-model="element.config.content">\n\t\t\t\t\t\t<sw-text-editor v-model="element.config.content.value" @input="onInput" @blur="onBlur"></sw-text-editor>\n\n\t\t\t\t\t\t<div class="sw-cms-el-config-text__mapping-preview" slot="preview" slot-scope="{ demoValue }">\n\t\t\t\t\t\t\t<div v-html="$sanitize(demoValue)"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</sw-cms-mapping-field>\n\t\t\t\t</sw-container>\n\t\t\t{% endblock %}\n\n\t\t\t{% block sw_cms_el_text_config_settings %}\n\t\t\t\t<sw-container v-if="active === \'settings\'" class="sw-cms-el-config-text__tab-settings">\n\t\t\t\t\t{% block sw_cms_el_text_config_settings_vertical_align %}\n\t\t\t\t\t\t<sw-select-field :label="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')" v-model="element.config.verticalAlign.value" :placeholder="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')">\n\t\t\t\t\t\t\t<option value="flex-start">{{ $tc(\'sw-cms.elements.general.config.label.verticalAlignTop\') }}</option>\n\t\t\t\t\t\t\t<option value="center">{{ $tc(\'sw-cms.elements.general.config.label.verticalAlignCenter\') }}</option>\n\t\t\t\t\t\t\t<option value="flex-end">{{ $tc(\'sw-cms.elements.general.config.label.verticalAlignBottom\') }}</option>\n\t\t\t\t\t\t</sw-select-field>\n\t\t\t\t\t\t<sw-colorpicker v-model="element.config.headlineColor.value" :label="$tc(\'sw-cms.elements.ninja-cms-single-faq.config.label.headlineColor\')" coloroutput="hex" :zIndex="1001" :alpha="true"></sw-colorpicker>\n\t\t\t\t\t\t<sw-colorpicker v-model="element.config.headlineBgColor.value" :label="$tc(\'sw-cms.elements.ninja-cms-single-faq.config.label.headlineBgColor\')" coloroutput="hex" :zIndex="1001" :alpha="true"></sw-colorpicker>\n\t\t\t\t\t\t<sw-colorpicker v-model="element.config.collapseColor.value" :label="$tc(\'sw-cms.elements.ninja-cms-single-faq.config.label.collapseColor\')" coloroutput="hex" :zIndex="1001" :alpha="true"></sw-colorpicker>\n\t\t\t\t\t\t<sw-colorpicker v-model="element.config.collapseBgColor.value" :label="$tc(\'sw-cms.elements.ninja-cms-single-faq.config.label.collapseBgColor\')" coloroutput="hex" :zIndex="1001" :alpha="true"></sw-colorpicker>\n\t\t\t\t\t\t<sw-switch-field v-model="element.config.border.value" :label="$tc(\'sw-cms.elements.ninja-cms-single-faq.config.label.activateBorder\')"></sw-switch-field >\n\t\t\t\t\t\t<sw-colorpicker v-model="element.config.borderColor.value" :label="$tc(\'sw-cms.elements.ninja-cms-single-faq.config.label.borderColor\')" :helpText="$tc(\'sw-cms.elements.ninja-cms-single-faq.config.helpText.borderColor\')" coloroutput="hex" :zIndex="1001" :alpha="true"></sw-colorpicker>\n\t\t\t\t\t{% endblock %}\n\t\t\t\t</sw-container>\n\t\t\t{% endblock %}\n\t\t</template>\n\t</sw-tabs>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[p.getByName("cms-element")],created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("single-faq")},onBlur:function(t){this.emitChanges(t)},onElementUpdate:function(t){this.$emit("element-update",t)},onInputText:function(t){this.emitChanges(t)},onInput:function(t){this.emitChanges(t)},emitChanges:function(t){t!==this.element.config.content.value&&(this.element.config.content.value=t,this.$emit("element-update",this.element))}}});Shopware.Component.register("sw-cms-el-preview-single-faq",{template:'{% block sw_cms_block_ninja_button_preview %}\n\t<div class="ninja-flex-center">\n\t\t<div class="sw-cms-preview-faq-question">\n            Single FAQ\n            <span class="faq-icon">+</span>\n        </div>\n\t</div>\n{% endblock %}\n'}),Shopware.Service("cmsService").registerCmsElement({name:"single-faq",label:"FAQ",component:"sw-cms-el-cms-single-faq",configComponent:"sw-cms-el-config-single-faq",previewComponent:"sw-cms-el-preview-single-faq",defaultConfig:{title:{source:"static",value:"Headline"},content:{source:"static",value:"\n                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \n                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \n                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. \n                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \n                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. \n                At vero eos et accusam et justo duo dolores et ea rebum. \n                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>\n            ".trim()},verticalAlign:{source:"static",value:null},icon:{source:"static",value:"solid-chevron-up-s"},headlineColor:{source:"static",value:"#fff"},headlineBgColor:{source:"static",value:"#4492ed"},collapseColor:{source:"static",value:"#333"},collapseBgColor:{source:"static",value:"#d3d3d3"},border:{source:"static",value:null},borderColor:{source:"static",value:"#d3d3d3"}}});Shopware.Component.override("sw-cms-sidebar",{template:'{% block sw_cms_sidebar_block_overview_category_options %}\n    {% parent %}\n    <option value="ninja-text-elements">Ninja Army Text Elements</option>\n{% endblock %}'})},eTdz:function(t,e,n){var o=n("f+qR");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("SZ7m").default)("49363b32",o,!0,{})},"f+qR":function(t,e,n){},jyUz:function(t,e,n){var o=n("p+K0");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("SZ7m").default)("3bc29d74",o,!0,{})},k5Uo:function(t,e,n){},"p+K0":function(t,e,n){}});