<template>
  <div class="page">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
  <Footer />
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

