
# mz-repo (Monorepo Setup)

본 프로젝트는 [pnpm](https://pnpm.io/)과 [Turborepo](https://turbo.build/)를 기반으로 구성된 **Monorepo 개발 환경**입니다.  
프론트엔드 앱은 Vite + Vue 3 기반으로 작성되며, 공통 UI 컴포넌트와 설정은 `packages/`에서 공유합니다.

---


## 주요 기술 스택
- Monorepo 관리: [Turborepo](https://turborepo.com/)
- 패키지 매니저: [pnpm](https://pnpm.io/)
- 프레임워크: [Vue 3](https://v3-docs.vuejs-korea.org/) + [Vite](https://vite.dev/)
- UI 컴포넌트 문서화 : [Storybook](https://storybook.js.org/)
- 프로젝트 문서화: [VitePress](https://vitepress.dev/)


## Monorepo 구조

```txt
mz-repo/
├── apps/                  # 실제 실행되는 어플리케이션 (ex. web 프론트엔드 등)
│   ├── web/               # Vue 기반 애플리케이션
│   │   ├── src/
│   │   ├── index.html
│   │   └── package.json
│   └── ...                # 향후 추가될 앱들
│
├── packages/              # 재사용 가능한 UI/기능 컴포넌트 패키지
│   ├── ui/                # 공통 Vue 컴포넌트 라이브러리
│   │   ├── stories/             # *.stories.ts 컴포넌트 예제
│   │   ├── .storybook/          # Storybook 설정
│   │   │   ├── main.js          # Storybook 진입 설정
│   │   │   ├── preview.js       # 글로벌 설정
│   │   │   └── manager.js       # (선택) UI 테마 설정-----------------------------------
│   │   ├── components/    # Vue 전용 컴포넌트
│   │   ├── utils/         # Vue 전용 유틸
│   │   ├── index.ts
│   │   └── package.json
│   └── ...                # 기타 공통 모듈
│
├── docs/                  # VitePress 기반 문서 시스템
│   ├── index.md           # 홈 문서
│   ├── getting-started.md
│   ├── guide/
│   │   ├── index.md
│   │   └── ...
│   ├── storybook/
│   │   ├── index.md
│   │   └── ...
│   └── .vitepress/
│       └── config.js      # VitePress 설정
│
├── .github/               # GitHub Actions 또는 PR 템플릿 등
│
├── .vscode/               # VS Code 편의 설정 (선택)
│
├── .eslintrc.js           # 전체 프로젝트 공통 ESLint 설정
├── turbo.json             # Turborepo 설정
├── pnpm-workspace.yaml    # PNPM 워크스페이스 구성
├── package.json           # 루트용 명령어/의존성 관리
└── tsconfig.json          # 전체 TypeScript 설정

```

