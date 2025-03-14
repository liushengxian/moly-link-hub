<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['close', 'add']);

const newWebsite = ref({
  title: '',
  description: '',
  url: '',
  favicon: ''
});

const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const submitForm = () => {
  if (!newWebsite.value.title || !newWebsite.value.url) {
    alert('Please fill in at least the title and URL fields');
    return;
  }
  
  if (!isValidUrl(newWebsite.value.url)) {
    alert('Please enter a valid URL (including http:// or https://)');
    return;
  }
  
  // If favicon is not provided, try to use the default favicon from the domain
  if (!newWebsite.value.favicon) {
    const url = new URL(newWebsite.value.url);
    newWebsite.value.favicon = `${url.origin}/favicon.ico`;
  }
  
  emit('add', { ...newWebsite.value });
  
  // Reset form
  newWebsite.value = {
    title: '',
    description: '',
    url: '',
    favicon: ''
  };
};

const closeDialog = () => {
  emit('close');
};
</script>

<template>
  <div class="dialog-overlay">
    <div class="dialog">
      <div class="dialog-header">
        <h2>Add New Website</h2>
        <button class="close-button" @click="closeDialog">&times;</button>
      </div>
      
      <div class="dialog-body">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="title">Website Title *</label>
            <input 
              id="title" 
              v-model="newWebsite.title" 
              type="text" 
              placeholder="GitHub"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="url">Website URL *</label>
            <input 
              id="url" 
              v-model="newWebsite.url" 
              type="url" 
              placeholder="https://github.com"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="description">Description</label>
            <textarea 
              id="description" 
              v-model="newWebsite.description" 
              placeholder="A brief description of the website..."
              rows="3"
            ></textarea>
          </div>
          
          <div class="form-group">
            <label for="favicon">Favicon URL <span class="optional">(optional)</span></label>
            <input 
              id="favicon" 
              v-model="newWebsite.favicon" 
              type="url" 
              placeholder="https://github.com/favicon.ico"
            />
            <small class="help-text">If left empty, we'll try to use the default favicon from the domain</small>
          </div>
          
          <div class="form-actions">
            <button type="button" class="btn-secondary" @click="closeDialog">Cancel</button>
            <button type="submit" class="btn-primary">Add Website</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
}

.dialog {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #d0d7de;
}

.dialog-header h2 {
  margin: 0;
  font-size: 20px;
  color: #24292f;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #57606a;
}

.dialog-body {
  padding: 24px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  color: #24292f;
  text-align: left;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #0969da;
  box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.1);
  outline: none;
}

.optional {
  font-weight: normal;
  color: #57606a;
  font-size: 12px;
}

.help-text {
  display: block;
  margin-top: 4px;
  color: #57606a;
  font-size: 12px;
  text-align: left;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
}

.btn-primary,
.btn-secondary {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.btn-primary {
  background-color: #2da44e;
  color: white;
  border: 1px solid rgba(27, 31, 36, 0.15);
}

.btn-primary:hover {
  background-color: #2c974b;
}

.btn-secondary {
  background-color: #f6f8fa;
  color: #24292f;
  border: 1px solid rgba(27, 31, 36, 0.15);
}

.btn-secondary:hover {
  background-color: #f3f4f6;
}
</style>