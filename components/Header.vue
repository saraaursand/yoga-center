<template>
  <header :class="['header', { 'menu-open': menuOpen }]">
    <NuxtLink to="/" class="logo">
      <img :src="logo" alt="Yoga logo" />
    </NuxtLink>
    <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
    </button>
    <nav class="menu" :class="{ open: menuOpen }">
      <NuxtLink to="/" @click="closeMenu">Home</NuxtLink>
      <NuxtLink to="/highlights" @click="closeMenu">Highlights</NuxtLink>
      <NuxtLink to="/activities" @click="closeMenu">Activities</NuxtLink>
      <NuxtLink to="/teachers" @click="closeMenu">Our teachers</NuxtLink>
      <NuxtLink to="/about" @click="closeMenu">About us</NuxtLink>
      <NuxtLink to="/contact" @click="closeMenu">Contact us</NuxtLink>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import logo from '/images/logo.png'

const menuOpen = ref(false)
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
function closeMenu() {
  menuOpen.value = false
}
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
  position: relative;
  z-index: 1; /* Make sure header is under the menu when menu is open */
}

.logo img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  border: none;
  background: none;
  cursor: pointer;
  z-index: 20;
  width: 32px;
  height: 32px;
  padding: 0;
}
.hamburger span {
  display: block;
  height: 4px;
  width: 28px;
  background: var(--C05);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  position: relative;
}

.hamburger span.open:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}
.hamburger span.open:nth-child(2) {
  opacity: 0;
}
.hamburger span.open:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* Menu styles */
.menu {
  display: flex;
  gap: 4rem;
  transition: left 0.3s;
}
.menu a {
  text-decoration: none;
  color: var(--C05);
  text-transform: uppercase;
  transition: color 0.3s ease;
}
.menu a:hover {
  color: var(--C01);
}

@media (max-width: 700px) {
  .header {
    position: fixed;
    z-index: 10000;
    width: 100vw;
    left: 0;
    top: 0;
    background: var(--C02);
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
  }
  .logo img {
    width: 48px;
    height: 48px;
  }
  .hamburger {
    display: flex;
    z-index: 10001;
  }
  .menu {
    display: none;
    position: absolute;
    left: 0;
    top: 64px; /* Match your header height */
    background: var(--C02);
    width: 100vw;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    z-index: 9999;
    padding: 1rem 2rem;
    flex-direction: column;
    gap: 2rem;
    border-radius: 0 0 12px 12px; /* Optional */
  }
  .menu.open {
    display: flex;
  }
}
</style>