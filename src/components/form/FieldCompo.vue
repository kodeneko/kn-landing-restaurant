<script lang="ts" setup>
defineProps<{
  modelValue: string,
  placeH: string;
  textarea?: boolean;
  hint?: string
}>()

const emit = defineEmits(['update:modelValue', 'blur'])
</script>

<template>
  <div class="cont">
    <input 
      v-if="!textarea"
      :class="['field', 'input']"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeH"
      @blur="$emit('blur')"
    />
    <textarea
      v-else
      :class="['field', 'textarea']"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
      :placeholder="placeH"
    >{{ modelValue }}</textarea>
    <div class="hint">{{ hint }}</div>
  </div>
</template>

<style lang="less" scoped>
.cont {
  display: flex;
  flex-direction: column;
}

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
  height: 12rem;
}

.hint {
  color: @c-red;
  font-style: italic;
  height: 1.1rem;
  padding: 0.6rem 0;
  text-align: right;
}
</style>