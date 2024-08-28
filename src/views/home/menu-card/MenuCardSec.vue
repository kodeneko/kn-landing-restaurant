<script lang="ts" setup>
import MenuNavCompo from '@components/menu/MenuNavCompo.vue';
import TitleSecCompo from '@components/text/TitleSecCompo.vue';
import { restDefaultSelOpt, restMenu } from '@globals/menu';
import { Opt } from '@models/user';
import { ref } from 'vue';

const selected = ref<Opt>(restDefaultSelOpt as Opt);

</script>

<template>
  <div class="menu-card-sec">
    <TitleSecCompo>Menu</TitleSecCompo>
    <MenuNavCompo 
      :selected="selected" 
      :opts="restMenu"
      :click="(opt) => selected = opt"
    />
  </div>
</template>

<style lang="less" scoped>
.menu-card-sec {
  display: flex;
  flex-direction: column;
}
</style>