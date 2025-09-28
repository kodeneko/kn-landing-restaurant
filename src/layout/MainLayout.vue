<script lang="ts" setup>
import { useMediaMobile, useMediaTablet } from '@hooks/useMedia';
import MainBarComponent from '../components/main/MainBarComponent.vue';
import MainFooterComponent from '../components/main/MainFooterComponent.vue';
import MainBarMobileComponent from '@components/main/MainBarMobileComponent.vue';
import { motion as m } from "motion-v";

const isTablet = useMediaTablet();
const isMobile = useMediaMobile();
</script>

<template>
  <div class="main-layout">
    <div class="header">
      <MainBarMobileComponent v-if="isTablet || isMobile" />
      <MainBarComponent v-else />
    </div>
    <div class="mainCont">
      <RouterView />
    </div>
    <m.div 
      class="footer"
      :initial="{
        opacity: 0,
        y: 100
      }"
      :while-in-view="{
        opacity: 1
        , y: 0
      }"
      :inViewOptions="{ once: true, amount: 'some' }"
      :transition="{
        delay: 0.3,
        duration: 0.7
      }"
    >
      <div class="cont">
        <MainFooterComponent />
      </div>
    </m.div>
    <div class="back" />
  </div>
</template>

<style scoped lang="less">
.main-layout {
  z-index: 11;
  position: relative;
  background-image: url('back-05.jpg');
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-size: cover;
  background-position: 0 -15rem;
  background-attachment: fixed;
  overflow: hidden;

  .header {
    width: 100%;
    max-width: 1400px;
    z-index: 11;
    position: relative;
  }

  .mainCont {
    width: 100%;
    max-width: 1400px;
    z-index: 11;
    position: relative;
    flex-grow: 1;
  }
  

  .back {
    position: absolute;
    z-index: 10;
    background-color: rgba(23, 13, 9, 0.5);
    backdrop-filter: blur(10px);
    width: 100%;
    height: 100%;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: @c-dark;
    width: 100%;

    .cont {
      z-index: 11;
      max-width: 1400px;
      width: 100%;
      position: relative;
      width: 100%;
      background-color: @c-dark;
    }
  }
}


</style>