<script lang="ts" setup>
import TitleCompo from '@components/title/TitleCompo.vue';
import BtnIconCompo from '@components/btn/BtnIconCompo.vue';
import MenuMainMobileCompo from '@components/menu/MenuMainMobileCompo.vue';
import { mainMenu } from '@globals/menu';
import useUserStore from '@store/User';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { isMenuOpen } = storeToRefs(userStore);
const { setMenuOpen } = userStore;

function btnMenuClick() {
  setMenuOpen(!isMenuOpen.value);
}

function handleCloseMenu() {
  setMenuOpen(false);
}

</script>

<template>
  <div class="main-bar-mobile">
    <div class="left">
      <TitleCompo :main-title="true" />
    </div>
    <div class="right">
      <BtnIconCompo 
        icon="fa-solid fa-bars" 
        size="sm" 
        @click="btnMenuClick"
      />
      <MenuMainMobileCompo 
        :opts="mainMenu"
        @optClick="handleCloseMenu" 
        @closeClick="handleCloseMenu" 
        :isOpen="isMenuOpen" 
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-bar-mobile {
  display: flex;
  align-items: start;
  padding: 1.25rem;

  .left {
    font-size: 0.38rem;
  }

  .right {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }
}
</style>