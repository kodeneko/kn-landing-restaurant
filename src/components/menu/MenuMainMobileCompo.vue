<script lang="ts" setup>
import { Menu } from '@models/user';
import { RouterLink } from 'vue-router';
import { motion as m } from "motion-v";

const props = defineProps<{
  opts: Menu,
  isOpen: boolean
}>();

const emit = defineEmits<{
  (e: 'closeClick'): void
  (e: 'optClick', optId: string): void
}>();
</script>

<template>
  <AnimatePresence>
    <m.ul 
      v-if="isOpen"
      class="menu-main-mobile"
      :initial="{
        opacity: 0,
        x: -100
      }"
      :animate="{
        opacity: 1,
        x: 0
      }"
      :transition="{
        delay: 0.3,
        duration: 0.7
      }"
      :exit="{
        opacity: 0,
        x: -100
      }"
    >
      <li class="list-icon" @click="emit('closeClick')">
        <fai class="icon" icon="fa-solid fa-circle-xmark" />
      </li>
      <li 
        class="opt"
        v-for="opt in props.opts"
        :key="opt.id"
        @click="emit('optClick', opt.id)"
      >
        <RouterLink :to="opt.href as string">{{ opt.label }}</RouterLink>
      </li>
    </m.ul>
  </AnimatePresence>
</template>

<style lang="less" scoped>
.menu-main-mobile {
  position:fixed;
  background-color: @c-red;
  min-height: 100vh;
  top: 0;
  left: 0;
  width: 19rem;
  z-index: 101;

  li {
    padding: 1rem 1.5rem;
    border-bottom: 0.1rem solid @c-dark;
    font-size: 1.75rem;

    a {
      color: @c-light;
    }
  }

  .list-icon {
    display: flex;
    justify-content: end;
    padding-bottom: 2rem;
    .icon {
      height: 2.5rem;
    }
  }
}
</style>