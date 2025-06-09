<template>
  <div>
    <h1>OUR CLASSES</h1>
    <div v-for="(classItem, idx) in classes" :key="classItem.id">
      <NuxtLink
        :to="`/activities/classes/${encodeURIComponent(classItem.name)}`"
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
import { useAsyncData } from "nuxt/app";
import IntroCard from "~/components/IntroCard.vue";

// Fetch classes from the API for SSR
const { data: classes } = await useAsyncData("classes", () =>
  $fetch("/api/classes/classesAll")
);
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>
