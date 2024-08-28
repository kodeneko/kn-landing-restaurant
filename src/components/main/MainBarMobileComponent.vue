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
        size="sm" 
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import 'global.less';

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