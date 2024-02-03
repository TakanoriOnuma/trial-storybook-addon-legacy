import { useGlobals, useParameter } from '@storybook/preview-api';

var o="myAddonParameterLegacy";var e={};var n=()=>{let[t]=useGlobals();return {...useParameter(o,e)??e,...t[o]}};var A=t=>({[o]:t});

export { A as createAssignableParametersForMyAddon, n as useMyAddonState };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map