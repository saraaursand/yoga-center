<template>
  <div>
    <img
      v-if="classItem && classItem.pic"
      :src="classItem.pic"
      alt="Class Image"
      class="class-image"
    />
    
    <div style="margin-top: 2rem; margin-left: 2rem; ">
      <Breadcrumbs :crumbs="breadcrumbs" />
    </div>
    <div v-if="cameFromHighlights" style= "margin-top: 1rem; margin-left: 2rem;">
      <NuxtLink
        to="/highlights"
        class="text-sm text-gray-600 hover:text-black hover:underline"
      >
        ← Back to highlights
      </NuxtLink>
    </div>

    <h1 v-if="pending">Loading...</h1>
    <h1 class="name" v-else>
      {{ classItem && classItem.name ? classItem.name : "Seminar not found" }}
    </h1>
    <DescriptionCard
      v-if="classItem"
      :header="`${classItem.time} - ${classItem.level}`"
      :description="classItem.description"
    />
    <div v-if="teachers && teachers.length && classItem" class="info-row">
      <WhoCard v-if="teachers && teachers.length" :teachers="teachers" :fromActivity="classItem?.name" />
      <WhenCard :date="classItem.when" :time="classItem.time" />
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
const cameFromHighlights = computed(() => route.query.from === 'highlights');
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

const { data: teachers } = await useAsyncData("teachersForClass", () =>
  classItem.value && classItem.value.name
    ? $fetch("/api/teacher/byActivity", {
        params: { name: classItem.value.name },
      })
    : []
);

const breadcrumbs = computed(() => [
  { name: 'Home ', link: '/' },
  { name: ' Activites ', link: '/activities' },
  { name: ' Our classes ', link: '/activities/classes' },
  { name: classItem.value?.name || 'Laster...', link: route.fullPath }
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
