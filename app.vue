<template>
  <div class="page-wrapper">
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import Footer from '~/components/Footer.vue'
</script>

<style>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>