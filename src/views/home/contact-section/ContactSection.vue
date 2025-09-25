<script lang="ts" setup>
import pic from '@assets/pics/dishes/ramen-beef.png'
import BtnCompo from '@components/btn/BtnCompo.vue';
import FieldCompo from '@components/form/FieldCompo.vue';
import { useMediaMobile } from '@hooks/useMedia';
import Contact from '@models/Contact';
import useUserStore from '@store/User';
import { onMounted, ref } from 'vue';

const isMobile = useMediaMobile();
const getSize = () => isMobile.value ? 'sm' : 'md'

const userStore = useUserStore();
const sectionRef = ref<HTMLElement | null>(null);
onMounted(() => {
  userStore.setRef('contact', sectionRef.value as HTMLElement);
})

const contact = ref<Contact>({
  name: '',
  mail: '',
  msg: ''
});
</script>

<template>
  <div class="contact-section" ref="sectionRef">

    <div class="header">
      <h2 class="title">We Hear You!</h2>
      <p class="sub">Questions, suggestions, critics, congrats, offers...</p>
    </div>

    <div class="content">
      <div class="left">
        <img :src="pic" />
      </div>
      <div class="right">
        <form class="form-contact">
          <FieldCompo 
            v-model="contact.name" 
            place-h="name..." 
          />
          <FieldCompo 
            v-model="contact.mail" 
            place-h="mail..." 
          />
          <FieldCompo 
            v-model="contact.msg" 
            place-h="message..." 
            :textarea="true"
          />
        </form>
        <div class="bottom">
          <div class="hint-info">
            <p>Un hint random</p>
          </div>
          <div class="actions">
            <BtnCompo
              label="Send"
              :size="getSize()"
            />
          </div>
        </div>
      </div>
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
        gap: 20px;
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