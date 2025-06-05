<template>
  <div>
    <h1>Our Activities</h1>
    <div style="display: flex; gap: 16px; margin-top: 20px;  justify-content: center;">
      <NuxtLink to="/activities/classes">
        <button class="activity-btn">CLASSES</button>
      </NuxtLink>
      <NuxtLink to="/activities/seminars">
        <button class="activity-btn">SEMINARS</button>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.activity-btn {
  padding: 12px 24px;
  background-color: var(--C04);
  font: var(--FONT);
  color: var(--C06);
  border: none;
  border-radius: 6px;
  font-size: var(--SUBHEADER);
  cursor: pointer;
}
</style>
