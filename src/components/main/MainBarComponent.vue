<script lang="ts" setup>
import TitleCompo from '@components/title/TitleCompo.vue';
import MenuMainCompo from '@components/menu/MenuMainCompo.vue';
import { mainMenu } from '@globals/menu';
</script>

<template>
  <div class="main-bar">
    <div class="left">
      <TitleCompo :main-title="true" />
    </div>
    <div class="right">
      <MenuMainCompo :opts="mainMenu" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import 'global.less';

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