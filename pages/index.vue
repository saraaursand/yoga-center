<template>
  <div class="bg-green-100">
    <!-- Fullskjerm hero wrapper -->
    <div class="relative w-full">
      <!-- Hero bilde -->
      <img
        src="/images/home.png"
        alt="Yoga group"
        class="home-image""
      />

      <!-- Tekstblokk -->
      <div
        class="absolute top-1/2 right-12 transform -translate-y-1/2
               w-[90%] max-w-md bg-white bg-opacity-90 shadow-lg p-6 md:p-8"
      >
        <p class="text-gray-800 text-base md:text-lg leading-relaxed text-center md:text-left">
          Find your balance, strength, and inner peace in a space designed for mindfulness and movement.
          Whether you're new to yoga or deepening your practice, our classes offer a sanctuary to breathe,
          flow, and grow. Join our warm and welcoming community and experience the transformative power of yoga.
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
  width: 100vw;
  min-width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  overflow: hidden;
  position: relative;
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

</style>