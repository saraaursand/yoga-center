<template>
    <div>
      <Header />
      <main>
        <slot />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  </script>
  
  <style scoped>
  main {
    min-height: calc(100vh - 128px); /* Adjusted for header + footer height */
    padding: 2rem;
  }
  </style>
  