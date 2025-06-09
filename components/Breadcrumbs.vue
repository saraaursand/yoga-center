<template>
 <nav aria-label="breadcrumb" class="text-sm text-gray-700 mt-8 mb-6 ml-6">
    <div class="flex flex-wrap items-center space-x-2">
      <template v-for="(crumb, index) in crumbs" :key="index">
        <NuxtLink
          v-if="index !== crumbs.length - 1"
          :to="crumb.link"
          class="text-gray-700 hover:text-black no-underline"
        >
          {{ crumb.name }}
        </NuxtLink>
        <span v-else style="color: black; font-weight: 500; border-bottom: 2px solid #000;">{{ crumb.name }}</span>
        <span v-if="index !== crumbs.length - 1">/</span>
      </template>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  crumbs: {
    type: Array,
    required: true
  }
});
</script>