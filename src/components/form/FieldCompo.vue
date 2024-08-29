<script lang="ts" setup>
defineProps<{
  placeH: string;
  textarea?: boolean;
}>()
const model = defineModel<string>();
</script>

<template>
  <input 
    v-if="!textarea"
    :class="['field', 'input']"
    v-model="model"
    :placeholder="placeH"
  />
  <textarea
    v-else
    :class="['field', 'textarea']"
    v-model="model"
    :placeholder="placeH"
  ></textarea>
</template>

<style lang="less" scoped>
@import 'global.less';

.field {
  background-color: transparent;
  border: 0.06rem solid @c-red;
  border-radius: 1.25rem;
  padding: 0.63rem 1.25rem;
  color: @c-light;
  font-size: 1.5rem;

  &::placeholder {
    font-style: italic;
    color: @c-red;
  }

  &:focus {
    outline: none;
  }
}

.textarea {
  height: 100%;
}
</style>