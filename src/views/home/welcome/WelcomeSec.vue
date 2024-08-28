<script lang="ts" setup>
import BtnCompo from '@components/btn/BtnCompo.vue';
import { socialList } from '@globals/social';
import ramenBowl from '@assets/pics/ramen-bowl.png'

</script>

<template>
  <div class="welcome-sec">
    <ejemplo />
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
    <div class="pic">
      <img :src="ramenBowl" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url('global.less');

.welcome-sec {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  padding: 2.5rem;
  padding-bottom: 2.75rem;
  row-gap: 1.25rem;
  grid-template-areas: 
    "title pic"
    "social pic"
    "desc pic"
    "actions pic"
  ;
  
  .title {
    grid-area: title;
    max-width: 33.13rem;
    font-size: 4.5rem;
    font-weight: bold;
    padding-bottom: 2.5rem;
  }

  .social {
    grid-area: social;
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
    grid-area: desc;
    max-width: 33.13rem;
    font-size: 2rem;
    padding-bottom: 1.25rem;
  }

  .actions {
    grid-area: actions;
    display: flex;
    gap: 1.25rem;
  }

  .pic {
    grid-area: pic;
    align-self: end;
    justify-self: end;

    img {
      height: 25rem;
      transform: rotateY(180deg);
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