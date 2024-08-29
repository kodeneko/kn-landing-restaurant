<script lang="ts" setup>
import WelcomeSec from './welcome/WelcomeSec.vue'
import MenuCardSec from './menu-card/MenuCardSec.vue'
import LocationSection from './location/LocationSection.vue';
import DeliverySection from './delivery/DeliverySection.vue';
import ContactSection from './contact-section/ContactSection.vue';
</script>

<template>
  <div class="cont">
    <WelcomeSec />
    <MenuCardSec />
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