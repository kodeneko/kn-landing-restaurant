<script lang="ts" setup>
defineProps<{
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
    <li class="opt" v-for="opt in opts" :key="opt.id">
      <a :href="opt.href" >{{ opt.label }}</a>
    </li>
  </ul>
</template>

<style lang="less" scoped>
@import 'global.less';

.menu-main {
  display: flex;
  gap: 60px;
  .opt a {
    color: @c-light;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>