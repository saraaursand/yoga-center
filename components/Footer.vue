<template>
  <footer class="footer">
    <NuxtLink to="/" class="logo">
      <img :src="logo" alt="Yoga logo" />
    </NuxtLink>
    <div class="address">
      <p><strong>Address:</strong></p>
      <p>Via Andrea Maria Ampère, 2</p>
      <p>20133 Milano MI</p>
      <p>Italy</p>
    </div>
  </footer>
</template>

<script setup>
import logo from '~/assets/images/logo.png'
</script>

<style scoped>
.footer {
  background-color: var(--C03);
  padding: 0.05rem 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--MENU);
  color: var(--C06);
  gap: 2rem;
}

.footer img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
}

.address {
  margin-left: auto;
  text-align: right;
  line-height: 0.5;
}
</style>
