<template>
  <div>
    <h1>OUR SEMINARS</h1>
    <div v-for="(seminar, idx) in seminars" :key="seminar.id">
      <NuxtLink
        :to="`/activities/classes/${seminar.name}`"
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

// Fetch seminars from the API for SSR
const { data: seminars } = await useAsyncData("classes", () =>
  $fetch("/api/classes/classesAll")
);
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>
