<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { i18next } from './i18n';

const lang = ref(i18next.language);
const updateTitle = () => {
  document.title = i18next.t('webTitle');
};
onMounted(updateTitle);
watch(lang, updateTitle);
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped lang="less">
@import 'global.less';
</style>
