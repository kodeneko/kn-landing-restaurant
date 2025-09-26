<script lang="ts" setup>
import { Opt } from '@models/user';

defineProps<{
  selected: Opt;
  opts: Opt[]
}>();
defineEmits<{
  click: [opt: Opt]
}>();
</script>

<template>
  <ul class="menu-main">
    <li
      v-for="opt in opts"
      :key="opt.id"
      :on-click="$emit('click', opt)"  
    >
      <RouterLink 
        :class="{opt: true, selected: selected.id === opt.id}"
        :to="opt.href as string" 
      >{{ opt.label }}
      </RouterLink>
    </li>
  </ul>
</template>

<style lang="less" scoped>
.menu-main {
  display: flex;
  gap: 20px;
  .opt {
    border-radius: 40px;
    background-color: @c-red-trans;
    color: @c-light;
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px 20px;
    transition: all 0.3s;

    &.selected {
      background-color: @c-red;
    }

    &:hover {
      cursor: pointer;
      background-color: @c-red;
    }
  }
}
</style>