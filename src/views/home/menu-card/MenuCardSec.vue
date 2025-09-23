<script lang="ts" setup>
import CardDishCompo from '@components/card/CardDishCompo.vue';
import MenuNavCompo from '@components/menu/MenuNavCompo.vue';
import TitleSecCompo from '@components/text/TitleSecCompo.vue';
import { restDefaultDishes } from '@globals/dish';
import { restDefaultSelOpt, restMenu } from '@globals/menu';
import Dish from '@models/Dish';
import { Opt } from '@models/user';
import { ref } from 'vue';
import { motion as m } from "motion-v";

const selected = ref<Opt>(restDefaultSelOpt as Opt);
const dishes = ref<Dish[]>(restDefaultDishes)

</script>

<template>
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
        :click="(opt: Opt) => selected = opt"
      />
    </div>
    <ul class="gallery">
      <li 
        v-for="dish in dishes"
        :key="dish.id"
        class="gallery"
      >
        <CardDishCompo 
          :dish="dish" 
          symbol="€" 
        />
      </li>
    </ul>
  </m.div>
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