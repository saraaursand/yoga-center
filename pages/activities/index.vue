<template>
  <div>
    <div class="activities-image-wrapper">
      <img
        class="activities-image"
        src="https://urexuitkakjvttquebyb.supabase.co/storage/v1/object/sign/activities-pics/outActivities.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ODFmYjQwZS0wZmI2LTRiY2ItODU1OC1hNzQwNjVmNzk1MTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhY3Rpdml0aWVzLXBpY3Mvb3V0QWN0aXZpdGllcy5wbmciLCJpYXQiOjE3NDk0ODIyODUsImV4cCI6MTc4MTAxODI4NX0.xE44kg2D9GltPewUWIKqL0_4SK5-rRf3c7QGVSxPMR0"
        alt="Our Activities"
      />
    </div>
    <h1 class="title">Our Activities</h1>
    <div class="activity-buttons-row">
      <NuxtLink to="/activities/classes">
        <div
          class="activity-image-btn"
          style="
            background-image: url('https://urexuitkakjvttquebyb.supabase.co/storage/v1/object/sign/activities-pics/classes.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ODFmYjQwZS0wZmI2LTRiY2ItODU1OC1hNzQwNjVmNzk1MTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhY3Rpdml0aWVzLXBpY3MvY2xhc3Nlcy5wbmciLCJpYXQiOjE3NDkyMzI1NjMsImV4cCI6MTc4MDc2ODU2M30.gTVsaFRhKZ_MMIBx8EWSXqhHzniKEjdrD3o9YAmKcik');
          "
        >
          <button class="activity-btn">CLASSES</button>
        </div>
      </NuxtLink>
      <NuxtLink to="/activities/seminars">
        <div
          class="activity-image-btn"
          style="
            background-image: url('https://urexuitkakjvttquebyb.supabase.co/storage/v1/object/sign/activities-pics/seminars.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ODFmYjQwZS0wZmI2LTRiY2ItODU1OC1hNzQwNjVmNzk1MTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhY3Rpdml0aWVzLXBpY3Mvc2VtaW5hcnMucG5nIiwiaWF0IjoxNzQ5MjMyNjE3LCJleHAiOjE3ODA3Njg2MTd9.Bm4NFn0T4rEO3oNJVz7QioW5vPqOFUblaMnBcuipuaw');
          "
        >
          <button class="activity-btn">SEMINARS</button>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.activities-image-wrapper {
  width: 100vw;
  min-width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  overflow: hidden;
  position: relative;
}
.activities-image {
  width: 100vw;
  min-width: 100vw;
  height: 25vw;
  object-fit: cover;
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
}
.activity-buttons-row {
  display: flex;
  gap: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
}
.activity-buttons-row a {
  text-decoration: none;
}
.activity-image-btn {
  width: 100%;
  height: 300px;
  aspect-ratio: 16 / 10;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
}

.activity-btn {
  margin-bottom: 16px;
  padding: 12px 24px;
  background-color: var(--C04);
  font: var(--FONT);
  color: var(--C06);
  border: none;
  border-radius: 6px;
  font-size: var(--SUBHEADER);
  cursor: pointer;
}
.title {
  margin-top: 40px;
  margin-bottom: 24px;
  font-size: var(--HEADER);
  color: var(--C06);
  text-align: center;
  font-weight: bold;
}

@media (max-width: 600px) {
  .activities-image-wrapper {
    height: auto;
  }
  .activity-buttons-row {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .activity-image-btn {
    width: 100%;
    max-width: 95vw;
    aspect-ratio: 16 / 10;
  }
  .activity-btn {
    font-size: 20px;
    width: 80vw;
    max-width: 300px;
  }
}
</style>
