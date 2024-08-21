<script lang="ts"></script>

<template>
  <div class="logo-compo">
    <div class="symbol">
      <div class="symLeft"></div>
      <div class="symRight"></div>
      <div class="backCirc"></div>
    </div>
    <div class="title">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>

.logo-compo {
  .symbol {
    position: relative;
    .symLeft, .symRight {
      position: absolute;
      content: 'R';
      font-size: 72px;
      font-family: 'Plus Jakarta Sans';
      color: @c-light;
      text-transform: uppercase;
      top: calc(50% - 146px / 2);

      &::before {
        content: 'R';
      }
    }
    .symLeft {
      left: 0;
      transform: rotateY(180deg);
    }
    .symRight {
      right: 0;
    }
    .backCirc {
      position: absolute;
      height: 146px;
      width: 146px;
      border: 10px solid @c-light;
    }
  }
  .title {
    .left {
      
    }
    .right {
      
    }
  }
}
</style>