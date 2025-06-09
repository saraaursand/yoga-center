<template>
  <div class="layout">
    <Header />
    <main class="content">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import IntroCard from '~/components/IntroCard.vue'
import DescriptionCard from '~/components/DescriptionCard.vue'
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
  margin-top: 80px; /* Default: desktop header height */
}

@media (max-width: 900px) {
  .content {
    margin-top: 64px; /* Mobile: header height */
  }
}
</style>