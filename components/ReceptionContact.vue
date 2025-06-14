<template>
  <div class="info-card">
    <div class="info-header">RECEPTION</div>
    <div class="info-content reception-content">
      <div class="reception-opening-hours">
        <span class="label">Opening Hours:</span> {{ openingHours }}
      </div>
      <div class="reception-phone-number">
        <span class="label">Tlf.:</span> {{ phoneNumber }}
      </div>
      <div class="reception-mail-address">
        <span class="label">Mail:</span> {{ mailAddress }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  openingHours: String,
  phoneNumber: String,
  mailAddress: String
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

.info-content.reception-content {
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

.reception-opening-hours,
.reception-phone-number,
.reception-mail-address {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  text-align: left;
  font-family: var(--FONT, Georgia, serif);
}

.reception-mail-address {
  margin-bottom: 0;
}

.label {
  font-weight: bold;
}
</style>