<script lang="ts" setup>
import { Opt } from '@models/user';
import { motion as m } from "motion-v";
import { onMounted } from 'vue';
import { reactive, ref } from 'vue';

defineProps<{
  selected: Opt;
  opts: Opt[]
}>();
defineEmits<{
  click: [opt: Opt]
}>();

const contRef = ref(null);
const constraints = reactive({ left: 0, right: 0 });

onMounted(() => {
  if (contRef.value) {
    const cont = contRef.value as HTMLElement;
    const widthVisible = cont.clientWidth;
    const widthHidden = cont.scrollWidth;
    constraints.left = -1 *(widthHidden - widthVisible + 50);
    constraints.right = 0;
  }
});
</script>

<template>
  <div 
    class="outer"
    ref="contRef"
  >
    <m.ul 
      class="menuMain"
      :drag="'x'"
      :drag-constraints="constraints"
      :drag-momentum="false"
      :while-tap="{ cursor: 'grabbing' }"
    >
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
    </m.ul>
  </div>
</template>

<style lang="less" scoped>
.outer {
  overflow: hidden;
}

.menuMain {
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