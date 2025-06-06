<template>
  <div>
    <h1>OUR CLASSES</h1>
    <div v-for="(activity, idx) in activities" :key="activity.id">
      <NuxtLink
        :to="`/activities/classes/${activity.name}`"
        style="text-decoration: none"
      >
        <IntroCard
          :imgSrc="activity.pic"
          :header="activity.name"
          :description="activity.intro"
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
const activities = ref([]);

async function getClasses() {
  const { data, error } = await $supabase
    .from("activities")
    .select("*")
    .eq("type", "class");
  if (error) {
    console.error("Supabase error:", error);
  }
  activities.value = data || [];
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
