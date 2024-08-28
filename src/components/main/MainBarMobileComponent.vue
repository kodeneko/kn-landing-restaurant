<script lang="ts" setup>
import TitleCompo from '@components/title/TitleCompo.vue';
import BtnIconCompo from '@components/btn/BtnIconCompo.vue';
</script>

<template>
  <div class="main-bar-mobile">
    <div class="left">
      <TitleCompo :main-title="true" />
    </div>
    <div class="right">
      <BtnIconCompo 
        icon="fa-solid fa-bars" 
        size="md" 
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import 'global.less';

.main-bar-mobile {
  display: flex;
  align-items: start;
  padding: 20px;

  .left {
    font-size: 8px;
  }

  .right {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }
}
</style>