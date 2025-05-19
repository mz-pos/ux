import{_ as s,c as n,o as p,ae as e}from"./chunks/framework.BUmXqw1y.js";const g=JSON.parse('{"title":"new app 배포하려면...","description":"","frontmatter":{},"headers":[],"relativePath":"pages/usage.md","filePath":"pages/usage.md"}'),l={name:"pages/usage.md"};function i(t,a,c,o,d,r){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="new-app-배포하려면" tabindex="-1">new app 배포하려면... <a class="header-anchor" href="#new-app-배포하려면" aria-label="Permalink to &quot;new app 배포하려면...&quot;">​</a></h1><ol><li>config 설정</li></ol><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>repo-root/</span></span>
<span class="line"><span>├── apps/</span></span>
<span class="line"><span>│   ├── new-app/                   </span></span>
<span class="line"><span>│       └── vite.config.js      # config 설정</span></span></code></pre></div><ol start="2"><li>Actions 설정 (deploy.yml)</li></ol><ul><li>app 개별 Build 추가</li><li>gh-pages에 올릴 구조 추가</li></ul><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span># Build new-app (Vue)</span></span>
<span class="line"><span>- name: Build new-app app</span></span>
<span class="line"><span>run:  pnpm --filter new-app run build</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir -p dist/new-app</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cp -r apps/new-app/dist/* dist/new-app</span></span></code></pre></div>`,6)]))}const h=s(l,[["render",i]]);export{g as __pageData,h as default};
