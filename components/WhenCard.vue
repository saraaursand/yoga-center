<template>
  <div class="info-card">
    <div class="info-header">WHEN</div>
    <div class="info-content when-content">
      <div class="when-date">{{ date }}</div>
      <div class="when-time">{{ time }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  date: String,
  time: String
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

.info-content.when-content {
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

.when-date {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.when-time {
  font-size: 2rem;
  text-align: center;
}
</style>