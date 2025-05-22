<template>
    <div class="layout">
      <Header />
      <main class="content">
        <NuxtPage />
        <WhoCard
          imgSrc="images/avaRobinson.png"
          name="Kim Nelson"
        />
        <WhoCard
          imgSrc="images/felipeGonzales.png"
          name="Shatmi Mandir"
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
  