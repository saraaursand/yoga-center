<template>
  <div class="info-card">
    <div class="info-header">{{ header || "WHO" }}</div>
    <div class="info-content responsibility-content">
      <div class="responsibility-list">
        <NuxtLink
          v-for="item in responsibilities"
          :key="item.id"
          :to="getLink(item)"
          class="responsibility-item"
        >
          <img :src="item.pic" alt="Person" class="responsibility-img" />
          <div class="responsibility-name">{{ item.name }}</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  responsibilities: {
    type: Array,
    required: true,
    default: () => [],
  },
  linkType: {
    type: String,
    default: "teacher",
  },
  header: {
    type: String,
    default: "WHO",
  },
  // Name of the activity this teacher was linked from (used for back-navigation)
  fromActivity: {
  type: String,
  default: null
  },
   // Type of the activity ("class" or "seminar")
  fromActivityType: {
  type: String,
  default: null,
  },
  fromTeacher: {
  type: String,
  default: null
  },
  fromTeacherType: {
    type: String,
    default: null
  }
});

// Returns the correct link for each teacher or activity
function getLink(item) {
   if (props.linkType === "activity") {
    const type = item.type === "seminar" || props.fromTeacherType === "seminar" ? "seminars" : "classes";
    let base = `/activities/${type}/${encodeURIComponent(item.name)}`;

    // Add query param to enable back-navigation
    if (props.fromTeacher) {
      base += `?fromTeacher=${encodeURIComponent(props.fromTeacher)}`;
    }
    return base;
  }
  // Default: link to teacher page
  let base = `/teachers/${encodeURIComponent(item.name)}`;
  // Add query parameters for back-navigation
  if (props.fromActivity) {
    base += `?fromActivity=${encodeURIComponent(props.fromActivity)}`;
    if (props.fromActivityType) {
      base += `&fromActivityType=${encodeURIComponent(props.fromActivityType)}`;
    }
  }
  return base;
}

</script>

<style scoped>
.info-card {
  margin-left: var(--WIDGET-GAP);
  margin-right: var(--WIDGET-GAP);
  margin-bottom: 2rem;
  border-radius: 16px;
  overflow: hidden;
  font-family: var(--FONT, Georgia, serif);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  background: var(--C03, #96ae93);
  width: 100%;
  max-width: var(--INFO-CARD-MAX-WIDTH);
  min-width: var(--INFO-CARD-MIN-WIDTH);
  display: flex;
  flex-direction: column;
}

.info-header {
  background: var(--C01, #72936e);
  color: var(--C05, #fff);
  font-size: var(--MENU, 24px);
  font-weight: bold;
  padding: 1rem 2rem;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  text-align: center;
  letter-spacing: 1px;
}

.info-content.responsibility-content {
  background: var(--C02, #84a181);
  color: var(--C06, #000);
  font-size: var(--DESCRIPTION, 24px);
  padding: 2rem;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.responsibility-list {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

.responsibility-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: transform 0.1s;
}

.responsibility-item:hover {
  transform: scale(1.04);
}

.responsibility-img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  background: #fff;
}

.responsibility-name {
  font-size: var(--DESCRIPTION, 24px);
  margin-top: 0.5rem;
  text-align: center;
}
</style>
