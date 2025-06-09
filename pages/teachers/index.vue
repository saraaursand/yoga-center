<template>
  <div>
    <h1>OUR TEACHERS</h1>
    <div v-for="(teacher, idx) in teachers" :key="teacher.id">
      <NuxtLink :to="`/teachers/${teacher.name}`" style="text-decoration: none">
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

const { data: teachers } = await useAsyncData("teachers", () =>
  $fetch("/api/teachersAll")
);
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>
