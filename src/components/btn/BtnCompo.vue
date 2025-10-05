<script lang="ts" setup>
defineProps<{
  label: string;
  icon?: string;
  size?: "md" | "sm";
  line?: boolean;
  full?: boolean;
}>();
defineEmits<{
  (e: 'click'): void
}>();
</script>

<template>
  <button
    :class="[
      'btn',
      size ?? 'md',
      line ? 'line' : 'solid',
      full ? 'full' : 'srink'
    ]"
    @click="$emit('click')"
  >
    <span class="label">
      {{ label }}
    </span>
    <span v-if="icon" class="icon-wrap">
      <fai 
        class="icon"
        :icon="icon" 
      />
    </span>
  </button>
</template>

<style lang="less" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: @c-light;
  border-radius: 2.5rem;
  font-weight: bold;
  transition: all .3s;

  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
  }

  &.line {
    border: .13rem solid @c-light;
    background-color: transparent;
  }

  &.solid {
    background-color: @c-red;
  }

  &.md {
    gap: 1.25rem;
    font-size: 1.75rem;
    padding: 1.25rem 2.5rem;
  }

  &.sm {
    gap: 0.63rem;
    font-size: 1.25rem;
    padding: 0.63rem 1.25rem;
  }

  &.full {
    width: 100%;
  }

  &.srink {
    width: auto;
  }

}
</style>