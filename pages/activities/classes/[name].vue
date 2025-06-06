<template>
  <div>
    <h1>{{ classData?.name || "Class not found" }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { $supabase } = useNuxtApp();
const classData = ref(null);

async function fetchClass() {
  const { data, error } = await $supabase
    .from("activities")
    .select("*")
    .eq("type", "class")
    .eq("name", route.params.name)
    .single();
  if (!error) {
    classData.value = data;
  }
}

onMounted(() => {
  fetchClass();
});
</script>
