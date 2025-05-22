<template>
  <div class="info-card">
    <div class="info-header">WHO</div>
    <div class="info-content who-content">
      <img :src="imgSrc" alt="Person" class="who-img" />
      <div class="who-name">{{ name }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgSrc: String,
  name: String
});
</script>

<style scoped>
.info-card {
  margin-left: var(--widget-gap);
  margin-right: var(--widget-gap);
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
  font-family: var(--FONT, Georgia, serif);
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  background: var(--C03, #96AE93);
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
}

.info-header {
  background: var(--C01, #72936E);
  color: var(--C05, #fff);
  font-size: var(--MENU, 24px);
  font-weight: bold;
  padding: 1rem 2rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  text-align: center;
  letter-spacing: 1px;
}

.info-content.who-content {
  background: var(--C02, #84A181);
  color: var(--C06, #000);
  font-size: var(--DESCRIPTION, 24px);
  padding: 2rem 2rem 2rem 2rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.who-img {
  width: 120px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
  background: #fff;
}

.who-name {
  font-size: 2rem;
  margin-top: 0.5rem;
  text-align: center;
}
</style>