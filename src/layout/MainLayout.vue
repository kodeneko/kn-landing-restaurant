<script lang="ts" setup>
import { useMediaMobile, useMediaTablet } from '@hooks/useMedia';
import MainBarComponent from '../components/main/MainBarComponent.vue';
import MainFooterComponent from '../components/main/MainFooterComponent.vue';
import MainBarMobileComponent from '@components/main/MainBarMobileComponent.vue';
import { motion as m } from "motion-v";
import OverlayComponent from '@components/others/OverlayComponent.vue';
import useUserStore from '@store/User';
import { storeToRefs } from 'pinia';
import { mainMenu } from '@globals/menu';
import MenuMainMobileCompo from '@components/menu/MenuMainMobileCompo.vue';

const userStore = useUserStore();
const { isMenuOpen } = storeToRefs(userStore);
const { setMenuOpen } = userStore;
const isTablet = useMediaTablet();
const isMobile = useMediaMobile();

function handleCloseMenu() {
  setMenuOpen(false);
}
</script>

<template>
  <div class="main-layout">
    <div class="header">
      <MainBarMobileComponent v-if="isTablet || isMobile" />
      <MainBarComponent v-else />
    </div>
    <MenuMainMobileCompo 
      :opts="mainMenu"
      @optClick="handleCloseMenu" 
      @closeClick="handleCloseMenu" 
      :isOpen="isMenuOpen" 
    />
    <OverlayComponent :visible="isMenuOpen" />
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
    z-index: 2;
  }

  .mainCont {
    z-index: 1;
    width: 100%;
    max-width: 1400px;
    position: relative;
    flex-grow: 1;
  }

  .back {
    position: absolute;
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
      max-width: 1400px;
      width: 100%;
      position: relative;
      width: 100%;
      background-color: @c-dark;
    }
  }
}


</style>