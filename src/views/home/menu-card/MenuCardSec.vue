<script lang="ts" setup>
import CardDishCompo from '@components/card/CardDishCompo.vue';
import MenuNavCompo from '@components/menu/MenuNavCompo.vue';
import TitleSecCompo from '@components/text/TitleSecCompo.vue';
import { restDefaultDishes } from '@globals/dish';
import { restDefaultSelOpt, restMenu } from '@globals/menu';
import Dish from '@models/Dish';
import { Opt } from '@models/user';
import { ref } from 'vue';

const selected = ref<Opt>(restDefaultSelOpt as Opt);
const dishes = ref<Dish[]>(restDefaultDishes)

</script>

<template>
  <div class="menu-card-sec">
    <TitleSecCompo>Menu</TitleSecCompo>
    <MenuNavCompo 
      :selected="selected" 
      :opts="restMenu"
      :click="(opt: Opt) => selected = opt"
    />
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
  </div>
</template>

<style lang="less" scoped>
.menu-card-sec {
  display: flex;
  flex-direction: column;
}
</style>