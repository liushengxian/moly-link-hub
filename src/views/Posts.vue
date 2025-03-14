<script setup lang="ts">
import { ref } from 'vue'
import PostList from '../components/PostList.vue'

const posts = ref([
  {
    id: 1,
    title: 'First Post',
    content: 'This is the first post content',
    author: 'user1',
    date: '2023-10-01',
    comments: []
  }
])
</script>

<template>
  <div>
    <h1>Posts</h1>
    <PostList :posts="posts" />
  </div>
</template>