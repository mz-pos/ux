import { defineConfig, loadEnv } from 'vite'
import { configDefaults } from 'vitest/config'
import path from 'node:path'
import fs from 'fs'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'
import vue from '@vitejs/plugin-vue'

// Copy index.html to 404.html after build
function spaFallback() {
  return {
    name: 'spa-fallback',
    closeBundle: () => {
      const indexPath = path.resolve(__dirname, 'dist/index.html')
      const fallbackPath = path.resolve(__dirname, 'dist/404.html')
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, fallbackPath)
      }
    }
  }
}

const dirname =
    typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [vue(), spaFallback()],
    base: env.VITE_BASE + 'storybook/',
    test: {
      workspace: [
        {
          extends: true,
          plugins: [
            // The plugin will run tests for the stories defined in your Storybook config
            // See options at: https://storybook.js.org/docs/writing-tests/test-addon#storybooktest
            storybookTest({ configDir: path.join(dirname, '.storybook') }),
          ],
          test: {
            name: 'storybook',
            browser: {
              enabled: true,
              headless: true,
              name: 'chromium',
              provider: 'playwright'
            },
            setupFiles: ['.storybook/vitest.setup.ts'],
            exclude: [...configDefaults.exclude],
          },
        },
      ],
    },
  }
})
