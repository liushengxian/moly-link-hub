<script setup lang="ts">
import { ref } from 'vue'

const title = ref('')
const content = ref('')

const emit = defineEmits(['submit'])

const submitPost = () => {
  if (title.value && content.value) {
    emit('submit', {
      title: title.value,
      content: content.value
    })
    title.value = ''
    content.value = ''
  }
}
</script>

<template>
  <div class="new-post">
    <h2>Create New Post</h2>
    <form @submit.prevent="submitPost">
      <input
        v-model="title"
        type="text"
        placeholder="Post title"
        required
      />
      <textarea
        v-model="content"
        placeholder="Write your post content..."
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.new-post {
  margin-bottom: 2rem;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #e1e4e8;
  border-radius: 3px;
}

textarea {
  min-height: 100px;
}

button {
  background-color: #2ea44f;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #22863a;
}
</style>
