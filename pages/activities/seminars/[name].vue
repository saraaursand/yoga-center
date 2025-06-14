<template>
  <img
    v-if="seminar && seminar.pic"
    :src="seminar.pic"
    alt="Seminar Image"
    class="class-image"
  />
  <div>
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

    <!-- Back link to the specific seminar activity if available -->
    <div style="margin-top: 1rem; margin-left: 2rem">
      <NuxtLink
        v-if="fromActivity"
        :to="`/activities/seminars/${encodeURIComponent(fromActivity)}`"
        class="text-sm text-gray-600 hover:text-black hover:underline"
      >
        ← Back to {{ fromActivity }}
      </NuxtLink>
    </div>

    <!-- Loading state -->
    <h1 v-if="pending">Loading...</h1>
    <h1 class="name" v-else>
      {{ seminar && seminar.name ? seminar.name : "Seminar not found" }}
    </h1>

    <!-- Main seminar description -->
    <DescriptionContainer
      v-if="seminar"
      :header="`${seminar.time} - ${seminar.level}`"
      :description="seminar.description"
    />

    <!-- Teacher(s) and date/time info -->
    <div v-if="responsibilities && responsibilities.length && seminar" class="info-row">
      <ResponsibilityCard
        v-if="responsibilities && responsibilities.length"
        :responsibilities="responsibilities"
        :fromActivity="seminar?.name"
        :fromActivityType="'seminar'"
      />
      <ShortTextCard :primaryText="seminar.when" :secondaryText="seminar.time" />
    </div>
  </div>
</template>

<script setup>
// Imports
import { useAsyncData, useRoute } from "nuxt/app";
import { computed } from "vue";
import DescriptionContainer from "~/components/DescriptionContainer.vue";
import ResponsibilityCard from "~/components/ResponsibilityCard.vue";
import ShortTextCard from "~/components/ShortTextCard.vue";

// Current route info
const route = useRoute();

// Fetch seminar data by name from the API
const {
  data: seminarArr,
  pending,
  error,
} = await useAsyncData("seminar", () =>
  $fetch(`/api/seminars/${encodeURIComponent(route.params.name)}`)
);

// The API returns an array, so take the first seminar if available
const seminar = computed(() =>
  seminarArr.value && seminarArr.value.length ? seminarArr.value[0] : null
);

// Fetch responsibilities connected to this seminar using the seminar name
const { data: responsibilities } = await useAsyncData("teachersForSeminar", () =>
  seminar.value && seminar.value.name
    ? $fetch("/api/teacher/byActivity", {
        params: { name: seminar.value.name },
      })
    : []
);

// Detect if user came from highlights page
const cameFromHighlights = computed(() => route.query.from === "highlights");

// Breadcrumbs for navigation
const breadcrumbs = computed(() => [
  { name: " Home ", link: "/" },
  { name: " Activities ", link: "/activities" },
  { name: " Our seminars ", link: "/activities/seminars" },
  { name: seminar.value?.name || "Loading...", link: route.fullPath },
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
