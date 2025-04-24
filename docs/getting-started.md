# VitePress 가이드
VitePress는 Vue 3와 Vite 기반의 정적 사이트 생성기로, 빠른 문서화와 간결한 구성 파일을 제공합니다.

## 1. 문서 작성 기본 구조

```text
docs/
├── index.md                  # 홈 페이지
├── getting-started.md        # 시작 가이드
├── guide/
│   ├── index.md              # 가이드 섹션 메인
│   ├── install.md            # 설치 가이드
│   └── usage.md              # 사용법 가이드
└── .vitepress/
    └── config.js             # 설정 파일
```


## 2. `config.js` 기본 구조

```js
// docs/.vitepress/config.js
import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '문서 제목',
  description: '사이트 설명',
  base: '/', // 배포 경로 (GitHub Pages라면 '/레포명/' 필요)
  lang: 'ko-KR',
  themeConfig: {
    nav: [
      { text: '가이드', link: '/guide' },
      { text: 'GitHub', link: 'https://github.com/...' }
    ],
    sidebar: [
      {
        text: '시작하기',
        items: [
          { text: '소개', link: '/' },
          { text: '가이드', link: '/guide' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/...' }
    ]
  }
});
```