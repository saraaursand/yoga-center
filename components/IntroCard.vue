<template>
  <div class="intro-card" :class="{ 'reverse': imageRight }">
    <img :src="imgSrc" alt="Yoga image" class="intro-img" />
    <div class="intro-content">
      <h2 class="intro-header">{{ header }}</h2>
      <p class="intro-description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgSrc: String,
  header: String,
  description: String,
  imageRight: Boolean // If true, image is on the right
});
</script>

<style scoped>
.intro-card {
  display: flex;
  align-items: center;
  margin-left: var(--WIDGET-GAP);
  margin-right: var(--WIDGET-GAP);
  background: var(--C02, #84A181);
  padding: 2rem;
  border-radius: 8px;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-direction: row;
}
.intro-card.reverse {
  flex-direction: row-reverse;
}
.intro-img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}
.intro-content {
  flex: 1;
  text-align: left;
}
.intro-header {
  font-size: var(--SUBHEADER, 36px);
  font-family: var(--FONT, Georgia, serif);
  margin: 0 0 1rem 0;
}
.intro-description {
  font-size: var(--DESCRIPTION, 24px);
  font-family: var(--FONT, Georgia, serif);
  margin: 0;
}

@media (max-width: 600px) {
  .intro-card {
    flex-direction: column !important;
    align-items: center;
  }
  .intro-img {
    order: -1;
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  .intro-content {
    text-align: center;
  }
}
</style>
