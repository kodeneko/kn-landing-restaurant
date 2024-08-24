<script lang="ts" setup>
defineProps<{
  selected: string;
  opts: {
    id: string;
    label: string;
    href: string;
  }[]
}>();
defineEmits<{
  click: [id: string]
}>();
</script>

<template>
  <ul class="menu-main">
    <li
      v-for="opt in opts"
      :key="opt.id"
      :on-click="$emit('click', opt.id)"  
    >
      <a 
        :class="{opt: true, selected: selected === opt.id}"
        :href="opt.href" 
      >{{ opt.label }}
      </a>
    </li>
  </ul>
</template>

<style lang="less" scoped>
@import 'global.less';

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