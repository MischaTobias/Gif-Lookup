import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.mjs'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    name: 'happy-dom',
    root: './tests',
    environment: 'happy-dom',
    // setupFiles: ['./setup.happy-dom.ts'],
  },
}))