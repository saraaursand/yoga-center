<template>
  <div>
    <h1>OUR SEMINARS</h1>
    <div v-for="(seminar, idx) in seminars" :key="seminar.id">
      <NuxtLink
        :to="`/activities/seminars/${seminar.name}`"
        style="text-decoration: none"
      >
        <IntroCard
          :imgSrc="seminar.pic"
          :header="seminar.name"
          :description="seminar.intro"
          :imageRight="idx % 2 === 1"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import IntroCard from "~/components/IntroCard.vue";

const { $supabase } = useNuxtApp();
const seminars = ref([]);

async function getClasses() {
  const { data, error } = await $supabase
    .from("activities")
    .select("*")
    .eq("type", "seminar");
  if (error) {
    console.error("Supabase error:", error);
  }
  seminars.value = data || [];
}

onMounted(() => {
  getClasses();
});
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>
