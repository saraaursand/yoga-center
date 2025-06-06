<template>
  <div>
    <h1>OUR CLASSES</h1>
    <div v-for="(classItem, idx) in classes" :key="classItem.id">
      <NuxtLink
        :to="`/activities/classes/${classItem.name}`"
        style="text-decoration: none"
      >
        <IntroCard
          :imgSrc="classItem.pic"
          :header="classItem.name"
          :description="classItem.intro"
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
const classes = ref([]);

async function getClasses() {
  const { data, error } = await $supabase
    .from("activities")
    .select("*")
    .eq("type", "class");
  if (error) {
    console.error("Supabase error:", error);
  }
  classes.value = data || [];
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
