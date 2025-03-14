<script setup lang="ts">
import { ref, computed } from 'vue';
import PluginCard from '@src/components/PluginCard.vue';

// Define available categories for filtering
const categories = [
  { id: 'all', name: 'All' },
  { id: 'theme', name: 'Themes' },
  { id: 'productivity', name: 'Productivity' },
  { id: 'ai', name: 'AI Tools' },
  { id: 'dev', name: 'Development' },
  { id: 'misc', name: 'Miscellaneous' }
];

// Define sample plugins data
const allPlugins = [
  {
    id: 1,
    name: 'Code Formatter',
    description: 'Automatically format your code according to style guides',
    icon: 'https://cdn-icons-png.flaticon.com/512/1157/1157001.png',
    author: 'Code Team',
    category: 'productivity',
    downloads: 245678,
    rating: 4.7
  },
  {
    id: 2,
    name: 'AI Assistant',
    description: 'Smart code completions and suggestions powered by AI',
    icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103652.png',
    author: 'AI Labs',
    category: 'ai',
    downloads: 890432,
    rating: 4.9
  },
  {
    id: 3,
    name: 'Dark Theme Pro',
    description: 'Professional dark theme for comfortable coding at night',
    icon: 'https://cdn-icons-png.flaticon.com/512/5204/5204758.png',
    author: 'Theme Works',
    category: 'theme',
    downloads: 124567,
    rating: 4.5
  },
  {
    id: 4,
    name: 'Git Explorer',
    description: 'Advanced git integration with visual branch management',
    icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111612.png',
    author: 'DevTools Inc',
    category: 'dev',
    downloads: 367890,
    rating: 4.6
  },
  {
    id: 5,
    name: 'Todo Manager',
    description: 'Organize your tasks and todos right in your code editor',
    icon: 'https://cdn-icons-png.flaticon.com/512/2666/2666501.png',
    author: 'ProductivityPlus',
    category: 'productivity',
    downloads: 89567,
    rating: 4.3
  },
  {
    id: 6,
    name: 'Database Explorer',
    description: 'Connect and manage databases directly from your workspace',
    icon: 'https://cdn-icons-png.flaticon.com/512/2906/2906274.png',
    author: 'DataTeam',
    category: 'dev',
    downloads: 56789,
    rating: 4.4
  },
  {
    id: 7,
    name: 'Light Theme Plus',
    description: 'Enhanced light theme with customizable accent colors',
    icon: 'https://cdn-icons-png.flaticon.com/512/4507/4507073.png',
    author: 'Theme Works',
    category: 'theme',
    downloads: 43210,
    rating: 4.2
  },
  {
    id: 8,
    name: 'Code Metrics',
    description: 'Analyze code quality and track metrics over time',
    icon: 'https://cdn-icons-png.flaticon.com/512/2784/2784459.png',
    author: 'Code Analytics',
    category: 'dev',
    downloads: 32456,
    rating: 4.5
  },
  {
    id: 9,
    name: 'Pomodoro Timer',
    description: 'Stay focused with integrated pomodoro technique timer',
    icon: 'https://cdn-icons-png.flaticon.com/512/1167/1167369.png',
    author: 'FocusTeam',
    category: 'productivity',
    downloads: 78905,
    rating: 4.1
  },
  {
    id: 10,
    name: 'AI Code Reviewer',
    description: 'Get automated code reviews and suggestions from AI',
    icon: 'https://cdn-icons-png.flaticon.com/512/7693/7693271.png',
    author: 'AI Labs',
    category: 'ai',
    downloads: 156789,
    rating: 4.8
  },
  {
    id: 11,
    name: 'Language Translator',
    description: 'Translate code comments and strings between languages',
    icon: 'https://cdn-icons-png.flaticon.com/512/484/484582.png',
    author: 'LangTools',
    category: 'misc',
    downloads: 45678,
    rating: 4.4
  },
  {
    id: 12,
    name: 'Solarized Theme',
    description: 'Classic solarized color scheme for your code editor',
    icon: 'https://cdn-icons-png.flaticon.com/512/1280/1280891.png',
    author: 'ColorSchemes',
    category: 'theme',
    downloads: 234567,
    rating: 4.7
  },
  {
    id: 13,
    name: 'Terminal Plus',
    description: 'Enhanced terminal with split views and better command history',
    icon: 'https://cdn-icons-png.flaticon.com/512/8081/8081328.png',
    author: 'DevTools Inc',
    category: 'dev',
    downloads: 89012,
    rating: 4.5
  },
  {
    id: 14,
    name: 'AI Test Generator',
    description: 'Automatically generate unit tests using AI',
    icon: 'https://cdn-icons-png.flaticon.com/512/6295/6295417.png',
    author: 'TestWorks',
    category: 'ai',
    downloads: 67890,
    rating: 4.3
  },
  {
    id: 15,
    name: 'Remote Collaborator',
    description: 'Code together in real-time with your team members',
    icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png',
    author: 'TeamSync',
    category: 'productivity',
    downloads: 123456,
    rating: 4.9
  }
];

const searchQuery = ref('');
const selectedCategory = ref('all');

// Filter plugins based on search query and selected category
const filteredPlugins = computed(() => {
  let result = [...allPlugins];
  
  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(plugin => 
      plugin.name.toLowerCase().includes(query) || 
      plugin.description.toLowerCase().includes(query)
    );
  }
  
  // Filter by category
  if (selectedCategory.value !== 'all') {
    result = result.filter(plugin => plugin.category === selectedCategory.value);
  }
  
  return result;
});

const selectCategory = (categoryId: string) => {
  selectedCategory.value = categoryId;
};
</script>

<template>
  <div class="marketplace-container">
    <div class="marketplace-header">
      <h1>Plugin Marketplace</h1>
      <p>Discover and install plugins to enhance your experience</p>
      
      <div class="search-bar">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search for plugins..." 
          class="search-input"
        />
      </div>
      
      <div class="category-filter">
        <button 
          v-for="category in categories" 
          :key="category.id"
          :class="['category-button', { active: selectedCategory === category.id }]"
          @click="selectCategory(category.id)"
        >
          {{ category.name }}
        </button>
      </div>
    </div>
    
    <div class="results-info">
      <span>Showing {{ filteredPlugins.length }} plugins</span>
    </div>
    
    <div class="plugins-grid">
      <PluginCard 
        v-for="plugin in filteredPlugins" 
        :key="plugin.id"
        :name="plugin.name"
        :description="plugin.description"
        :icon="plugin.icon"
        :author="plugin.author"
        :category="plugin.category"
        :downloads="plugin.downloads"
        :rating="plugin.rating"
      />
    </div>
  </div>
</template>

<style scoped>
.marketplace-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.marketplace-header {
  text-align: center;
  margin-bottom: 2rem;
}

.marketplace-header h1 {
  margin: 0 0 0.5rem;
  font-size: 2rem;
  color: #24292f;
}

.marketplace-header p {
  margin: 0 0 1.5rem;
  color: #57606a;
}

.search-bar {
  margin-bottom: 1.5rem;
}

.search-input {
  width: 100%;
  max-width: 500px;
  padding: 0.75rem 1rem;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.search-input:focus {
  outline: none;
  border-color: #0969da;
  box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.1);
}

.category-filter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.category-button {
  padding: 0.5rem 1rem;
  background-color: #f6f8fa;
  color: #24292f;
  border: 1px solid #d0d7de;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.category-button:hover {
  background-color: #f3f4f6;
}

.category-button.active {
  background-color: #0969da;
  color: white;
  border-color: #0969da;
}

.results-info {
  margin-bottom: 1rem;
  color: #57606a;
  font-size: 0.875rem;
}

.plugins-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

/* Responsive grid adjustments */
@media (max-width: 1200px) {
  .plugins-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 992px) {
  .plugins-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .plugins-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .plugins-grid {
    grid-template-columns: 1fr;
  }
  
  .category-filter {
    flex-direction: column;
    align-items: center;
  }
  
  .category-button {
    width: 100%;
    max-width: 200px;
  }
}
</style>