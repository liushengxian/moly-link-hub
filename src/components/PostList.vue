<script setup lang="ts">
import { defineProps } from 'vue'
import PostItem from './PostItem.vue'

defineProps<{
  posts: Array<{
    id: number
    title: string
    content: string
    author: string
    date: string
    comments: Array<any>
  }>
}>()
</script>

<template>
  <div class="post-list">
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<style scoped>
.post-list {
  margin-top: 2rem;
}
</style>
