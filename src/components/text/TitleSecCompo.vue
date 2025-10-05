<script lang="ts" setup>
defineProps<{
  center?: boolean
}>();
</script>

<template>
  <h2 
    :class="[
      'title-sec-compo',
      center && 'center'
    ]"
  >
    <slot>Fallback</slot>
  </h2>
</template>

<style lang="less" scoped>
.title-sec-compo {
  font-size: 3.25rem;
  text-transform: uppercase;
  font-weight: bold;
}

.center {
    text-align: center;
  }

@media @mediaTablet, @mediaMobile {
  .title-sec-compo {
    font-size: 2.63rem;
  }
}
</style>