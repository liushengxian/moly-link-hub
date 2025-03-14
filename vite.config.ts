import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'

// Get base path from environment variable or default for GitHub Pages
const getBasePath = () => {
  // First priority: Check for explicitly set BASE_URL
  if (process.env.BASE_URL) {
    return process.env.BASE_URL;
  }
  
  // Second priority: Try to get from GITHUB_REPOSITORY (for GitHub Actions)
  if (process.env.GITHUB_REPOSITORY) {
    const [, repoName] = process.env.GITHUB_REPOSITORY.split('/')
    return `/${repoName}/`
  }
  
  // For local development, use '/'
  return '/'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: getBasePath(),
  resolve: {
    alias: {
      '@src': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src')
    }
  },
  build: {
    sourcemap: true,
    // Ensure assets have the correct paths
    assetsDir: 'assets',
    outDir: 'dist',
    emptyOutDir: true
  }
})
