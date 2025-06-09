<template>
  <div>
    <div class="about-us-image-wrapper">
      <img
        class="about-us-image"
        src="/images/aboutus.jpg"
        alt="Mindfulness and Meditation"
      />
    </div>
    <div class="about-us-content-wrapper">
      <h1 class="about-us-header">About us</h1>
      <div class="about-us-subheader-box">
        <h2 class="about-us-subheader">
          At Shanti Mandir, we believe yoga is not just something you do — it's something you live.
        </h2>
      </div>
      <p class="about-us-description">
        Our space was born from a simple idea: to create a calm, inclusive, and soulful sanctuary where people can pause, breathe, and reconnect with their innermost self. Whether you’re here to build strength, release stress, or simply be still—you are welcome, exactly as you are.
        <br /><br />
        We offer a variety of classes for all levels, body types, and intentions. From energizing flows to deeply restorative sessions, our approach honors the wisdom of yogic tradition while embracing the realities of modern life. Each practice is an invitation to return to the present moment, to move with awareness, and to cultivate harmony within and around you.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-us-image-wrapper {
  width: 100vw;
  min-width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  overflow: hidden;
  position: relative;
}
.about-us-image {
  width: 100vw;
  min-width: 100vw;
  height: 25vw;
  object-fit: cover;
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
}

.about-us-content-wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-us-header {
  margin-top: 40px;
  margin-bottom: 24px;
  font-size: var(--HEADER);
  color: var(--C06);
  text-align: center;
  font-weight: bold;
}

.about-us-subheader-box {
  background: var(--C03);
  border-radius: 12px;
  padding: 24px 40px;
  margin-bottom: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
.about-us-subheader {
  font-size: var(--SUBHEADER);
  text-align: center;
  color: var(--C06);
  margin: 0;
  font-weight: 500;
}
.about-us-description {
  font-size: var(--DESCRIPTION);
  color: var(--C06);
  text-align: center;
  margin-bottom: 64px;
  margin-top: 0;
  line-height: 1.5;
  width: 100%;
  box-sizing: border-box;
}

@media (max-width: 900px) {
  .about-us-content-wrapper {
    max-width: 98vw;
    padding: 0 2vw;
  }
  .about-us-subheader-box {
    padding: 18px 4vw;
  }
  .about-us-description {
    padding: 0 2vw;
  }
}

@media (max-width: 600px) {
  .about-us-content-wrapper {
    max-width: 100vw;
    padding: 0 2vw;
  }
  .about-us-header {
    margin-top: 28px;
    margin-bottom: 14px;
  }
  .about-us-subheader-box {
    padding: 12px 2vw;
    margin-bottom: 18px;
  }
  .about-us-description {
    margin-bottom: 36px;
    padding: 0 1vw;
  }
}
</style>