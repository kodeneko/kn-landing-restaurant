<script lang="ts" setup>
defineProps<{
  list: {
    id: string;
    icon: string;
    info: string;
  } []
}>()
</script>

<template>
  <ul class="list-icon-compo">
    <li class="list-item" v-for="ele in list" :key="ele.id">
      <div class="icon-wrap">
        <fai class="icon" :icon="ele.icon" />
      </div>
      <div class="info">
        {{ ele.info }}
      </div>
    </li>
  </ul>
</template>

<style lang="less" scoped>
.list-icon-compo {
  font-size: .7rem;
  display: flex;
  flex-direction: column;
  gap: .25rem;

  .list-item {
    display: flex;
    align-items: center;
    gap: .5rem;
    .icon-wrap {
      font-size: 1.5rem;
      width: 1.5rem;
    }
    .info {
      font-size: 1.13rem;
    }
  }
}
</style>