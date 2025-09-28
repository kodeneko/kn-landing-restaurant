<script lang="ts" setup>
import TitleCompo from '@components/title/TitleCompo.vue';
import MenuMainCompo from '@components/menu/MenuMainCompo.vue';
import { mainMenu } from '@globals/menu';
import { motion as m } from "motion-v";
</script>

<template>
  <m.div 
    class="main-bar"
    :initial="{
      opacity: 0,
      y: -50
    }"
    :animate="{
      opacity: 1,
      y: 0
    }"
    :transition="{
      delay: 0.3,
      duration: 0.7
    }"
  >
    <div class="left">
      <TitleCompo :main-title="true" />
    </div>
    <div class="right">
      <MenuMainCompo :opts="mainMenu" />
    </div>
  </m.div>
</template>

<style lang="less" scoped>
.main-bar {
  display: flex;
  align-items: center;
  padding: 40px;
  padding-bottom: 100px;


  .left {
    font-size: 9px;
  }

  .right {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }
}
</style>