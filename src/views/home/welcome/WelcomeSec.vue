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
      />
      <BtnCompo 
        label="Delivery"
        icon="fa-solid fa-motorcycle" 
        size="md"
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
  padding: 40px;
  padding-bottom: 140px;
  row-gap: 20px;
  grid-template-areas: 
    "title pic"
    "social pic"
    "desc pic"
    "actions pic"
  ;
  
  .title {
    grid-area: title;
    max-width: 530px;
    font-size: 72px;
    font-weight: bold;
    padding-bottom: 40px;
  }

  .social {
    grid-area: social;
    display: flex;
    gap: 20px;

    li {
      .icon {
        height: 42px;

        &:hover {
          color: @c-red;
        }
      }
    }
  }

  .desc {
    grid-area: desc;
    max-width: 530px;
    font-size: 32px;
  }

  .actions {
    grid-area: actions;
    display: flex;
    gap: 20px;
  }

  .pic {
    grid-area: pic;
    align-self: end;
    justify-self: end;
    img {
      height: 400px;
    }
  }

}

@media @mediaTablet {
  .welcome-sec {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas: 
      "title"
      "pic"
      "social"
      "actions"
    ;

    .desc {
      display: none;
    }
  }
}
</style>