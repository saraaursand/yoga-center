<template>
  <div>
    <!-- Breadcrumb navigation -->
    <div style="margin-top: 2rem; margin-left: 2rem">
      <Breadcrumbs :crumbs="breadcrumbs" />
    </div>
    
    <h1 class="title">Our seminars</h1>
    <div v-for="(seminar, idx) in seminars" :key="seminar.id">
      <NuxtLink
        :to="`/activities/seminars/${encodeURIComponent(seminar.name)}`"
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
import { useAsyncData } from "nuxt/app";
import IntroCard from "~/components/IntroCard.vue";

// Fetch all seminars from the API for server-side rendering
const { data: seminars } = await useAsyncData("seminars", () =>
  $fetch("/api/seminars/seminarsAll")
);

// Breadcrumbs for navigation
const breadcrumbs = [
  { name: " Home ", link: "/" },
  { name: " Activities ", link: "/activities" },
  { name: " Our seminars ", link: "/activities/seminars" },
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
