<template>
  <div>
    <div class="contact-us-image-wrapper">
      <img
        class="contact-us-image"
        src="/images/contactUs.png"
      />
    </div>
    <div class="contact-us-content-wrapper">
      <h1 class="contact-us-header">Contact Us</h1>
      <div class="contact-cards-row">
        <ReceptionCard 
          openingHours="08:00 - 16:00"
          phoneNumber="+12 34 56 78 90"
          mailAddress="reception@yogacenter.com"
        />
        <CenterCard
          monFriOpeningHours="07:00 - 22:00"
          satOpeningHours="10:00 - 18:00"
          holidayOpeningHours="Closed"
          streetAddress="Via Andrea Maria Ampère, 2"
          postalCode="20133 Milano MI"
          country="Italy"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ReceptionCard from '~/components/ReceptionCard.vue'
import CenterCard from '~/components/CenterCard.vue'
</script>

<style scoped>
.contact-us-image-wrapper {
  width: 100vw;
  min-width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  overflow: hidden;
  position: relative;
}
.contact-us-image {
  width: 100vw;
  min-width: 100vw;
  height: 40vw;
  object-fit: cover;
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
}

.contact-us-content-wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-us-header {
  margin-top: 40px;
  margin-bottom: 24px;
  font-size: var(--HEADER);
  color: var(--C06);
  text-align: center;
  font-weight: bold;
}

.contact-cards-row {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

@media (max-width: 600px) {
  .contact-cards-row {
    flex-direction: column;
    gap: 1.5rem;
    align-items: stretch;
  }
  .info-card {
    width: 95vw !important;
    min-width: 95vw !important;
    max-width: 95vw !important;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>