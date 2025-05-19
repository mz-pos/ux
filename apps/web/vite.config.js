import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import * as fs from 'fs';

// Copy index.html to 404.html after build
function spaFallback() {
    return {
        name: 'spa-fallback',
        closeBundle: () => {
            const indexPath = resolve(__dirname, 'dist/index.html')
            const fallbackPath = resolve(__dirname, 'dist/404.html')
            if (fs.existsSync(indexPath)) {
                fs.copyFileSync(indexPath, fallbackPath)
            }
        }
    }
}


export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd())
    return {
        plugins: [spaFallback()],
        base: env.VITE_BASE + 'web/',
    }
})
