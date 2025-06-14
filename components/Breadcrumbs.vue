<template>
  <nav aria-label="breadcrumb" class="text-sm text-gray-700 mt-8 mb-6 ml-6">
    <div class="flex flex-wrap items-center space-x-2">
      <template v-for="(crumb, index) in crumbs" :key="index">
        
        <!-- Render all crumbs except the last one as clickable links -->
        <NuxtLink
          v-if="index !== crumbs.length - 1"
          :to="crumb.link"
          class="text-gray-700 hover:text-black no-underline"
        >
          {{ crumb.name }}
        </NuxtLink>

        <!-- Last crumb (no link) gets bold underline -->
        <span v-else class="breadcrumb-current">
          {{ crumb.name }}
        </span>

        <!-- Slash separator except after last -->
        <span v-if="index < crumbs.length - 1">/</span>
        
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


<style>
  .breadcrumb-current {
    font-weight: 500;
    border-bottom: 2px solid black;
    padding-bottom: 2px;
    color: black;
    line-height: 1.3;
    display: inline-block;
  }
</style>