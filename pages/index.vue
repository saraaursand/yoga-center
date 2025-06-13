<template>
  <div class="bg-green-100">
    <div class="home-wrapper">
      <img
        src="/images/home.png"
        alt="Yoga group"
        class="home-image"
      />

      <div class="home-text-box">
        <h1 class="home-title">WELCOME TO SHATMI MANDIR</h1>
        <p>
          Find your balance, strength, and inner peace in a space designed for mindfulness and movement.
          Whether you're new to yoga or deepening your practice, Shatmi Mandir offers a sanctuary to breathe,
          flow, and grow. Join our warm and welcoming community and experience the transformative power of yoga.
        </p>
        <NuxtLink to="/highlights" class="book-button">
          SEE HIGHLIGHTS
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-wrapper {
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  overflow: hidden;
}

.home-image {
  width: 100vw;
  height: 40vw;
  object-fit: cover;
  object-position: top;
  display: block;
}

/* General styling textbox */
.home-text-box {
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  max-width: 33rem;
  width: 100%;
  color: #111;
  z-index: 10;
  font-size: 1.75rem;
  border-radius: 0.75rem;
  text-align: center;
  
}

.home-title {
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 400;
  font-family: 'Georgia', serif;
}

/* Mobil */
@media (max-width: 767px) {
  .home-text-box {
    position: static;
    margin: 2rem auto 0 auto;
    text-align: center;
    height: 30rem;
    max-width: 80%;
    font-size: 1.5rem;
    line-height: 1.3;
  }

  .home-title {
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-family: 'Georgia', serif;
  }
  .book-button {
    margin-top: 1rem;
    padding: 1rem 2.5rem;
    background-color: #b9c9b7;
    border: none;
    border-radius: 0.375rem;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    font-family: 'georgia', serif;
    text-decoration: none;
    color: #000;
  }
}

/* Desktop */
@media (min-width: 768px) {
  .home-text-box {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    text-align: center;
    line-height: 1.4;
    height:39vw;
    background-color: rgba(255, 255, 255, 0.75);
    
  }

  .book-button {
    margin-top: 2.5rem;
    padding: 1.2rem 2rem;
    background-color: #b9c9b7;
    border: none;
    border-radius: 0.375rem;
    font-weight: 400;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 1.2rem;
    font-family: 'georgia', serif;
    text-decoration: none;
    color: #000;
  }

  .book-button:hover {
  background-color: #84a181; 
}
}
</style>