'use strict';

var previewApi = require('@storybook/preview-api');

var o="myAddonParameter";var e={};var n=()=>{let[t]=previewApi.useGlobals();return {...previewApi.useParameter(o,e)??e,...t[o]}};var A=t=>({[o]:t});

exports.createAssignableParametersForMyAddon = A;
exports.useMyAddonState = n;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map