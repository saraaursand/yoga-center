<template>
  <div>
    <h1>{{ seminarData?.name || "Seminar not found" }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { $supabase } = useNuxtApp();
const seminarData = ref(null);

async function fetchClass() {
  const { data, error } = await $supabase
    .from("activities")
    .select("*")
    .eq("type", "seminar")
    .eq("name", route.params.name)
    .single();
  if (!error) {
    seminarData.value = data;
  }
}

onMounted(() => {
  fetchClass();
});
</script>
