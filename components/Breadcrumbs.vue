<template>
 <!-- Breadcrumb navigation component -->
 <nav aria-label="breadcrumb" class="text-sm text-gray-700 mt-8 mb-6 ml-6">
    <div class="flex flex-wrap items-center space-x-2">
      <!-- Loop through breadcrumb items -->
      <template v-for="(crumb, index) in crumbs" :key="index">
        <!-- If not the last item, render as link -->
        <NuxtLink
          v-if="index !== crumbs.length - 1"
          :to="crumb.link"
          class="text-gray-700 hover:text-black no-underline"
        >
          {{ crumb.name }}
        </NuxtLink>

        <!-- If last item, render as bold underlined text -->
        <span v-else style="color: black; font-weight: 500; border-bottom: 2px solid #000;">{{ crumb.name }}</span>
        <!-- Add separator (slash) between items except after the last -->
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