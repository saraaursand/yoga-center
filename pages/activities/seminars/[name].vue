<template>
  <div>
    <img
      v-if="seminar && seminar.pic"
      :src="seminar.pic"
      alt="Seminar Image"
      class="class-image"
    />
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
      <WhoCard v-if="teachers && teachers.length" :teachers="teachers" />
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
const {
  data: seminarArr,
  pending,
  error,
} = await useAsyncData("seminar", () =>
  $fetch(`/api/seminars/${encodeURIComponent(route.params.name)}`)
);

const seminar = computed(() =>
  seminarArr.value && seminarArr.value.length ? seminarArr.value[0] : null
);

const { data: teachers } = await useAsyncData("teachersForSeminar", () =>
  seminar.value && seminar.value.name
    ? $fetch("/api/teacher/byActivity", {
        params: { name: seminar.value.name },
      })
    : []
);
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
