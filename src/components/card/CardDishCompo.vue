<script lang="ts" setup>
import Dish from '@models/Dish';

defineProps<{
  dish: Dish,
  symbol: string
}>();
</script>

<template>
  <div class="card-dish">
    <div class="cont">
      <img 
        class="pic" 
        :src="dish.pic"
      />
      <h3 class="title">
        {{ dish.title }}
      </h3>
      <p class="desc">
        {{ dish.desc }}
      </p>
      <div class="price">
        <span>{{ dish.price }}</span>
        <span>{{ symbol }}</span>
      </div>
    </div>
    <div class="back" />
  </div>
</template>

<style lang="less" scoped>
@import 'global.less';

.card-dish {
  position: relative;
  padding: 20px;

  .cont {
    z-index: 11;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;

    .pic {
      height: 220px;
      width: fit-content;
      align-self: center;
    }

    .title {
      font-size: 20px;
      text-transform: uppercase;
      font-weight: bold;
    }
    .desc {
      font-size: 18px;
      line-height: 28px;
    }
    .price {
      font-weight: bold;
      padding-top: 10px;
      font-size: 18px;
    }
  }

  .back {
    z-index: 10;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 20px;
    background-color: @c-red-trans;
    width: 100%;
    height: calc(100% - 50px );
  }
}
</style>