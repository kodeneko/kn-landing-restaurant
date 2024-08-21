<script lang="ts"></script>

<template>
  <div class="title-logo-compo">
    <div class="symLeft" />
    <div class="symRight" />
    <div class="backCirc" />
  </div>
</template>

<style lang="less" scoped>
@import 'global.less';

.title-logo-compo {

    position: relative;
    display: inline-block;
    height: 146px;
      width: 146px;

    .symLeft, .symRight {
      position: absolute;
      content: 'R';
      font-size: 72px;
      font-family: 'Plus Jakarta Sans';
      color: @c-light;
      text-transform: uppercase;
      font-weight: bold;
      top: 26px;

      &::after {
        content: 'R';
      }
    }
    .symLeft {
      left: 24px;
      transform: rotateY(180deg);
    }
    .symRight {
      right: 24px;
    }
    .backCirc {
      border-radius: 50%;
      position: absolute;
      height: 146px;
      width: 146px;
      border: 10px solid @c-light;
      box-sizing: border-box;
    }
  
}
</style>