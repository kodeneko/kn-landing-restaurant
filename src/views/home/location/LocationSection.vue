<script lang="ts" setup>
import TitleSecCompo from '@components/text/TitleSecCompo.vue';
import AddressMapCompo from './AddressMapCompo.vue';
import useUserStore from '@store/User';
import { onMounted, ref } from 'vue';
import { Sections } from '@globals/sections';

const userStore = useUserStore();
const sectionRef = ref<HTMLElement | null>(null);
onMounted(() => {
  userStore.setRef(Sections.Location, sectionRef.value as HTMLElement);
})

</script>

<template>
  <div class="location-section" ref="sectionRef">
    <TitleSecCompo :center="true">Location</TitleSecCompo>
    <div class="address">
      <AddressMapCompo />
    </div>
  </div>
</template>

<style lang="less" scoped>
.location-section {
  display: flex;
  flex-direction: column;
  padding: 40px;
  padding-top: 60px;
  padding-bottom: 120px;
  gap: 60px;

  .address {
    display: flex;
    justify-content: center;
  }
}
</style>