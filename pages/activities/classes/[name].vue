<template>
  <div>
    <h1 v-if="pending">Loading...</h1>
    <h1 v-else>
      {{ classItem && classItem.name ? classItem.name : "Seminar not found" }}
    </h1>
  </div>
</template>

<script setup>
import { useAsyncData, useRoute } from "nuxt/app";
import { computed } from "vue";

const route = useRoute();
const {
  data: classArr,
  pending,
  error,
} = await useAsyncData("class", () =>
  $fetch(`/api/classes/${encodeURIComponent(route.params.name)}`)
);

// The API returns an array, so take the first class if available
const classItem = computed(() =>
  classArr.value && classArr.value.length ? classArr.value[0] : null
);
</script>
