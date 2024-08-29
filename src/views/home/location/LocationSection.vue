<script lang="ts" setup>
import TitleSecCompo from '@components/text/TitleSecCompo.vue';
import AddressMapCompo from './AddressMapCompo.vue';
</script>

<template>
  <div class="location-section">
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