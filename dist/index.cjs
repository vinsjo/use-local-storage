var t=require("react"),e=require("safe-json-decode");const r=function(t,r){void 0===r&&(r=!1);try{const r=localStorage.getItem(t);return null===r?null:e.decode(r)||r}catch(t){if(r)throw t;return null}},o=function(t,r,o){void 0===o&&(o=!1);try{const o=r instanceof Object||Array.isArray(r)?e.encode(r):r;return localStorage.setItem(t,o),!0}catch(t){if(o)throw t;return!1}},n=function(t,e){void 0===e&&(e=!1);try{return localStorage.removeItem(t),!0}catch(t){if(e)throw t;return!1}};exports.default=function(e,c,u){void 0===c&&(c=null),void 0===u&&(u=!1);const[s,a]=t.useState(!1),[f,i]=t.useState(e),[l,d]=t.useState(()=>{const t="function"==typeof c?c():c,e=r(f);return u||!e&&t&&c!==e?t:e});return t.useEffect(()=>{s&&e!==f&&(n(f),i(e))},[s,e,f,i]),t.useEffect(()=>{o(f,l)},[l,f]),t.useEffect(()=>{a(!0)},[]),[l,d]},exports.getStoredItem=r,exports.removeStoredItem=n,exports.setStoredItem=o;
//# sourceMappingURL=index.cjs.map
