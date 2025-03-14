import { ref, watch } from 'vue';

interface UserProfile {
  username: string;
  email: string;
  avatarUrl: string;
}

// Initialize with default values or from localStorage
const defaultProfile: UserProfile = {
  username: 'GitHub User',
  email: 'user@example.com',
  avatarUrl: 'https://avatars.githubusercontent.com/u/1732802?v=4'
};

// Load user data from localStorage or use defaults
const storedUserData = localStorage.getItem('moly-link-hub-user');
const initialUserData: UserProfile = storedUserData ? JSON.parse(storedUserData) : defaultProfile;

// Create reactive state
export const userProfile = ref<UserProfile>(initialUserData);

// Watch for changes and update localStorage
watch(userProfile, (newProfile) => {
  localStorage.setItem('moly-link-hub-user', JSON.stringify(newProfile));
}, { deep: true });

// Function to update user profile
export function updateUserProfile(updatedProfile: Partial<UserProfile>) {
  userProfile.value = {
    ...userProfile.value,
    ...updatedProfile
  };
}