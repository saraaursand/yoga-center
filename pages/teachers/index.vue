<template>
  <div>
    <h1>Our Teachers</h1>
  </div>
  <ul>
    <li v-for="teacher in teachers" :key="teacher.id">{{ teacher.name }}</li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";

const { $supabase } = useNuxtApp();
const teachers = ref([]);

async function getTeachers() {
  const { data, error } = await $supabase.from("teachers").select("*");
  if (error) {
    console.error("Supabase error:", error);
  }
  teachers.value = data || [];
}

onMounted(() => {
  getTeachers();
});
</script>
