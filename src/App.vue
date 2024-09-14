<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Nav from './components/nav/Nav.vue';
</script>

<template>
  <header>
    <Nav></Nav>
  </header>

  <RouterView />
</template>

