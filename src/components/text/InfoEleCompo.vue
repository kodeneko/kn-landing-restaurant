<script lang="ts" setup>
defineProps<{
  label: string;
  info: string
}>()
</script>

<template>
  <div class="info-ele-compo">
    <div class="label">
      {{ label }}
    </div>
    <div class="info">
      {{ info }}
    </div>
  </div>
</template>

<style lang="less" scoped>
@import 'global.less';

.info-ele-compo {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  .label {
    text-transform: uppercase;
    font-size: 1.13rem;
  }
  .info {
    font-weight: bold;
    font-size: 1.38rem;
  }
}
</style>