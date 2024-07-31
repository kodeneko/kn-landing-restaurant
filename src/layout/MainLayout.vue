<script lang="ts" setup>
import MainBarComponent from '../components/MainBarComponent.vue';
import MainFooterComponent from '../components/MainFooterComponent.vue';
</script>

<template>
  <div class="mainLayoutCont">
    <div class="header"><MainBarComponent></MainBarComponent></div>
    <div class="mainCont"><RouterView /></div>
    <div class="footer"><MainFooterComponent /></div>
  </div>
</template>

<style scoped lang="less">
.mainLayoutCont {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .header {

  }

  .mainCont {
    flex-grow: 1;
  }

  .footer {

  }
}


</style>