<script lang="ts" setup>
defineProps<{
  icon: string;
  size?: "lg" | "md" | "sm";
}>();
defineEmits<{
  click
}>();
</script>

<template>
  <button
    :class="[
      'btn',
      size ?? 'md'
    ]"
    :on-click="$emit('click')"
  >
    <fai 
      class="icon"
      :icon="icon" 
    />
  </button>
</template>

<style lang="less" scoped>
@import 'global.less';

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  color: @c-light;
  background-color: @c-red;

  &.lg {
    border-radius: 2.5rem;
    font-size: 4rem;
    height: 7.5rem;
    width: 7.5rem;
  }

  &.md {
    border-radius: 1.25rem;
    font-size: 2.63rem;
    height: 5rem;
    width: 5rem;
  }

  &.sm {
    border-radius: 0.63rem;
    font-size: 1.75rem;
    height: 3.38rem;
    width: 3.38rem;
  }
}
</style>