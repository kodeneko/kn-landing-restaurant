<script lang="ts"></script>

<template>
  <span class="title-label-compo">
    <span class="left">
      <span class="r reverse">R</span>amen
    </span>
    <span class="right">
      nema<span class="r">R</span>
    </span>
  </span>
</template>

<style lang="less" scoped>
@import 'global.less';

.title-label-compo {
  display: flex;
  gap: 0.3em;
  font-family: "Plus Jakarta Sans";
  font-size: 3.25em;
  color: @c-light;
  font-weight: bold;
  .left {
    .reverse {
      transform: rotateY(180deg);
    }
  }
  .r {
    display: inline-block;
    text-transform: uppercase;
  }
}
</style>