<template>
  <div>
    <h1>{{ teacher?.name || "Teacher not found" }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const route = useRoute();
const { $supabase } = useNuxtApp();
const teacher = ref(null);

async function getTeacher() {
  const { data, error } = await $supabase
    .from("teachers")
    .select("*")
    .eq("name", route.params.name)
    .single();
  if (!error) {
    teacher.value = data;
  }
}

onMounted(() => {
  getTeacher();
});
</script>
