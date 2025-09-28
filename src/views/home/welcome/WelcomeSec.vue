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
      <div class="pic">
        <svg class="filter">
          <filter id="blurry">
            <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="10" />
            <feDisplacementMap in="SourceGraphic" scale="180" />
          </filter>
        </svg>
        <div class="steam"></div>
        <filter id="blurry">
          <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="10" />
          <feDisplacementMap in="SourceGraphic" scale="180" />
        </filter>
        <img :src="ramenBowl" />
      </div>
    </m.div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/styles/global.less';

.steam {
  height: 0;
  width: 0;
  margin: 3rem;
  border-radius: 50%;
  position: relative;
  top: 3rem;
  left: 12rem;
  box-shadow: 0.63rem 0.63rem 4.4rem 6.3rem white;
  filter: url(#blurry);
  z-index: 10;
  animation-name: steamAnim;
  animation-duration: 6s;
  animation-iteration-count: infinite;
}

.welcome-sec {
  display: flex;
  padding: 2.5rem;
  padding-bottom: 8.75rem;
  gap: 1.25rem;

  .left {
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

  .right {
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    .pic {
      grid-area: pic;
      align-self: end;
      justify-self: end;
      position: relative;

      .filter {
        display: none
      }
      img {
        height: 22rem;
        transform: rotateY(180deg);
      }
    }
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
      "actions";
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

@keyframes steamAnim {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    transform: translate(0px, -150px);
    opacity: 0;
  }
}

@keyframes levitation {
  0% {
    transform: translateY(0rem);
  }
  100% {
    transform: translateY(-0.8rem);
  }
}
</style>