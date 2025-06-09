<template>
  <div>
    <h1 v-if="pending">Loading...</h1>
    <h1 class="name" v-else>
      {{ teacher && teacher.name ? teacher.name : "Teacher not found" }}
    </h1>
    <img
      v-if="teacher && teacher.pic"
      :src="teacher.pic"
      alt="Teacher Image"
      class="teacher-image"
    />
    <DescriptionCard v-if="teacher" header="CV" :description="teacher.CV" />
    <div v-if="activities && activities.length && teacher" class="info-row">
      <WhoCard :teachers="activities" linkType="activity" header="ACTIVITIES" />
      <WhenCard header="ABOUT" :date="teacher.about" :time="''" />
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
const {
  data: teacherArr,
  pending,
  error,
} = await useAsyncData("teacher", () =>
  // Encode name to ensure the API URL is valid
  $fetch(`/api/teacher/${encodeURIComponent(route.params.name)}`)
);

const teacher = computed(() =>
  // The API returns an array of teachers (even when searching by name),
  // so we take the first teacher from the array if available, otherwise return null
  teacherArr.value && teacherArr.value.length ? teacherArr.value[0] : null
);

// Fetch activities (classes/seminars) this teacher is responsible for
const { data: activities } = await useAsyncData("activitiesByTeacher", () =>
  teacher.value && teacher.value.name
    ? $fetch("/api/activities/activityByTeacher", {
        params: { name: teacher.value.name },
      })
    : []
);
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
