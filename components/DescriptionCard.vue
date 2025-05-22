<template>
  <div class="description-card">
    <div class="description-header">
      {{ header }}
    </div>
    <div class="description-content">
      {{ description }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  header: String,
  description: String
});
</script>

<style scoped>
.description-card {
  margin-left: var(--widget-gap);
  margin-right: var(--widget-gap);
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
  font-family: var(--FONT, Georgia, serif);
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
}

.description-header {
  background: var(--C01, #72936E);
  color: var(--C05, #fff);
  font-size: var(--MENU, 24px);
  font-weight: bold;
  padding: 1rem 2rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.description-content {
  background: var(--C02, #84A181);
  color: var(--C06, #000);
  font-size: var(--DESCRIPTION, 24px);
  padding: 1.5rem 2rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  text-align: center;
}
</style>