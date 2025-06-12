<template>
  <div>
    <div class="highlights-image-wrapper">
      <img
        class="highlights-image"
        src="https://urexuitkakjvttquebyb.supabase.co/storage/v1/object/sign/activities-pics/highlights.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ODFmYjQwZS0wZmI2LTRiY2ItODU1OC1hNzQwNjVmNzk1MTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhY3Rpdml0aWVzLXBpY3MvaGlnaGxpZ2h0cy5wbmciLCJpYXQiOjE3NDk0ODIwMzMsImV4cCI6MTc4MTAxODAzM30.iNBS5Pv7HoaUTTutuKxkaUc501TBhimfJMa65NLd9Fg"
        alt="Highlights"
      />
    <div style="margin-top: 2rem; margin-left: 2rem; ">
      <Breadcrumbs :crumbs="breadcrumbs" />
    </div>
    </div>
    <h1 class="highlights-header">Highlights</h1>
    <div class="highlights-subheader">
      <h2 class="highlights-subheader">Try some of our most popular activities!</h2>
    </div>
    <div class="highlights-grid">
      <HighlightCard v-for="activity in highlights" :key="activity.id"
      :name="activity.name" :pic="activity.pic" :type="activity.type" />
    </div>
  </div>
</template>

<script setup>
import { useAsyncData } from "nuxt/app";
import HighlightCard from "~/components/HighlightCard.vue";

const {
  data: highlights,
  pending,
  error,
} = await useAsyncData("highlights", () =>
  $fetch("/api/activities/highlights")
);

const breadcrumbs = [
  { name: 'Home ', link: '/' },
  { name: ' Highlights', link: '/highlights' }
];
</script>

<style scoped>
.highlights-image-wrapper {
  width: 100vw;
  min-width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  overflow: hidden;
  position: relative;
}
.highlights-image {
  width: 100vw;
  min-width: 100vw;
  height: 25vw;
  object-fit: cover;
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
}
.highlights-header {
  margin-top: 40px;
  margin-bottom: 24px;
  font-size: var(--HEADER);
  color: var(--C06);
  text-align: center;
  font-weight: bold;
}
.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 2rem auto;
  padding: 0 1rem;
}

.highlights-subheader {
  text-align: center;
}

@media (max-width: 600px) {
  .highlights-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
