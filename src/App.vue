<script setup lang="ts">
import NavBar from '@src/components/NavBar.vue';
</script>

<template>
  <div>
    <NavBar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style>
.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
