<template>
    <div class="layout">
      <Header />
      <NuxtPage />
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  </script>
  
  <style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  </style>
  