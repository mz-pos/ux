# new app 배포하려면...

1. config 설정
```text
repo-root/
├── apps/
│   ├── new-app/                   
│       └── vite.config.js      # config 설정
```

2. Actions 설정 (deploy.yml)
- app 개별 Build 추가
- gh-pages에 올릴 구조 추가

```text

# Build new-app (Vue)
- name: Build new-app app
run:  pnpm --filter new-app run build

...

mkdir -p dist/new-app

...

cp -r apps/new-app/dist/* dist/new-app
```

