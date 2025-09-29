<script lang="ts" setup>
import pic from '@assets/pics/dishes/ramen-beef.png'
import BtnCompo from '@components/btn/BtnCompo.vue';
import FieldCompo from '@components/form/FieldCompo.vue';
import { Sections } from '@globals/sections';
import { useMediaMobile } from '@hooks/useMedia';
import Contact from '@models/Contact';
import { motion as m } from "motion-v";
import useUserStore from '@store/User';
import { onMounted, ref, reactive } from 'vue';
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

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

const rules = {
  contact: {
    name: { required },
    mail: { required, email },
    msg: { required },
  }
}

const v$ = useVuelidate(rules, { contact })

const getErrorMsg = (field: string) => {
  const fieldValidation = v$.value.contact[field];
  if (fieldValidation?.$dirty && fieldValidation?.$errors.length) {
    if (field === 'mail' && fieldValidation?.$errors.some(e => e.$validator === 'email')) {
      return "The mail format is invalid";
    }
    if (fieldValidation?.$errors.some(e => e.$validator === 'required')) {
      return "The field is required";
    }
  }
  return "";
}

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
        <form class="form-contact">
          <FieldCompo 
            v-model="contact.name" 
            @blur="v$.contact.name.$touch()"
            place-h="name..." 
            :hint="v$.contact?.name && getErrorMsg('name')"
          />
          <FieldCompo 
            v-model="contact.mail" 
            @blur="v$.contact.mail.$touch()"
            place-h="mail..." 
            :hint="v$.contact?.mail && getErrorMsg('mail')"
          />
          <FieldCompo 
            v-model="contact.msg"
            @blur="v$.contact.msg.$touch()" 
            place-h="message..." 
            :textarea="true"
            :hint="v$.contact?.msg && getErrorMsg('msg')"
          />
        </form>
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

      .form-contact {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }

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