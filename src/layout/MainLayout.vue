<script lang="ts" setup>
import MainBarComponent from '../components/main/MainBarComponent.vue';
import MainFooterComponent from '../components/main/MainFooterComponent.vue';
</script>

<template>
  <div class="main-layout">
    <div class="header"><MainBarComponent></MainBarComponent></div>
    <div class="mainCont"><RouterView /></div>
    <div class="footer"><MainFooterComponent /></div>
    <div class="back" />
  </div>
</template>

<style scoped lang="less">
@import 'global.less';

.main-layout {
  z-index: 11;
  position: relative;
  background-image: url('back-05.jpg');
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-size: cover;
  background-position: 0 -15rem;
  background-attachment: fixed;

  .back {
    position: absolute;
    z-index: 10;
    background-color: rgba(23, 13, 9, 0.5);
    backdrop-filter: blur(10px);
    width: 100%;
    height: 100%;
  }

  .header {
    z-index: 11;
    position: relative;
  }

  .mainCont {
    z-index: 11;
    position: relative;
    flex-grow: 1;
  }

  .footer {
    z-index: 11;
    position: relative;

  }
}


</style>