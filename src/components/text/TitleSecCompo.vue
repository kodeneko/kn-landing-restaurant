<script lang="ts" setup>
</script>

<template>
  <h2 class="title-sec-compo">
    <slot>Fallback</slot>
  </h2>
</template>

<style lang="less" scoped>
@import 'global.less';

.title-sec-compo {
  font-size: 3.25rem;
  color: @c-light;
  text-transform: uppercase;
  font-weight: bold;
}

@media @mediaTablet, @mediaMobile {
  .title-sec-compo {
    font-size: 2.63rem;
  }
}
</style>