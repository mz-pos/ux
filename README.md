# mz-repo (Monorepo Setup)

본 프로젝트는 [pnpm](https://pnpm.io/)과 [Turborepo](https://turbo.build/)를 기반으로 구성된 **Monorepo 개발 환경**입니다.  
프론트엔드 앱은 Vite + Vue 3 기반으로 작성되며, 공통 UI 컴포넌트와 설정은 `packages/`에서 공유합니다.

---

## Monorepo 구조

```txt
mz-repo/
├── apps/                   # 실행 가능한 애플리케이션 모음
│   └── my-new-app/         # Vue 3 + Vite 앱
│
├── packages/               # 재사용 가능한 패키지 (UI, utils 등)
│   └── ui/                 # 공통 UI 컴포넌트
│
├── .github/                # GitHub Actions 등 설정
├── .vscode/                # 프로젝트 공통 개발 환경 설정
├── .gitignore
├── pnpm-workspace.yaml     # 워크스페이스 구성
├── turbo.json              # Turborepo 실행 전략 설정
└── README.md
```

## 주요 기술 스택
- Monorepo 관리: Turborepo
- 패키지 매니저: pnpm
- 프레임워크: Vue 3 + Vite
- 컴포넌트 공유: packages/ui
- Storybook: @storybook/vue3-vite

## 설치 및 실행

1. 루트에서 의존성 설치
```
pnpm install
```

2. 전체 앱 실행

```
pnpm run dev
```

3. 특정 앱만 실행 (예: new-app)
```
pnpm --filter new-app run dev
```
or
```
cd apps/new-app
pnpm run dev
```

4. Storybook 실행
```
pnpm --filter @mz/ui run storybook
```
or
```
cd packages/ui
pnpm run dev
```

## 새 앱 추가 방법
```
pnpm create vite apps/new-app
cd apps/new-app
pnpm install
pnpm run dev
```

## 터보 명령어 예시

```
pnpm turbo run dev          # 모든 패키지 run
pnpm turbo run build          # 모든 패키지 build
pnpm turbo run lint --filter=new-app

```