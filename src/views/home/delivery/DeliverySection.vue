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