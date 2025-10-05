<script lang="ts" setup>
import pic from '@assets/pics/dishes/ramen-beef.png'
import BtnCompo from '@components/btn/BtnCompo.vue';
import { Sections } from '@globals/sections';
import { useMediaMobile } from '@hooks/useMedia';
import Contact from '@models/Contact';
import { motion as m } from "motion-v";
import useUserStore from '@store/User';
import { onMounted, ref, reactive, watch } from 'vue';
import FormContactComponent from './FormContactComponent.vue';

const isMobile = useMediaMobile();
const getSize = () => isMobile.value ? 'sm' : 'md'

const userStore = useUserStore();
const sectionRef = ref<HTMLElement | null>(null);
onMounted(() => {
  userStore.setRef(Sections.Contact, sectionRef.value as HTMLElement);
})

const contact = reactive<Contact>({
  name: 'test',
  mail: '',
  msg: ''
});
</script>

<template>
  <div class="contact-section" ref="sectionRef">
    <m.div 
      class="header"
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
      <h2 class="title">We Hear You!</h2>
      <p class="sub">Questions, suggestions, critics, congrats, offers...</p>
    </m.div>

    <div class="content">
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
        <img :src="pic" />
      </m.div>
      <m.div 
        class="right"
        :initial="{
          opacity: 0,
          x: 100
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
        <FormContactComponent v-model="contact" />
        <div class="bottom">
          <div class="hint-info">
            <p></p>
          </div>
          <div class="actions">
            <BtnCompo
              label="Send"
              :size="getSize()"
            />
          </div>
        </div>
      </m.div>
    </div>

  </div>
</template>

<style lang="less" scoped>
@import url("global.less");

.contact-section {
  display: flex;
  flex-direction: column;
  padding: 160px 40px;
  gap: 60px;

  .header {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    text-align: right;
    .title {
      font-size: 72px;
      font-weight: bold;
    }
    .sub {
      font-size: 28px;
    }
  }

  .content {
    display: flex;
    gap: 60px;

    .left {
      
      img {
        width: 440px;
      }
    }
    .right {
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex-grow: 1;
        background-color: @c-red-trans;
        border-radius: 40px;
        padding: 40px;

      .bottom {
        display: flex;
        align-items: center;

        .hint-info {
          flex-grow: 1;
        }
      }
    }
  }

}

@media @mediaTablet, @mediaMobile {
  .contact-section {
    padding: 20px;
    padding-bottom: 80px;

    .header {
      text-align: center;
      .title {
        font-size: 46px;
      }
      .sub {
        font-size: 18px;
      }
    }

    .content {
      .left {
        display: none;
      }
      .right {
        padding: 20px;
        .form-contact {
          gap: 10px
        }
        .bottom {
          .hint-info {
            display: none;
          }
          .actions {
            flex-grow: 1;
            display: flex;
            justify-content: end;
          }
        }
      }
    }
  }
}
</style>