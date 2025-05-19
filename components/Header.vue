
<template>
    <header class="header">
      <div>
        <img src="/logo.png" alt="Yoga logo" />
      </div>
      <nav class="menu">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/classes">Classes</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  </template>
  
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
  