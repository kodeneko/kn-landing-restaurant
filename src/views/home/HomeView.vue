<script lang="ts" setup>
import WelcomeSec from './welcome/WelcomeSec.vue'
import MenuCardSec from './menu-card/MenuCardSec.vue'
import LocationSection from './location/LocationSection.vue';
import DeliverySection from './delivery/DeliverySection.vue';
import ContactSection from './contact-section/ContactSection.vue';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { PathList } from '@globals/paths';
import useUserStore, { UserStoreState } from '@store/User';
import { mainMenu } from '@globals/menu';

const route = useRoute()
const store = useUserStore();

function scrollIfMatch(pathname: string) {
  if (PathList.includes(pathname)) {
    const idSection = mainMenu.find(opt => opt.href === pathname)?.id
    if (idSection) store.scrollToSection(idSection as keyof UserStoreState['refSections'])
  }
}

onMounted(() => {
  scrollIfMatch(route.path)
})

watch(() => route.path, (newPath) => {
  scrollIfMatch(newPath)
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