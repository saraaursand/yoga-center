<template>
  <div>
    <!-- Breadcrumb navigation -->
    <div style="margin-top: 2rem; margin-left: 2rem">
      <Breadcrumbs :crumbs="breadcrumbs" />
    </div>
    <h1 class="title">Our teachers</h1>
    <!-- List all teachers using IntroCard, alternating image position -->
    <div v-for="(teacher, idx) in teachers" :key="teacher.id">
      <NuxtLink
        :to="`/teachers/${encodeURIComponent(teacher.name)}`"
        style="text-decoration: none"
      >
        <!-- Encode to handle spaces in name -->
        <IntroCard
          :imgSrc="teacher.pic"
          :header="teacher.name"
          :description="teacher.intro"
          :imageRight="idx % 2 === 1"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useAsyncData } from "nuxt/app";
import IntroCard from "~/components/IntroCard.vue";

// Get all teachers from the API for server-side rendering
const { data: teachers } = await useAsyncData("teachers", () =>
  $fetch("/api/teacher/teachersAll")
);

// Breadcrumbs for navigation
const breadcrumbs = [
  { name: "Home ", link: "/" },
  { name: " Our teachers", link: "/teachers" },
];
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
