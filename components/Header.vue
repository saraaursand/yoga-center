<template>
    <header class="header">
      <div>
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
    background-color: var(--C03);
    padding: 0.05rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: var(--MENU);
    color: var(--C06);
    gap: 2rem;
  }
  
  .header img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .menu {
    display: flex;
    gap: 1.5rem;
  }
  
  .menu a {
    text-decoration: none;
    color: var(--C06);
    font-family: var(--FONT);
  }
  </style>
  