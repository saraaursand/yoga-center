<template>
  <div>
    <h1>Highlights</h1>
    <ul>
      <li v-for="activity in highlights" :key="activity.id">
        {{ activity.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useAsyncData } from "nuxt/app";

const {
  data: highlights,
  pending,
  error,
} = await useAsyncData("highlights", () =>
  $fetch("/api/activities/highlights")
);
</script>
