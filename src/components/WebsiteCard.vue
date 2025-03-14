<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  favicon: string;
  url: string;
}>();
</script>

<template>
  <a :href="url" target="_blank" rel="noopener noreferrer" class="website-card">
    <div class="card-content">
      <div class="card-header">
        <img :src="favicon" alt="Website favicon" class="favicon" />
        <h3 class="title">{{ title }}</h3>
      </div>
      <p class="description">{{ description }}</p>
    </div>
    <div class="card-footer">
      <span class="url">{{ url }}</span>
      <span class="visit-link">Visit →</span>
    </div>
  </a>
</template>

<style scoped>
.website-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;
  padding: 16px;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  background-color: #fff;
  transition: all 0.2s ease;
  color: inherit;
  text-decoration: none;
  box-sizing: border-box;
}

.website-card:hover {
  border-color: #0969da;
  box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.1);
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.favicon {
  width: 24px;
  height: 24px;
  min-width: 24px;
  margin-right: 12px;
  border-radius: 4px;
}

.title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #24292f;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.description {
  margin: 8px 0 0;
  color: #57606a;
  font-size: 14px;
  line-height: 1.5;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  padding-top: 12px;
  font-size: 12px;
  color: #57606a;
  border-top: 1px solid #f0f0f0;
  min-height: 20px;
}

.url {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70%;
}

.visit-link {
  color: #0969da;
  font-weight: 500;
}
</style>