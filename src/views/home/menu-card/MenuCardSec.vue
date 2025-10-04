<script lang="ts" setup>
import CardDishCompo from '@components/card/CardDishCompo.vue';
import MenuNavCompo from '@components/menu/MenuNavCompo.vue';
import TitleSecCompo from '@components/text/TitleSecCompo.vue';
import { restDefaultSelOpt, restMenu } from '@globals/menu';
import { Sections } from '@globals/sections';
import { MenuOpt } from '@models/user';
import { AnimatePresence, motion as m } from "motion-v";
import useUserStore from '@store/User';
import { onMounted, reactive, ref, watch } from 'vue';

const x = ref(0);
const contRef = ref(null);
const constraints = reactive({ left: 0, right: 0 });
const userStore = useUserStore();
const sectionRef = ref<HTMLElement | null>(null);
const selected = ref<MenuOpt>(restDefaultSelOpt);

const handleClickOpt = (opt: MenuOpt) => {
  selected.value = opt
}

const updateConstrainst = () => {
  if (contRef.value) {
    const cont = contRef.value as HTMLElement;
    const widthHidden = cont.scrollWidth;
    constraints.left = -1 *(widthHidden );
    constraints.right = 0;
    x.value = 0;
  }
}

function onDrag(event) {
  x.value = event.detail.x
}

watch(selected, () => {
  updateConstrainst();
})

onMounted(() => {
  userStore.setRef(Sections.Menu, sectionRef.value as HTMLElement);
  updateConstrainst()
});
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
      <div class="outer" ref="contRef">
        <m.ul 
          class="gallery" 
          drag="x"
          :animate="{x: x}"
          :drag-constraints="constraints"
          :drag-momentum="false"
          :while-tap="{ cursor: 'grabbing' }"
          @drag="onDrag"
        >
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
        </m.ul>

      </div>

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

  .outer {
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