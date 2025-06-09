<template>
  <div class="highlight-card">
    <h2 class="highlight-name">{{ name }}</h2>
    <img :src="pic" :alt="name" class="highlight-pic" />
  </div>
</template>

<script setup>
defineProps({
  name: String,
  pic: String,
});
</script>

<style scoped>
.highlight-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}
.highlight-name {
  margin-bottom: 1rem;
  text-align: center;
  font-size: var(--SUBHEADER);
  color: var(--C06);
  font-weight: bold;
}
.highlight-pic {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  background: #fff;
}
</style>
