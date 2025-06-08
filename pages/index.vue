<template>
  <div class="bg-green-100">
    <!-- Fullskjerm hero wrapper -->
    <div class="home-image-wrapper">
      <img
        src="/images/home.png"
        alt="Yoga group"
        class="home-image"
      />

    <div class="home-content-wrapper">
      <div class="home-subheader-box">
        <h2 class="home-subheader">
          Find your balance, strength, and inner peace in a space designed for mindfulness and movement.
          Whether you're new to yoga or deepening your practice, our classes offer a sanctuary to breathe,
          flow, and grow. Join our warm and welcoming community and experience the transformative power of yoga.
        </h2>
      </div>
    </div>
        <div>
        <p class="text-gray-800 text-base md:text-lg leading-relaxed text-center md:text-left">
          Find your balance
        </p>
        <div class="flex justify-center md:justify-start">
          <button
            class="mt-6 bg-green-300 hover:bg-green-400 text-black font-semibold py-2 px-6 rounded shadow"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-image-wrapper {
  position: relative;
  width: 100vw;
  overflow: hidden;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);  
}

.home-image {
  width: 100vw;
  min-width: 100vw;
  height: 40vw;
  object-fit: cover;
  object-position: top; 
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  
}

.home-content-wrapper {
  position: absolute;
  top: 50%;
  right: 1.5rem; /* = Tailwind's right-6 */
  transform: translateY(-50%);
  width: 90%;
  max-width: 28rem; /* = Tailwind's max-w-md */
  background-color: rgba(255, 255, 255, 0.9); /* bg-white + opacity */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Tailwind's shadow-lg */
  padding: 1.5rem; /* Tailwind's p-6 */
  z-index: 10;
}
.home-subheader-box {
  background: var(--C03);
  border-radius: 12px;
  padding: 24px 40px;
  margin-bottom: 32px;
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
.home-subheader {
  font-size: var(--SUBHEADER);
  text-align: center;
  color: var(--C06);
  margin: 0;
  font-weight: 500;
}

@media (max-width: 767px) {
  .text-box {
    margin-top: 2rem; /* gir luft mellom bildet og boksen på mobil */
    position: static; /* sørger for at den IKKE er absolute */
    transform: none;
    top: auto;
    right: auto;
  }
}
</style>