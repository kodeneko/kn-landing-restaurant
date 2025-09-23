<script lang="ts" setup>
import pic from '@assets/pics/rider.png'
import BtnCompo from '@components/btn/BtnCompo.vue';
import { useMediaMobile } from '@hooks/useMedia';
import { motion as m, stagger } from "motion-v";

const isMobile = useMediaMobile();
const sizeBtns = () => isMobile ? 'sm' : 'md';

const varFather = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: stagger(0.5, { startDelay: 0.3 }) },
  }
};
const varChild = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};
</script>

<template>
  <div class="delivery-section">
    <m.div 
      class="left"
      :initial="{
        opacity: 0,
        x: -100
      }"
      :while-in-view="{
        opacity: 1,
        x: 0
      }"
      :inViewOptions="{ once: true, amount: 'some' }"
      :transition="{
        delay: 0.3,
        duration: 0.7
      }"
    >
      <img 
        class="pic" 
        :src="pic" 
      />
    </m.div>
    <m.div 
      class="right" 
      while-in-view="show" 
      initial="hidden" 
      :variants="varFather" 
      :inViewOptions="{ once: true, amount: 'some' }"
    >
      <m.h2 
        class="title"
        :variants="varChild"
      >
        Delivery Available!
      </m.h2>
      <m.div 
        class="actions"
        :variants="varChild"
      >
        <BtnCompo 
          label="Just Eat" 
          icon="fa-solid fa-house" 
          :size="sizeBtns()" 
          :full="true" 
        />
        <BtnCompo 
          label="Uber Eats" 
          icon="fa-solid fa-motorcycle" 
          :size="sizeBtns()" 
          :full="true"  
        />
      </m.div>
    </m.div>
  </div>
</template>

<style lang="less" scoped>
@import url("global.less");

.delivery-section {
  display: flex;
  background-color: @c-white-trans;
  padding: 40px;
  justify-content: center;

  .left {

    .pic {
      max-width: 480px;
      width: 100%;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 40px;
    flex-basis: content;

    .title {
      text-align: center;
      font-size: 72px;
      font-weight: bold;
      width: min-content;
    }

    .actions {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 320px;
    }
  }
}

@media @mediaTablet, @mediaMobile {
  .delivery-section {
    padding: 20px;
    flex-direction: column-reverse;    
    align-items: center;

    .right {
      .title {
      font-size: 46px;
    }
    }

  }
} 
</style>