<template>
  <NuxtLink :to="activityLink" class="highlight-link">
    <div class="highlight-card">
      <h2 class="highlight-name">{{ name }}</h2>
      <img :src="pic" :alt="name" class="highlight-pic" />
    </div>
  </NuxtLink>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: String,
  pic: String,
  type: String, // expects "class" or "seminar"
});

// Compute the link based on activity type and name
const activityLink = computed(() => {
  if (props.type === "class") {
    return `/activities/classes/${encodeURIComponent(props.name)}`;
  } else if (props.type === "seminar") {
    return `/activities/seminars/${encodeURIComponent(props.name)}`;
  }
  return "#";
});
</script>

<style scoped>
.highlight-link {
  text-decoration: none;
  color: inherit;
}
.highlight-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  transition: transform 0.15s;
}
.highlight-card:hover {
  transform: scale(1.04);
}
.highlight-name {
  margin-bottom: 1rem;
  text-align: center;
  font-size: var(--SUBHEADER);
  color: var(--C06);
  font-weight: bold;
}
.highlight-pic {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  background: #fff;
}
</style>
