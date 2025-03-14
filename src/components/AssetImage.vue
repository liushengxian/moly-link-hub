<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  class?: string;
}>();

// Get the base URL from environment
const base = import.meta.env.BASE_URL || '/';

// Create a computed prop that prefixes the src with the base URL if needed
const imageSrc = computed(() => {
  // If the src is an absolute URL or data URL, return it as is
  if (props.src.startsWith('http') || props.src.startsWith('data:')) {
    return props.src;
  }
  
  // Otherwise, prefix with the base URL
  // Make sure we don't double up on slashes
  const baseWithoutTrailingSlash = base.endsWith('/') ? base.slice(0, -1) : base;
  const srcWithoutLeadingSlash = props.src.startsWith('/') ? props.src.slice(1) : props.src;
  
  return `${baseWithoutTrailingSlash}/${srcWithoutLeadingSlash}`;
});
</script>

<template>
  <img 
    :src="imageSrc" 
    :alt="alt || ''" 
    :width="width" 
    :height="height"
    :class="class"
  />
</template>