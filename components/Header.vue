<template> 
  <!-- Responsive header with logo, nav links, and hamburger menu -->
  <header :class="['header', { 'menu-open': menuOpen }]">
    <div class="header-inner">
      <NuxtLink to="/" class="logo">
        <img :src="logo" alt="Yoga logo" />
      </NuxtLink>
      <nav class="menu" :class="{ open: menuOpen }">
        <NuxtLink to="/" @click="closeMenu">Home</NuxtLink>
        <NuxtLink to="/highlights" @click="closeMenu">Highlights</NuxtLink>
        <NuxtLink
          to="/activities"
          @click="closeMenu"
          :class="{ 'active-parent': isActivitiesActive }"
        >Activities</NuxtLink>
        <NuxtLink
          to="/teachers"
          @click="closeMenu"
          :class="{ 'active-parent': isTeachersActive }"
        >Our teachers</NuxtLink>
        <NuxtLink to="/about" @click="closeMenu">About us</NuxtLink>
        <NuxtLink to="/contact" @click="closeMenu">Contact us</NuxtLink>
      </nav>
    </div>
    <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
    </button>
  </header>
</template>

<script setup>
// Imports and state for menu logic and active nav highlighting
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import logo from '/images/logo.png'

const menuOpen = ref(false)
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
function closeMenu() {
  menuOpen.value = false
}

const route = useRoute()
const isActivitiesActive = computed(() => route.path.startsWith('/activities'))
const isTeachersActive = computed(() => route.path.startsWith('/teachers'))
</script>

<style scoped>
/* Header, nav, and hamburger styles for desktop and mobile */
.header {
  background-color: var(--C02);
  padding: 0;
  font-size: var(--MENU);
  font-family: var(--FONT);
  position: fixed;      
  z-index: 1000;        
  width: 100%;
  top: 0;           
  left: 0;
  right: 0;
  height: 80px;         
}

.header-inner {
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 18px;
  padding-right: 0;
  box-sizing: border-box;
  min-width: 0;
  height: 100%;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: 0;
  margin-right: 0;
}

.logo img {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  object-fit: cover;
}

.menu {
  display: flex;
  flex: 1;
  min-width: 0;
  justify-content: space-evenly;
  align-items: center;
  gap: 0;
  flex-wrap: nowrap;
}

.menu a {
  text-decoration: none;
  color: var(--C05);
  text-transform: uppercase;
  transition: color 0.3s ease;
  white-space: nowrap;
  padding: 0.5rem 1.1rem;
  border-radius: 0.5rem;
  flex: 0 1 auto;
}
.menu a:hover {
  color: var(--C01);
  background: var(--C04);
}

.menu a.router-link-active {
  color: var(--C06) !important;
}
.menu a.active-parent {
  color: var(--C06) !important;
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
  position: absolute;
  right: 1rem;
  top: 1.25rem;
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

/* Layout for smaller screen withs */

@media (max-width: 900px) {
  .header {
    height: 64px;     
  }
  .header-inner {
    padding-left: 10px;
    padding-right: 0.4rem;
    max-width: 100vw;
    height: 64px;
  }
  .logo img {
    width: 40px;
    height: 40px;
  }
  .menu {
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    background: var(--C02);
    width: 100vw;
    z-index: 9999;
    padding: 1rem 2rem;
    flex-direction: column;
    gap: 2rem;
    border-radius: 0;
    box-shadow: none;
    align-items: flex-start;
    margin-left: 0;
    flex: unset;
    justify-content: unset;
    flex-wrap: nowrap;
    overflow-x: visible;
  }
  .menu.open {
    display: flex;
  }
  .hamburger {
    display: flex;
    z-index: 10001;
    position: absolute;
    right: 1rem;
    top: 1.25rem;
  }
}
@media (min-width: 900.1px) {
  .hamburger {
    display: none !important;
  }
  .menu {
    display: flex !important;
    position: static !important;
    flex-direction: row !important;
    gap: 0 !important;
    padding: 0 !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    align-items: center !important;
    justify-content: space-evenly !important;
  }
}
</style>