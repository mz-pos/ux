## 프로젝트 가이드 설치 및 실행

### 1. 루트에서 의존성 설치
```shell
npm install -g pnpm
```

### 2. 프로젝트 의존성 설치
"pnpm install은 루트 + 모든 워크스페이스(package.json이 있는 하위 폴더)의 의존성을 한 번에 설치
```shell
pnpm install
```
만약 특정 워크스페이스만 따로 설치하고 싶으면
```shell
pnpm install --filter ./apps/web
```
이렇게 하면 apps/web 관련된 의존성만 설치. (단, 루트에도 필요한 건 같이 설치됨.)


### 3. 가이드 실행

```shell
pnpm run docs:dev
```
http://localhost:5173 실행. 

