<template>
    <header class="header">
      <div class="logo">
        <img :src="logo" alt="Yoga logo" />
      </div>
      <nav class="menu">
        <a href="/">Home</a>
        <a href="/highlights">Highlights</a>
        <a href="/activities">Activities</a>
        <a href="/teachers">Our teachers</a>
        <a href="/about">About us</a>
        <a href="/contact">Contact us</a>
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
    gap: 4rem; /* Increased spacing between buttons */
  }
  
  .menu a {
    text-decoration: none;
    color: var(--C05);       /* White color */
    text-transform: uppercase;
    transition: color 0.3s ease;
  }
  
  .menu a:hover {
    color: var(--C01);       /* Optional hover effect */
  }
  </style>
  