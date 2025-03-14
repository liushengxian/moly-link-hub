import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'

// Get repository name for GitHub Pages base path
const getRepoName = () => {
  // When running on GitHub Actions, use GITHUB_REPOSITORY
  if (process.env.GITHUB_REPOSITORY) {
    const [, repoName] = process.env.GITHUB_REPOSITORY.split('/')
    return `/${repoName}/`
  }
  
  // For directly pushing from local to gh-pages branch
  try {
    // Try to get repo name from git remote
    const gitConfigPath = path.resolve('.git/config')
    const fs = require('fs')
    const gitConfig = fs.readFileSync(gitConfigPath, 'utf8')
    const remoteMatch = gitConfig.match(/url\s*=\s*.*github\.com[:/]([^/]+)\/([^.]+)\.git/i)
    
    if (remoteMatch && remoteMatch[2]) {
      const repoName = remoteMatch[2]
      return `/${repoName}/`
    }
  } catch (e) {
    console.log('Could not determine repo name from git config')
  }
  
  // For local development, use '/'
  return process.env.BASE_URL || '/'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: getRepoName(),
  resolve: {
    alias: {
      '@src': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src')
    }
  },
  build: {
    // Ensure assets have the correct paths
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Ensure chunk names don't use hash for better caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  }
})
