<script lang="ts" setup>
import WelcomeSec from './welcome/WelcomeSec.vue'
import MenuCardSection from './menu-card-section/MenuCardSection.vue'
import LocationSection from './location-section/LocationSection.vue'
import DeliverySection from './DeliverySection.vue'
import ContactSection from './contact-section/ContactSection.vue'
</script>

<template>
  <div class="cont">
    <WelcomeSec />
    <MenuCardSection />
    <LocationSection />
    <DeliverySection />
    <ContactSection />
  </div>
</template>

<style lang="less" scoped>
.cont {
  display: flex;
  flex-direction: column;

}
</style>