<script setup lang="ts">
import { ref } from 'vue';
import { userProfile } from '@src/stores/userStore';

const navItems = [
  { name: 'Home', icon: 'home', link: '/' },
  { name: 'Posts', icon: 'code', link: '/posts' },
  { name: 'New Post', icon: 'plus', link: '/new-post' },
  { name: 'Marketplace', icon: 'comment-discussion', link: '/marketplace' }
];

const showUserMenu = ref(false);

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value;
};

// Close menu when clicking outside
const closeMenuOnOutsideClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  
  if (!target.closest('.user-menu-container')) {
    showUserMenu.value = false;
  }
};

// Add and remove event listener
const addClickOutsideListener = () => {
  if (showUserMenu.value) {
    setTimeout(() => {
      document.addEventListener('click', closeMenuOnOutsideClick);
    });
  } else {
    document.removeEventListener('click', closeMenuOnOutsideClick);
  }
};
</script>

<template>
  <nav class="navbar">
    <div class="navbar-left">
      <router-link to="/">
        <div class="logo">
          <img src="../assets/rooooster.png" alt="Logo" width="40" height="40">
        </div>
      </router-link>
      <ul class="nav-links">
        <li v-for="item in navItems" :key="item.name">
          <router-link :to="item.link" class="nav-link">
            <span class="icon" :class="`icon-${item.icon}`"></span>
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="navbar-right">
      <div class="user-menu-container">
        <div class="user-menu" @click.stop="toggleUserMenu">
          <img :src="userProfile.avatarUrl" alt="User" class="avatar">
        </div>
        <transition name="dropdown">
          <div v-if="showUserMenu" class="dropdown-menu" @click.stop v-on:click="addClickOutsideListener">
            <div class="dropdown-header">
              <p class="username">{{ userProfile.username }}</p>
              <p class="user-email">{{ userProfile.email }}</p>
            </div>
            <div class="dropdown-divider"></div>
            <ul>
              <li>
                <router-link to="/profile" class="dropdown-item">
                  <span class="dropdown-icon">👤</span>
                  Your Profile
                </router-link>
              </li>
              <li>
                <router-link to="/settings" class="dropdown-item">
                  <span class="dropdown-icon">⚙️</span>
                  Settings
                </router-link>
              </li>
            </ul>
            <div class="dropdown-divider"></div>
            <ul>
              <li>
                <a href="#" class="dropdown-item">
                  <span class="dropdown-icon">🚪</span>
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </nav>
  <div class="navbar-spacer"></div>
</template>

<style scoped>
.navbar {
  background-color: #24292f;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 64px;
  border-bottom: 1px solid #2d333b;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
}

.navbar-spacer {
  height: 64px;
  width: 100%;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 16px;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 8px 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.nav-link:hover {
  color: #f0f6fc;
}

.router-link-active {
  font-weight: bold;
  color: #f0f6fc;
}

.icon {
  margin-right: 4px;
}

.search-input {
  background-color: #1c2128;
  border: 1px solid #444c56;
  border-radius: 6px;
  padding: 5px 12px;
  color: #fff;
  width: 200px;
  margin-right: 16px;
}

.search-input::placeholder {
  color: #768390;
}

.user-menu-container {
  position: relative;
}

.user-menu {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: opacity 0.2s;
}

.avatar:hover {
  opacity: 0.8;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background-color: #ffffff;
  border-radius: 6px;
  min-width: 240px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  z-index: 10;
  border: 1px solid #d0d7de;
  overflow: hidden;
}

.dropdown-header {
  padding: 8px 16px;
  background-color: #f6f8fa;
}

.username {
  margin: 0 0 4px;
  font-weight: 600;
  font-size: 14px;
  color: #24292f;
}

.user-email {
  margin: 0;
  font-size: 12px;
  color: #57606a;
}

.dropdown-divider {
  margin: 0;
  height: 1px;
  background-color: #d0d7de;
}

.dropdown-menu ul {
  list-style: none;
  margin: 0;
  padding: 8px 0;
}

.dropdown-menu li {
  margin: 0;
  padding: 0;
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 6px 16px;
  color: #24292f;
  text-decoration: none;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background-color: #f6f8fa;
}

.dropdown-icon {
  margin-right: 8px;
  font-size: 16px;
}

/* Dropdown animation */
.dropdown-enter-active, 
.dropdown-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.navbar-right {
  display: flex;
  align-items: center;
}
</style>
