<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import WebsiteCard from '@src/components/WebsiteCard.vue';
import AddWebsiteDialog from '@src/components/AddWebsiteDialog.vue';

const showDialog = ref(false);

// Define default websites to use if none are stored in localStorage
const defaultWebsites = [
  {
    title: 'Google',
    description: 'Search the world\'s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you\'re looking for.',
    favicon: 'https://www.google.com/favicon.ico',
    url: 'https://www.google.com'
  },
  {
    title: 'DeepSeek',
    description: 'DeepSeek is an AI research company focused on large-scale models and reasoning capabilities.',
    favicon: 'https://www.deepseek.com/favicon.ico',
    url: 'https://www.deepseek.com'
  },
  {
    title: 'GitHub',
    description: 'GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories.',
    favicon: 'https://github.com/favicon.ico',
    url: 'https://github.com'
  },
  {
    title: 'Microsoft Azure',
    description: 'Microsoft Azure is an ever-expanding set of cloud services to help your organization meet your business challenges.',
    favicon: 'https://azure.microsoft.com/favicon.ico',
    url: 'https://azure.microsoft.com'
  }
];

// Initialize websites from localStorage or use defaults
const websites = ref<Array<{ title: string; description: string; favicon: string; url: string; }>>(
  JSON.parse(localStorage.getItem('moly-link-hub-websites') || 'null') || defaultWebsites
);

// Watch for changes to websites array and update localStorage
watch(websites, (newWebsites) => {
  localStorage.setItem('moly-link-hub-websites', JSON.stringify(newWebsites));
}, { deep: true });

const openAddDialog = () => {
  showDialog.value = true;
};

const addNewWebsite = (newWebsite: { title: string; description: string; favicon: string; url: string; }) => {
  websites.value.push(newWebsite);
  // localStorage is automatically updated due to the watch effect
  showDialog.value = false;
};
</script>

<template>
  <div class="home">
    <h1>M-Link Workbench</h1>
    <p>Welcome to the M-Link Workbench.</p>
    
    <div class="website-cards">
      <WebsiteCard 
        v-for="website in websites" 
        :key="website.url"
        :title="website.title"
        :description="website.description"
        :favicon="website.favicon"
        :url="website.url"
      />
      <div class="add-card" @click="openAddDialog">
        <div class="add-card-content">
          <div class="plus-icon">+</div>
          <p>Add New Website</p>
        </div>
      </div>
    </div>
    
    <AddWebsiteDialog 
      v-if="showDialog" 
      @close="showDialog = false"
      @add="addNewWebsite"
    />
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  margin-top: 2rem;
}

.website-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 30px;
  text-align: left;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;
}

.add-card {
  box-sizing: border-box;
  padding: 16px;
  border: 2px dashed #d0d7de;
  border-radius: 6px;
  background-color: #f6f8fa;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  margin-bottom: 16px;
  transition: all 0.2s ease;
}

.add-card:hover {
  border-color: #0969da;
  background-color: #f0f6fc;
}

.add-card-content {
  text-align: center;
  color: #57606a;
}

.plus-icon {
  font-size: 36px;
  margin-bottom: 12px;
  color: #0969da;
}

@media (max-width: 1024px) {
  .website-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .website-cards {
    grid-template-columns: 1fr;
  }
}
</style>