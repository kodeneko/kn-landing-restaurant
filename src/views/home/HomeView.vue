<script lang="ts" setup>
import WelcomeSec from './welcome/WelcomeSec.vue'
import MenuCardSec from './menu-card/MenuCardSec.vue'
</script>

<template>
  <div class="cont">
    <WelcomeSec />
    <MenuCardSec />
  </div>
</template>

<style lang="less" scoped>
.cont {
  display: flex;
  flex-direction: column;

}
</style>