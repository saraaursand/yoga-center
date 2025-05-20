<template>
  <header class="header">
    <NuxtLink to="/" class="logo">
      <img :src="logo" alt="Yoga logo" />
    </NuxtLink>
    <nav class="menu">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/highlights">Highlights</NuxtLink>
      <NuxtLink to="/activities">Activities</NuxtLink>
      <NuxtLink to="/teachers">Our teachers</NuxtLink>
      <NuxtLink to="/about">About us</NuxtLink>
      <NuxtLink to="/contact">Contact us</NuxtLink>
    </nav>
  </header>
</template>
  
<script setup>
import logo from '~/assets/images/logo.png'
</script>
  
<style scoped>
.header {
  background-color: var(--C02);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--MENU);
  font-family: var(--FONT);
}

.logo img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
}

/* Menu styles */
.menu {
  display: flex;
  gap: 4rem;
  /* Increased spacing between buttons */
}

.menu a {
  text-decoration: none;
  color: var(--C05);
  /* White color */
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.menu a:hover {
  color: var(--C01);
  /* Optional hover effect */
}
</style>
  