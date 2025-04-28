# 사용법 가이드

## 실행
### 1. 전체 앱 실행

```shell
pnpm run dev
```

### 2. 특정 앱만 실행 (예: new-app)

```shell
pnpm --filter new-app run dev
```

or

```shell
cd apps/new-app
pnpm run dev
```

## 새 프로젝트 생성

### 1: create-vite를 사용해서 apps 폴더에 새 앱 만들기
```shell
pnpm create vite apps/test
```

### 2. 해당 디렉토리로 이동
```shell
cd apps/test
```

### 3. 의존성 설치
```shell
pnpm install
```

### 4. 실행 확인
```shell
pnpm run dev
```
또는 루트에서
```shell
pnpm --filter new-app run dev
```

::: tip
루트의 package.json에 scripts를 추가해서 명령어를 단축할수 있음. 
`"apps:new-app : "pnpm --filter new-app run dev"`을 추가하면 
npm run  apps:new-app으로 루트에서 실행가능.
:::
