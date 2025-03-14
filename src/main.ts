import { createApp } from 'vue'
import './style.css'
import App from '@src/App.vue'
import router from '@src/router'

// Check for redirect from 404.html
const redirect = sessionStorage.getItem('redirect');
if (redirect) {
  sessionStorage.removeItem('redirect');
  const [pathname, search, hash] = redirect.split(/[?#]/);
  router.push({
    path: pathname,
    query: search ? Object.fromEntries(new URLSearchParams(search)) : {},
    hash: hash ? `#${hash}` : ''
  });
}

createApp(App)
  .use(router)
  .mount('#app')
