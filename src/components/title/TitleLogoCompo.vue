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
    height: 9.13em;
    width: 9.13em;

    .symLeft, .symRight {
      position: absolute;
      content: 'R';
      font-size: 4.5em;
      font-family: 'Plus Jakarta Sans';
      color: @c-light;
      text-transform: uppercase;
      font-weight: bold;
      top: 0.46em;

      &::after {
        content: 'R';
      }
    }
    .symLeft {
      left: 0.35em;
      transform: rotateY(180deg);
    }
    .symRight {
      right: 0.35em;
    }
    .backCirc {
      border-radius: 50%;
      position: absolute;
      height: 9.13em;
      width: 9.13em;
      border: 0.63em solid @c-light;
      box-sizing: border-box;
    }
  
}
</style>