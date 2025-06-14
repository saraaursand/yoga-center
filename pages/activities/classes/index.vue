<template>
  <div>
    <!-- Breadcrumb navigation -->
    <div style="margin-top: 2rem; margin-left: 2rem">
      <Breadcrumbs :crumbs="breadcrumbs" />
    </div>
    
    <h1 class="title">Our classes</h1>
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

// Fetch all classes from the API for SSR
const { data: classes } = await useAsyncData("classes", () =>
  $fetch("/api/classes/classesAll")
);

// Breadcrumbs for navigation
const breadcrumbs = computed(() => [
  { name: "Home ", link: "/" },
  { name: " Activites ", link: "/activities" },
  { name: " Our classes "},
]);
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
.title {
  margin-top: 40px;
  margin-bottom: 24px;
  font-size: var(--HEADER);
  color: var(--C06);
  text-align: center;
  font-weight: bold;
}
</style>
