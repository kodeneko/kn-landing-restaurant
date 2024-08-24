<script lang="ts" setup>
import BtnComp from '@components/btn/BtnCompo.vue';
import TitleCompo from '@components/title/TitleCompo.vue'
import InfoEleCompo from '@components/text/InfoEleCompo.vue'
import ListIconInfoCompo from '@components/text/ListIconInfoCompo.vue'
</script>

<template>
  <div class="address-map">
    <div class="map">
      <div class="actions">
        <BtnComp 
          size="sm" 
          icon="fa-solid fa-map-location-dot"
          label="Open"
        />
      </div>
      <div class="pic-map" />
    </div>
    <div class="address-info">
      <div class="logo">
        <TitleCompo />
      </div>
      <div class="address">
        <InfoEleCompo
          label="Address"
          info="C/Abedul 15, Alicante"
        />
        <InfoEleCompo
          label="Hours"
          info="12 pm - 01 am"
        />
        <InfoEleCompo
          label="phone"
          info="500 56 87 34"
        />
      </div>
      <div class="share">
        <ListIconInfoCompo
          :list="[
            {id: 'insta', icon: 'fa-brands fa-instagram', info: 'ramennemar'},
            {id: 'twitter', icon: 'fa-brands fa-twitter', info: 'ramennemar'},
            {id: 'tiktok', icon: 'fa-brands fa-tiktok', info: 'ramennemar'}
          ]" 
        />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import 'global.less';

.address-map {
  border-radius: 20px;
  max-width: 1000px;
  display: flex;
  box-shadow: @shadow-black;

  .map {
    flex-grow: 1;
    border-radius: 20px 0 0 20px;
    overflow: hidden;
    position: relative;
    padding: 10px;

    .actions {
      position: relative;
      z-index: 11;
      display: flex;
      top: 0;
      left: 0;
    }

    .pic-map {
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      background-image: url('map.png');
      filter: grayscale(95%);
    }
  }

  .address-info {
    flex-basis: 340px;
    border-radius: 0 20px 20px 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 40px;
    padding-top: 20px;
    box-sizing: border-box;
    gap: 20px;
    background: 
      linear-gradient(@c-dark-trans, @c-dark-trans), 
      url('back-05.jpg');
    background-size: cover;

    .logo {
      font-size: 8px;
      align-self: center;
    }

    .address {
      border: 1px solid @c-light;
      border-left: none;
      border-right: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 40px 0;
    }

    .share {

    }
  }
}

@media @mediaMobile {
  .address-map { 
    flex-direction: column-reverse;

    .address-info {
      flex-shrink: 1;
      border-radius: 20px 20px 0 0;
    }

    .map {
      flex-grow: 0;
      flex-basis: 400px;
      border-radius: 0 0 20px 20px;
    }
  }
}

</style>