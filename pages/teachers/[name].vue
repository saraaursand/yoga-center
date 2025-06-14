<template>
  <div>
    <!-- Breadcrumb navigation -->
    <div style="margin-top: 2rem; margin-left: 2rem">
      <Breadcrumbs :crumbs="breadcrumbs" />
    </div>

    <!-- Back link -->
    <div style="margin-top: 1rem; margin-left: 2rem">
      <NuxtLink
        v-if="fromActivity && fromActivityType"
        :to="`/activities/${fromActivityType  === 'class' ? 'classes' : 'seminars'}/${encodeURIComponent(fromActivity)}`"
        class="text-sm text-gray-600 hover:text-black hover:underline ml-6"
      >
        ← Back to {{ fromActivity }}
      </NuxtLink>
    </div>
    
    <img
      v-if="teacher && teacher.pic"
      :src="teacher.pic"
      alt="Teacher Image"
      class="teacher-image"
    />
    <DescriptionCard v-if="teacher" header="CV" :description="teacher.CV" />
    <div v-if="activities && activities.length && teacher" class="info-row">
      <ResponsibilityCard :responsibilities="activities" linkType="activity" header="ACTIVITIES" :fromTeacher="teacher?.name"/>
      <ShortTextCard header="ABOUT" :primaryText="teacher.about" :secondaryText="''" />
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

// Get the activity name from the query parameter (if coming from an activity page)
const fromActivity = computed(() => route.query.fromActivity);
const fromActivityType = route.query.fromActivityType;

// Fetch teacher data by name from the API
const {
  data: teacherArr,
  pending,
  error,
} = await useAsyncData("teacher", () =>
  // Encode name to ensure the API URL is valid
  $fetch(`/api/teacher/${encodeURIComponent(route.params.name)}`)
);

// The API returns an array, so take the first teacher if available
const teacher = computed(() =>
  teacherArr.value && teacherArr.value.length ? teacherArr.value[0] : null
);

// Fetch activities this teacher is responsible for
const { data: activities } = await useAsyncData("activitiesByTeacher", () =>
  teacher.value && teacher.value.name
    ? $fetch("/api/activities/activityByTeacher", {
        params: { name: teacher.value.name },
      })
    : []
);

// Breadcrumbs for navigation
const breadcrumbs = computed(() => [
  { name: "Home ", link: "/" },
  { name: " Our teachers ", link: "/teachers" },
  { name: teacher.value?.name || "Loading...", link: route.fullPath },
]);
</script>

<style scoped>
.teacher-image {
  display: block;
  margin: 0 auto 2rem auto;
  width: 60vw;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  max-width: unset;
  max-height: unset;
}
.info-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.name {
  margin-top: 40px;
  margin-bottom: 24px;
  font-size: var(--HEADER);
  color: var(--C06);
  text-align: center;
  font-weight: bold;
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
