<script lang="ts" setup>
import pic from '@assets/pics/rider.png'
import BtnCompo from '@components/btn/BtnCompo.vue';
import { Sections } from '@globals/sections';
import { useMediaMobile } from '@hooks/useMedia';
import useUserStore from '@store/User';
import { onMounted, ref } from 'vue';

const userStore = useUserStore();
const sectionRef = ref<HTMLElement | null>(null);
onMounted(() => {
  userStore.setRef(Sections.Delivery, sectionRef.value as HTMLElement);
})

const isMobile = useMediaMobile();
const sizeBtns = () => isMobile ? 'sm' : 'md'
</script>

<template>
  <div class="delivery-section" ref="sectionRef">
    <div class="left">
      <div class="shade"></div>
      <div class="line-cont">
        <div class="line01 line"></div>
        <div class="line02 line"></div>
        <div class="line03 line"></div>
      </div>
      <img 
        class="pic" 
        :src="pic" 
      />
    </div>
    <div class="right">
      <h2 class="title">Delivery Available!</h2>
      <div class="actions">
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
      </div>
    </div>
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
    position: relative;
    .pic {
      max-width: 480px;
      width: 100%;

      animation-name: levitation;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-timing-function: linear;
    }

    .shade {
      position: absolute;
      bottom: 0;
      left: calc(50% - 8.5rem);
      width: 20rem;
      height: 1rem;
      border-radius: 50%;
      border: none;
      background-color: @c-dark-trans;
      box-shadow: 0 0 0.3rem 0.3rem @c-dark-trans;
      opacity: 0.7;

      animation-name: shadow;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-timing-function: linear;
    }

    .line-cont {
      position: absolute;
      top: 40%;
      left: -30rem;
    }

    .line {
      position: relative;
      width: 30rem;
      height: 0.3rem;
      background-color: @c-white-trans;
      border-radius: 50%;

      animation-name: lines;
      animation-duration: 0.7s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-timing-function: linear;
    }

    .line01 {
      position: relative;
      top: -3rem;
      left: 0rem;
    }

    .line02 {
      position: relative;
      top: 1rem;
      left: 10rem;
      animation-delay: -2s;
    }

    .line03 {
      position: relative;
      top: 6rem;
      left: 4rem;
      animation-delay: -4s;
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

@keyframes levitation {
  0% {
    transform: translateY(-0.7rem) skewX(-1deg);
  }
  100% {
    transform: translateY(0rem) skewX(0deg);
  }
}

@keyframes shadow {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes lines {
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }

  100% {
    transform: translate(20rem, 0);
    opacity: 0;
  }
}
</style>