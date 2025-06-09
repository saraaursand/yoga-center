<template>
  <div>
    <h1 v-if="pending">Loading...</h1>
    <h1 v-else>
      {{ teacher && teacher.name ? teacher.name : "Teacher not found" }}
    </h1>
  </div>
</template>

<script setup>
import { useAsyncData, useRoute } from "nuxt/app";
import { computed } from "vue";

const route = useRoute();
const {
  data: teacherArr,
  pending,
  error,
} = await useAsyncData("teacher", () =>
  // Encode name to ensure the API URL is valid
  $fetch(`/api/teacher/${encodeURIComponent(route.params.name)}`)
);

const teacher = computed(() =>
  // The API returns an array of teachers (even when searching by name),
  // so we take the first teacher from the array if available, otherwise return null
  teacherArr.value && teacherArr.value.length ? teacherArr.value[0] : null
);
</script>
