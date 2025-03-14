import { createRouter, createWebHistory } from 'vue-router'
import Home from '@src/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('@src/views/Posts.vue')
  },
  {
    path: '/new-post',
    name: 'NewPost',
    component: () => import('@src/views/CreatePost.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@src/views/Profile.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@src/views/Settings.vue')
  },
  {
    path: '/marketplace',
    name: 'Marketplace',
    component: () => import('@src/views/Marketplace.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router