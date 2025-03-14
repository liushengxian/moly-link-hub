<script setup lang="ts">
import { useRouter } from 'vue-router'
import NewPost from '../components/NewPost.vue'

const router = useRouter()

const handleSubmit = (newPost: { title: string, content: string }) => {
  // In a real app, you would save the post to your state or backend
  console.log('New post submitted:', newPost)
  
  // Navigate back to posts page
  router.push('/posts')
}
</script>

<template>
  <div>
    <h1>Create New Post</h1>
    <NewPost @submit="handleSubmit" />
  </div>
</template>