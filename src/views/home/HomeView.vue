<script lang="ts" setup>
import WelcomeSec from './welcome/WelcomeSec.vue'
import MenuCardSec from './menu-card/MenuCardSec.vue'
import LocationSection from './location/LocationSection.vue';
import DeliverySection from './delivery/DeliverySection.vue';
import ContactSection from './contact-section/ContactSection.vue';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import useUserStore from '@store/User';

const route = useRoute()
const store = useUserStore();

onMounted(() => {
  store.scrollToSection(route.path)
})

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