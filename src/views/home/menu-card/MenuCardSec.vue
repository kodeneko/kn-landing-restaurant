<script lang="ts" setup>
import CardDishCompo from '@components/card/CardDishCompo.vue';
import MenuNavCompo from '@components/menu/MenuNavCompo.vue';
import TitleSecCompo from '@components/text/TitleSecCompo.vue';
import { restDefaultSelOpt, restMenu } from '@globals/menu';
import { Sections } from '@globals/sections';
import { MenuOpt, Opt } from '@models/user';
import { AnimatePresence, motion as m } from "motion-v";
import useUserStore from '@store/User';
import { onMounted, ref } from 'vue';

const userStore = useUserStore();
const sectionRef = ref<HTMLElement | null>(null);
onMounted(() => {
  userStore.setRef(Sections.Menu, sectionRef.value as HTMLElement);
})

const selected = ref<MenuOpt>(restDefaultSelOpt);

const handleClickOpt = (opt: MenuOpt) => {
  selected.value = opt
}
</script>

<template>
  <div ref="sectionRef">
    <m.div 
      class="menu-card-sec"
      :initial="{
        opacity: 0
      }"
      :while-in-view="{
        opacity: 1
      }"
      :inViewOptions="{ once: true, amount: 'some' }"
      :transition="{
        delay: 0.3,
        duration: 0.7
      }"
    >
      <TitleSecCompo>Menu</TitleSecCompo>
      <div class="menu-wrap">
        <MenuNavCompo 
          :selected="selected" 
          :opts="restMenu"
          @click="handleClickOpt"
        />
      </div>
      <ul class="gallery">
        <AnimatePresence>
          <m.li 
            v-for="dish in selected.dishes"
            :key="dish.id"
            class="gallery"
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :exit="{ opacity: 0 }"
          >
            <CardDishCompo 
              :dish="dish" 
              symbol="€" 
            />
          </m.li>
        </AnimatePresence>
      </ul>
    </m.div>
  </div>

</template>

<style lang="less" scoped>
@import url('global.less');

.menu-card-sec {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 2.5rem;

  .menu-wrap {
    overflow-x: hidden;
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    column-gap: 60px;
    row-gap: 40px;

    li {
      flex-basis: 250px;
    }
  }
}

@media @mediaTablet, @mediaMobile {

  .menu-card-sec {

    .gallery {
      flex-wrap:nowrap;
    }
  }

}
</style>