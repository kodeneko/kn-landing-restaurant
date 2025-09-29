<script lang="ts" setup>
import TitleCompo from '@components/title/TitleCompo.vue';
import BtnIconCompo from '@components/btn/BtnIconCompo.vue';
import MenuMainMobileCompo from '@components/menu/MenuMainMobileCompo.vue';
import { mainMenu } from '@globals/menu';
import { ref } from 'vue';

const isOpen = ref<boolean>(false);

function btnMenuClick() {
  isOpen.value = !isOpen.value
}

function btnCloseClick() {
  isOpen.value = false
}

function optionClick(opt: string) {
  console.log('click', opt)
  isOpen.value = false
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
        @optClick="optionClick" 
        @closeClick="btnCloseClick" 
        :isOpen="isOpen" 
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