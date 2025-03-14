<script setup lang="ts">
defineProps<{
  name: string;
  description: string;
  icon: string;
  author: string;
  category: string;
  downloads: number;
  rating: number;
}>();
</script>

<template>
  <div class="plugin-card">
    <div class="card-header">
      <img :src="icon" alt="Plugin icon" class="plugin-icon" />
      <div class="rating">★ {{ rating.toFixed(1) }}</div>
    </div>
    <div class="card-body">
      <h3 class="plugin-name">{{ name }}</h3>
      <p class="plugin-description">{{ description }}</p>
      <div class="plugin-meta">
        <span class="author">{{ author }}</span>
        <span class="downloads">{{ downloads.toLocaleString() }} downloads</span>
      </div>
    </div>
    <div class="card-footer">
      <button class="install-button">Install</button>
    </div>
  </div>
</template>

<style scoped>
.plugin-card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  width: 100%;
  height: 230px;
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: hidden;
}

.plugin-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-color: #0969da;
}

.card-header {
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaecef;
}

.plugin-icon {
  width: 32px;
  height: 32px;
  border-radius: 6px;
}

.rating {
  background-color: #f6f8fa;
  padding: 2px 6px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  color: #24292f;
}

.card-body {
  padding: 12px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.plugin-name {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 600;
  color: #24292f;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.plugin-description {
  margin: 0 0 12px;
  font-size: 13px;
  color: #57606a;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  flex-grow: 1;
}

.plugin-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #57606a;
}

.author {
  font-weight: 500;
}

.downloads {
  color: #57606a;
}

.card-footer {
  padding: 12px;
  border-top: 1px solid #eaecef;
  display: flex;
  justify-content: center;
}

.install-button {
  width: 100%;
  padding: 6px 12px;
  background-color: #2da44e;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.install-button:hover {
  background-color: #2c974b;
}
</style>