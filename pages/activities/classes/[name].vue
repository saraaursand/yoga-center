<template>
  <div>
    <img
      v-if="classItem && classItem.pic"
      :src="classItem.pic"
      alt="Class Image"
      class="class-image"
    />

    <!-- Breadcrumb navigation -->
    <div style="margin-top: 2rem; margin-left: 2rem">
      <Breadcrumbs :crumbs="breadcrumbs" />
    </div>

     <!-- Back link to highlights if user came from that page -->
    <div v-if="cameFromHighlights" style="margin-top: 1rem; margin-left: 2rem">
      <NuxtLink
        to="/highlights"
        class="text-sm text-gray-600 hover:text-black hover:underline"
      >
        ← Back to Highlights
      </NuxtLink>
    </div>

    <!-- Loading state -->
    <h1 v-if="pending">Loading...</h1>
    <h1 class="name" v-else>
      {{ classItem && classItem.name ? classItem.name : "Seminar not found" }}
    </h1>

    <!-- Main class description -->
    <DescriptionCard
      v-if="classItem"
      :header="`${classItem.time} - ${classItem.level}`"
      :description="classItem.description"
    />
    
    <!-- Teacher(s) and date/time info -->
    <div v-if="responsibilities && responsibilities.length && classItem" class="info-row">
      <ResponsibilityCard
        v-if="responsibilities && responsibilities.length"
        :responsibilities="responsibilities"
        :fromActivity="classItem?.name"
        :fromActivityType="'class'"
      />
      <ShortTextCard 
        :primaryText="classItem.when" 
        :secondaryText="classItem.time" 
      />
    </div>
  </div>
</template>

<script setup>
import { useAsyncData, useRoute } from "nuxt/app";
import { computed } from "vue";
import DescriptionCard from "~/components/DescriptionCard.vue";
import ResponsibilityCard from "~/components/ResponsibilityCard.vue";
import ShortTextCard from "~/components/ShortTextCard.vue";

const route = useRoute();

// Check if the user navigated from the highlights page
const cameFromHighlights = computed(() => route.query.from === "highlights");

// Fetch class data by name from the API
const {
  data: classArr,
  pending,
  error,
} = await useAsyncData("class", () =>
  $fetch(`/api/classes/${encodeURIComponent(route.params.name)}`)
);

// The API returns an array, so take the first class if available
const classItem = computed(() =>
  classArr.value && classArr.value.length ? classArr.value[0] : null
);

// Fetch responsibilities for this class using the class name
const { data: responsibilities } = await useAsyncData("teachersForClass", () =>
  classItem.value && classItem.value.name
    ? $fetch("/api/teacher/byActivity", {
        params: { name: classItem.value.name },
      })
    : []
);

// Breadcrumbs for navigation
const breadcrumbs = computed(() => [
  { name: "Home ", link: "/" },
  { name: " Activites ", link: "/activities" },
  { name: " Our classes ", link: "/activities/classes" },
  { name: classItem.value?.name || "Laster...", link: route.fullPath },
]);
</script>

<style scoped>
.class-image {
  width: 100vw;
  min-width: 100vw;
  height: 25vw;
  display: block;
  margin-bottom: 1rem;
  object-fit: cover;
}
.name {
  margin-top: 40px;
  margin-bottom: 24px;
  font-size: var(--HEADER);
  color: var(--C06);
  text-align: center;
  font-weight: bold;
}
.info-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (max-width: 600px) {
  .info-row {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  .info-card {
    width: 85vw;
    min-width: unset;
    max-width: unset;
  }
}
</style>
