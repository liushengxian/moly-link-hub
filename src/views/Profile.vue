<script setup lang="ts">
import { ref } from 'vue';
import { userProfile, updateUserProfile } from '@src/stores/userStore';

const isEditing = ref(false);
const editedProfile = ref({ ...userProfile.value });

const startEditing = () => {
  editedProfile.value = { ...userProfile.value };
  isEditing.value = true;
};

const saveProfile = () => {
  updateUserProfile(editedProfile.value);
  isEditing.value = false;
};

const cancelEditing = () => {
  isEditing.value = false;
};
</script>

<template>
  <div class="profile-container">
    <div class="profile-header">
      <h1>Your Profile</h1>
      <button v-if="!isEditing" class="btn-primary" @click="startEditing">Edit Profile</button>
    </div>

    <div class="profile-card">
      <div class="avatar-section">
        <img :src="userProfile.avatarUrl" alt="User avatar" class="profile-avatar">
      </div>

      <div class="profile-details">
        <!-- View Mode -->
        <div v-if="!isEditing" class="profile-info">
          <div class="info-group">
            <h2>{{ userProfile.username }}</h2>
            <p class="email">{{ userProfile.email }}</p>
          </div>
        </div>

        <!-- Edit Mode -->
        <form v-else class="edit-form" @submit.prevent="saveProfile">
          <div class="form-group">
            <label for="username">Username</label>
            <input 
              type="text" 
              id="username" 
              v-model="editedProfile.username" 
              required
            >
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="editedProfile.email" 
              required
            >
          </div>

          <div class="form-group">
            <label for="avatar">Avatar URL</label>
            <input 
              type="url" 
              id="avatar" 
              v-model="editedProfile.avatarUrl"
            >
          </div>

          <div class="action-buttons">
            <button type="button" class="btn-secondary" @click="cancelEditing">Cancel</button>
            <button type="submit" class="btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.profile-header h1 {
  margin: 0;
  color: #24292f;
}

.profile-card {
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #d0d7de;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

@media (min-width: 768px) {
  .profile-card {
    flex-direction: row;
  }
}

.avatar-section {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f6f8fa;
}

.profile-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid #d0d7de;
}

.profile-details {
  flex: 1;
  padding: 2rem;
}

.profile-info {
  margin-bottom: 1.5rem;
}

.info-group {
  margin-bottom: 1.5rem;
}

.info-group h2 {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
  color: #24292f;
}

.email {
  margin: 0;
  color: #57606a;
  font-size: 1rem;
}

.edit-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #24292f;
}

.form-group input {
  padding: 0.5rem 0.75rem;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  font-size: 1rem;
}

.form-group input:focus {
  outline: none;
  border-color: #0969da;
  box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.1);
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
}

.btn-primary, .btn-secondary {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid rgba(27, 31, 36, 0.15);
}

.btn-primary {
  background-color: #2da44e;
  color: white;
}

.btn-primary:hover {
  background-color: #2c974b;
}

.btn-secondary {
  background-color: #f6f8fa;
  color: #24292f;
}

.btn-secondary:hover {
  background-color: #f3f4f6;
}
</style>