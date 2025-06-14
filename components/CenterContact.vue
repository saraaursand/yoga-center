<template>
  <div class="info-card">
    <div class="info-header">CENTER</div>
    <div class="info-content center-content">
      <div class="center-section">
        <div class="section-title">
            <span class="label">Opening Hours:</span>
        </div>
        <ul class="opening-hours-list">
          <li> <span class = "label">Mon-Fri: </span>{{ monFriOpeningHours }}</li>
          <li> <span class = "label">Saturday: </span>{{ satOpeningHours }}</li>
          <li> <span class = "label">Holidays: </span>{{ holidayOpeningHours }}</li>
        </ul>
      </div>
      <div class="center-section address-section">
        <div class="section-title">
            <span class="label">Address:</span>
        </div>
        <div>{{ streetAddress }}</div>
        <div>{{ postalCode }}</div>
        <div>{{ country }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  monFriOpeningHours: String,
  satOpeningHours: String,
  holidayOpeningHours: String,
  streetAddress: String,
  postalCode: String,
  country: String
});
</script>

<style scoped>
.info-card {
  margin-left: var(--WIDGET-GAP);
  margin-right: var(--WIDGET-GAP);
  margin-bottom: 2rem;
  border-radius: 16px;
  overflow: hidden;
  font-family: var(--FONT, Georgia, serif);
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  background: var(--C03, #96AE93);
  width: var(--INFO-CARD-MAX-WIDTH); /* 100%; */
  max-width: var(--INFO-CARD-MAX-WIDTH); /* var(--INFO-CARD-MAX-WIDTH); */
  min-width: var(--INFO-CARD-MIN-WIDTH); /* var(--INFO-CARD-MIN-WIDTH); */
  height: var(--INFO-CARD-HEIGHT);
  display: flex;
  flex-direction: column;
}

.info-header {
  background: var(--C01, #72936E);
  color: var(--C05, #fff);
  font-size: var(--SUBHEADER, 2.5rem);
  font-weight: bold;
  padding: 1rem 2rem;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  text-align: center;
  letter-spacing: 1px;
}

.info-content.center-content {
  background: var(--C02, #84A181);
  color: var(--C06, #000);
  font-size: var(--DESCRIPTION, 1.5rem);
  padding: 2.5rem 2rem 2rem 2rem;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
}

.center-section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
}

.opening-hours-list {
  margin: 0 0 0 1.5rem;
  padding: 0;
  list-style-type: disc;
  font-size: 1.3rem;
}

.address-section > div:not(.section-title) {
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
}

.address-section {
  margin-bottom: 0;
}

.label {
  font-weight: bold;
}
</style>