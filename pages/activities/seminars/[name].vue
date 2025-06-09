<template>
  <div>
    <h1 v-if="pending">Loading...</h1>
    <h1 v-else>
      {{ seminar && seminar.name ? seminar.name : "Seminar not found" }}
    </h1>
  </div>
</template>

<script setup>
import { useAsyncData, useRoute } from "nuxt/app";
import { computed } from "vue";

const route = useRoute();
const {
  data: seminarArr,
  pending,
  error,
} = await useAsyncData("seminar", () =>
  $fetch(`/api/seminars/${encodeURIComponent(route.params.name)}`)
);

// The API returns an array, so take the first seminar if available
const seminar = computed(() =>
  seminarArr.value && seminarArr.value.length ? seminarArr.value[0] : null
);
</script>
