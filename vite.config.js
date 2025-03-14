import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';
// Get repository name for GitHub Pages base path
var getRepoName = function () {
    // When running on GitHub Actions, use GITHUB_REPOSITORY
    if (process.env.GITHUB_REPOSITORY) {
        var _a = process.env.GITHUB_REPOSITORY.split('/'), repoName = _a[1];
        return "/".concat(repoName, "/");
    }
    // For local development, use '/'
    return '/';
};
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: getRepoName(),
    resolve: {
        alias: {
            '@src': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src')
        }
    }
});
