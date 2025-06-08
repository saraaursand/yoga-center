<template>
  <div class="bg-green-100">
    <div class="hero-wrapper">
      <img
        src="/images/home.png"
        alt="Yoga group"
        class="hero-image"
      />

      <div class="hero-text-box">
        <p>
          Find your balance, strength, and inner peace in a space designed for mindfulness and movement.
          Whether you're new to yoga or deepening your practice, our classes offer a sanctuary to breathe,
          flow, and grow. Join our warm and welcoming community and experience the transformative power of yoga.
        </p>
        <button>
          BOOK NOW
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-wrapper {
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  overflow: hidden;
}

.hero-image {
  width: 100vw;
  height: 40vw;
  object-fit: cover;
  object-position: top;
  display: block;
}

/* Felles stil for tekstboksen */
.hero-text-box {
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  max-width: 33rem;
  width: 100%;
  height: 39vw;
  color: #111;
  z-index: 10;
  font-size: 2rem;
  border-radius: 0.75rem;
  text-align: center;
}

/* Mobil (tekst under bildet) */
@media (max-width: 767px) {
  .hero-text-box {
    position: static;
    margin: 2rem auto 0 auto;
    text-align: center;
  }

  .hero-text-box button {
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #b9c9b7;
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    cursor: pointer;
    
  }
}

/* Desktop (tekst over bildet) */
@media (min-width: 768px) {
  .hero-text-box {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    text-align: center;
    line-height: 1.3;
  }

  .hero-text-box button {
    margin-top: 1.5rem;
    padding: 0.5rem 1.5rem;
    background-color: #b9c9b7;
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .hero-text-box button:hover {
  background-color: #84a181; /* Fargen når musen er over */
}
}
</style>