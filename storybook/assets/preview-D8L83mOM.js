import{_ as a}from"./iframe-A2Wea7VH.js";var i=Object.defineProperty,s=(e,r)=>{for(var t in r)i(e,t,{get:r[t],enumerable:!0})},_={};s(_,{parameters:()=>d});var p=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-3LMSpwbW.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>p[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-CFRXHY34-3LMSpwbW.js","./iframe-A2Wea7VH.js","./index-CCe-kkP7.js","./_commonjsHelpers-4gQjN7DL.js","./index-em6nCBB0.js","./index-PPLHz8o0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
