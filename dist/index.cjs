var t=require("safe-json-decode"),e=require("react");const r=function(e,r){void 0===r&&(r=!1);try{const r=localStorage.getItem(e);return null===r?null:t.decode(r)||r}catch(t){if(r)throw t;return null}},o=function(e,r,o){void 0===o&&(o=!1);try{const o=r instanceof Object||Array.isArray(r)?t.encode(r):r;return localStorage.setItem(e,o),!0}catch(t){if(o)throw t;return!1}},n=function(t,e){void 0===e&&(e=!1);try{return localStorage.removeItem(t),!0}catch(t){if(e)throw t;return!1}};exports.default=function(t,c,u){void 0===c&&(c=null),void 0===u&&(u=!1);const[s,a]=e.useState(!1),[f,i]=e.useState(t),[l,d]=e.useState(()=>{const t="function"==typeof c?c():c,e=r(f);return u||!e&&c!==e?t:e});return e.useEffect(()=>{s&&t!==f&&(n(f),i(t))},[s,t,f,i]),e.useEffect(()=>{o(f,l)},[l,f]),e.useEffect(()=>{a(!0)},[]),[l,d]},exports.getStoredItem=r,exports.removeStoredItem=n,exports.setStoredItem=o;
//# sourceMappingURL=index.cjs.map
