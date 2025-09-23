<script lang="ts" setup>
import BtnCompo from '@components/btn/BtnCompo.vue';
import { socialList } from '@globals/social';
import ramenBowl from '@assets/pics/ramen-bowl.png';
import { motion as m } from "motion-v";

</script>

<template>
  <div class="welcome-sec">
    <m.div 
      class="left"
      :initial="{
        opacity: 0,
        x: -100
      }"
      :animate="{
        opacity: 1,
        x: 0
      }"
      :transition="{
        delay: 0.3,
        duration: 0.7
      }"
    >
      <h2 class="title">Ejoy Your Ramen</h2>
      <ul class="social">
        <li 
          v-for="social in socialList" 
          :key="social.id"
        >
          <fai class="icon" :icon="social.icon" />
        </li>
      </ul>
      <p class="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit lacus eu vehicula ultricies ut, nec vestibulum neque dictumst sagittis taciti pharetra</p>
      <div class="actions">
        <BtnCompo 
          label="Location"
          icon="fa-solid fa-location-dot" 
          size="md"
          :line="true"
          :full="true"
        />
        <BtnCompo 
          label="Delivery"
          icon="fa-solid fa-motorcycle" 
          size="md"
          :full="true"
        />
      </div>
    </m.div>
    <m.div 
      class="right"
      :initial="{
        opacity: 0,
        x: 100
      }"
      :animate="{
        opacity: 1,
        x: 0
      }"
      :transition="{
        delay: 0.3,
        duration: 0.7
      }"
    >
      <img :src="ramenBowl" />
    </m.div>
  </div>
</template>

<style lang="less" scoped>
@import url('global.less');

.welcome-sec {
  display: flex;
  padding: 2.5rem;
  padding-bottom: 8.75rem;
  gap: 1.25rem;
}

.welcome-sec .left {

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .title {
    max-width: 33.13rem;
    font-size: 4.5rem;
    font-weight: bold;
    margin-bottom: 2.5rem;
  }

  .social {
    display: flex;
    gap: 1.25rem;

    li {
      height: 3rem;
      width: 3rem;
      .icon {
        height: 3rem;

        &:hover {
          color: @c-red;
        }
      }
    }
  }

  .desc {
    max-width: 33.13rem;
    font-size: 1.75rem;
  }

  .actions {
    display: flex;
    gap: 1.25rem;
  }
}

.welcome-sec .right {
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

  img {
    height: 25rem;
    transform: rotateY(180deg);
  }
}

@media @mediaTablet, @mediaMobile {
  .welcome-sec {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas: 
      "title"
      "pic"
      "social"
      "actions"
    ;
    justify-items: center;
    padding: 1.25rem;

    .title {
      text-align: center;
    }

    .desc {
      display: none;
      width: auto;
    }

    .pic {
      justify-self: center;
    }

    .actions {
      flex-direction: column;
      width: 100%;
    }
  }
}

@media @mediaMobile {
  .welcome-sec { 
    .title {
      font-size: 2.88rem;
    }

    .pic {
      img {
        height: 11.25rem;
      }
    }
  }
}
</style>