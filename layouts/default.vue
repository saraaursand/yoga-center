<template>
    <div class="layout">
      <Header />
      <main class="content">
        <NuxtPage />
        <WhenCard
          date="Saturday November 25th"
          time="10:00 AM - 4:00 PM"
        />
        <WhenCard
          date="Every Monday"
          time="10:00 AM - 4:00 PM"
        />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '~/components/Header.vue'
  import IntroCard from '~/components/IntroCard.vue';
  import DescriptionCard from '~/components/DescriptionCard.vue';
  import WhoCard from '~/components/WhoCard.vue';
  import WhenCard from '~/components/WhenCard.vue';
  import Footer from '~/components/Footer.vue'
  
  </script>
  
  <style scoped>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .content {
    flex: 1;
  }
  </style>
  