<template>
  <img
    v-if="seminar && seminar.pic"
    :src="seminar.pic"
    alt="Seminar Image"
    class="class-image"
  />
  <div>
    <div style="margin-top: 2rem; margin-left: 2rem">
      <Breadcrumbs :crumbs="breadcrumbs" />
    </div>
    <div v-if="cameFromHighlights" style="margin-top: 1rem; margin-left: 2rem">
      <NuxtLink
        to="/highlights"
        class="text-sm text-gray-600 hover:text-black hover:underline"
      >
        ← Highlights
      </NuxtLink>
    </div>
    <div style="margin-top: 1rem; margin-left: 2rem">
      <NuxtLink
        v-if="fromActivity"
        :to="`/activities/seminars/${encodeURIComponent(fromActivity)}`"
        class="text-sm text-gray-600 hover:text-black hover:underline"
      >
        ← Back to {{ fromActivity }}
      </NuxtLink>
    </div>
    <h1 v-if="pending">Loading...</h1>
    <h1 class="name" v-else>
      {{ seminar && seminar.name ? seminar.name : "Seminar not found" }}
    </h1>
    <DescriptionCard
      v-if="seminar"
      :header="`${seminar.time} - ${seminar.level}`"
      :description="seminar.description"
    />
    <div v-if="teachers && teachers.length && seminar" class="info-row">
      <WhoCard
        v-if="teachers && teachers.length"
        :teachers="teachers"
        :fromActivity="seminar?.name"
      />
      <WhenCard :date="seminar.when" :time="seminar.time" />
    </div>
  </div>
</template>

<script setup>
import { useAsyncData, useRoute } from "nuxt/app";
import { computed } from "vue";
import DescriptionCard from "~/components/DescriptionCard.vue";
import WhoCard from "~/components/WhoCard.vue";
import WhenCard from "~/components/WhenCard.vue";

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

// Fetch teachers for this seminar using the seminar name
const { data: teachers } = await useAsyncData("teachersForSeminar", () =>
  seminar.value && seminar.value.name
    ? $fetch("/api/teacher/byActivity", {
        params: { name: seminar.value.name },
      })
    : []
);

// Check if the user navigated from the highlights page
const cameFromHighlights = computed(() => route.query.from === "highlights");

// Breadcrumbs for navigation
const breadcrumbs = computed(() => [
  { name: " Home ", link: "/" },
  { name: " Activities ", link: "/activities" },
  { name: " Seminars ", link: "/activities/seminars" },
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
