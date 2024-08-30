<script lang="ts" setup>
import { useMotionProperties, useSpring } from '@vueuse/motion';
import { onMounted, ref } from 'vue';

const contEleHTML = ref();
const { motionProperties } = useMotionProperties(contEleHTML, {
  cursor: 'grab',
  x: 0,
  y: 0
});
const { set } = useSpring(motionProperties)
const sizeGal = ref(0);

onMounted(() => {
  sizeGal.value = contEleHTML.value.children[0].offsetWidth
})

const dragHandler = ({offset: [x], dragging }) => {
  if (!dragging) {
    set({ cursor: 'grab' })
    return
  }
  if (x*(-1) >= 0 && x*(-1) <= sizeGal.value) {
    set({cursor: 'grabbing', x})
  }
}

</script>

<template>
  <div 
    class="gallery"
  >
    <div     
      class="gallery-drag"
      ref="contEleHTML"
      v-drag="dragHandler"
    >
      <slot />
    </div>
  </div>
</template>
