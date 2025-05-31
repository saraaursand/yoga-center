<template>
  <div>
    <h1 >Our Teachers</h1>
    <div v-for="(teacher, idx) in teachers" :key="teacher.id">
      <IntroCard
        :imgSrc="teacher.pic"
        :header="teacher.name"
        :description="teacher.intro"
        :imageRight="idx % 2 === 1"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import IntroCard from "~/components/IntroCard.vue";

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
