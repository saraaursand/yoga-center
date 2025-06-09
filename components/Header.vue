<template>
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
// Activities: highlight if we are on /activities or any subpage (e.g., /activities/classes)
const isActivitiesActive = computed(() => route.path.startsWith('/activities'))
// Teachers: highlight if we are on /teachers or any subpage (e.g., /teachers/profile)
const isTeachersActive = computed(() => route.path.startsWith('/teachers'))
</script>

<style scoped>
.header {
  background-color: var(--C02);
  padding: 0;
  font-size: var(--MENU);
  font-family: var(--FONT);
  position: relative;
  z-index: 1;
  width: 100%;
}

/* Spread logo and menu links over the entire width */
.header-inner {
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 18px; /* a bit of space before the logo */
  padding-right: 0;
  box-sizing: border-box;
  min-width: 0;
  height: 100%;
  position: relative;
}

/* Logo at far left */
.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: 0;
  margin-right: 0;
}

.logo img {
  width: 54px;   /* bigger, but still balanced */
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

/* Hamburger menu hidden on desktop */
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

@media (max-width: 900px) {
  .header-inner {
    padding-left: 10px; /* a bit of space before the logo on mobile */
    padding-right: 0.4rem;
    max-width: 100vw;
    height: 64px;
  }
  .header {
    height: 64px;
  }
  .logo {
    margin-left: 0;
  }
  .logo img {
    width: 40px;   /* slightly bigger than before for mobile */
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