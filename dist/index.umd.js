!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("safe-json-decode")):"function"==typeof define&&define.amd?define(["exports","react","safe-json-decode"],t):t((e||self).useLocalStorage={},e.react,e.safeJsonDecode)}(this,function(e,t,o){const n=function(e,t){void 0===t&&(t=!1);try{const t=localStorage.getItem(e);return null===t?null:o.decode(t)||t}catch(e){if(t)throw e;return null}},r=function(e,t,n){void 0===n&&(n=!1);try{const n=t instanceof Object||Array.isArray(t)?o.encode(t):t;return localStorage.setItem(e,n),!0}catch(e){if(n)throw e;return!1}},c=function(e,t){void 0===t&&(t=!1);try{return localStorage.removeItem(e),!0}catch(e){if(t)throw e;return!1}};e.default=function(e,o,f){void 0===o&&(o=null),void 0===f&&(f=!1);const[u,s]=t.useState(!1),[i,a]=t.useState(e),[d,l]=t.useState(()=>{const e="function"==typeof o?o():o,t=n(i);return f||!t&&o!==t?e:t});return t.useEffect(()=>{u&&e!==i&&(c(i),a(e))},[u,e,i,a]),t.useEffect(()=>{r(i,d)},[d,i]),t.useEffect(()=>{s(!0)},[]),[d,l]},e.getStoredItem=n,e.removeStoredItem=c,e.setStoredItem=r});
//# sourceMappingURL=index.umd.js.map