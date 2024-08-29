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

  .opt {
    a {
      color: @c-light;
      display: inline-block;
      font-size: 18px;
      font-weight: bold;
      text-transform: uppercase;
      padding: 30px;
      display: inline-block;

      &:hover {
        text-decoration: underline;
        text-decoration-color: @c-light;
        text-underline-offset: 8px;
        text-decoration-thickness: 1px;
      }
    }

    &:first-child a {
      padding-left: 0;
    }

    &:last-child a {
      padding-right: 0;
    }
  }
}
</style>