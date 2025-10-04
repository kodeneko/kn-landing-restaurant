<script setup lang="ts">
import { motion as m, AnimatePresence } from "motion-v";

defineProps<{
  visible: boolean;
}>();
</script>

<template>
  <AnimatePresence>
    <m.div 
      v-if="visible" 
      class="cont"
      :initial="{opacity: 0}"
      :animate="{opacity: 1}"
      :transition="{
        delay: 0.3,
        duration: 0.7
      }"
      :exit="{opacity: 0}"
    ></m.div>
  </AnimatePresence>
</template>

<style lang="less" scoped>
.cont {
  width: 100%;
  min-height: 100vh;
  background-color: @c-dark-trans;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>