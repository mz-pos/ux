import { defineConfig, loadEnv } from 'vitepress'
import { resolve } from 'path'
import fs from 'fs'

export default defineConfig(({mode}) =>  {
    const env = loadEnv(mode, process.cwd())

    return {
        title: 'mz-repo 문서',
        description: 'pnpm + turborepo + vue 기반 monorepo 문서',
        base: env.VITE_BASE + 'docs/',
        vite: {
            plugins: [
                {
                    name: 'spa-fallback',
                    closeBundle: () => {
                        const indexPath = resolve(__dirname, '../dist/index.html')
                        const fallbackPath = resolve(__dirname, '../dist/404.html')
                        if (fs.existsSync(indexPath)) {
                            fs.copyFileSync(indexPath, fallbackPath)
                        }
                    }
                }
            ]
        },
        themeConfig: {
            nav: [
                { text: 'home', link: '/' },
                { text: 'guide', link: '/guide/' },
                { text: 'storybook', link: '/storybook/' }
            ],
            sidebar: [
                { text: 'home', link: '/' },
                { text: 'VitePress 가이드 시작하기', link: '/getting-started' },
                {
                    text: 'new app guide',
                    items: [
                        { text: 'turbo repo 명령어', link: '/guide/' },
                        // { text: '설치 가이드', link: '/guide/install' },
                        { text: '사용법 가이드', link: '/guide/usage' }
                    ]
                },
                {
                    text: 'storybook',
                    items: [
                        { text: '스토리북 섹션 메인', link: '/storybook/' },
                        { text: '사용법 가이드', link: '/storybook/usage' }
                    ]
                },
                {
                    text: 'github pages 배포하기',
                    items: [
                        { text: '다중 페이지 배포 가이드', link: '/pages/' },
                        { text: 'new app 배포시 ', link: '/pages/' },
                    ]
                }
            ],
            socialLinks: [
                { icon: 'github', link: 'https://github.com/mz-pos/ux' }
            ]
        }
    }
})