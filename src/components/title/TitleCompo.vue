<script lang="ts" setup>
import TitleLogoCompo from './TitleLogoCompo.vue';
import TitleLabelCompo from './TitleLabelCompo.vue';

defineProps<{
  mainTitle?: boolean
}>()
</script>

<template>
  <div class="title-compo">
    <div class="logo">
      <TitleLogoCompo />
    </div>
    <h1 v-if="mainTitle" class="main-title">
      <TitleLabelCompo />
    </h1>
    <div v-else class="title">
      <TitleLabelCompo />
    </div>
  </div>
</template>

<style lang="less" scoped>
.title-compo {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>