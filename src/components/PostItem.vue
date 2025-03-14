<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  post: {
    id: number
    title: string
    content: string
    author: string
    date: string
    comments: Array<any>
  }
}>()
</script>

<template>
  <div class="post-item">
    <h2>{{ post.title }}</h2>
    <div class="meta">
      <span class="author">@{{ post.author }}</span>
      <span class="date">{{ post.date }}</span>
    </div>
    <p>{{ post.content }}</p>
    <div class="comments">
      <div v-for="comment in post.comments" :key="comment.id" class="comment">
        {{ comment.content }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-item {
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.meta {
  color: #586069;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.author {
  margin-right: 0.5rem;
}

.comments {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e1e4e8;
}

.comment {
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background-color: #f6f8fa;
  border-radius: 3px;
}
</style>
