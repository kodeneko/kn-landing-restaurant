<script lang="ts" setup>
import TitleSecCompo from '@components/text/TitleSecCompo.vue';
import AddressMapCompo from './AddressMapCompo.vue';
import { motion as m } from "motion-v";
</script>

<template>
  <div class="location-section">
    <m.div
      :initial="{
        opacity: 0
      }"
      :while-in-view="{
        opacity: 1
      }"
      :inViewOptions="{ once: true, amount: 'some' }"
      :transition="{
        delay: 0.3,
        duration: 0.7
      }"
    >
      <TitleSecCompo :center="true">Location</TitleSecCompo>
    </m.div>
    <m.div 
      class="address"
      :initial="{
        opacity: 0,
        scale: 0
      }"
      :while-in-view="{
        opacity: 1,
        scale: 1
      }"
      :inViewOptions="{ once: true, amount: 'some' }"
      :transition="{
        delay: 0.3,
        duration: 0.7
      }"
    >
      <AddressMapCompo />
    </m.div>
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