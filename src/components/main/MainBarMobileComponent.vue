<script lang="ts" setup>
import TitleCompo from '@components/title/TitleCompo.vue';
import BtnIconCompo from '@components/btn/BtnIconCompo.vue';
import useUserStore from '@store/User';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

const userStore = useUserStore();
const { setMenuOpen } = userStore;
const { isMenuOpen } = storeToRefs(userStore);

function btnMenuClick() {
  setMenuOpen(!isMenuOpen.value);
}

watch(
  isMenuOpen,
  (isOpen) => {
    document.body.classList.toggle('no-scroll', isOpen);
  }
);
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