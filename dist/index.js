import{useState as t,useEffect as r}from"react";import{decode as e,encode as o}from"safe-json-decode";const n=(t,r=!1)=>{try{const r=localStorage.getItem(t);return null===r?null:e(r)||r}catch(t){if(r)throw t;return null}},c=(t,r,e=!1)=>{try{const e=r instanceof Object||Array.isArray(r)?o(r):r;return localStorage.setItem(t,e),!0}catch(t){if(e)throw t;return!1}},a=(t,r=!1)=>{try{return localStorage.removeItem(t),!0}catch(t){if(r)throw t;return!1}},l=(e,o=null,l=!1)=>{const[u,s]=t(!1),[f,i]=t(e),[m,h]=t(()=>{const t="function"==typeof o?o():o,r=n(f);return l||!r&&t&&o!==r?t:r});return r(()=>{u&&e!==f&&(a(f),i(e))},[u,e,f,i]),r(()=>{c(f,m)},[m,f]),r(()=>{s(!0)},[]),[m,h]};export{l as default,n as getStoredItem,a as removeStoredItem,c as setStoredItem};
//# sourceMappingURL=index.js.map
