<script lang="ts" setup>
import FieldCompo from '@components/form/FieldCompo.vue';
import Contact from '@models/Contact';
import useVuelidate from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';

const props = defineProps<{
  modelValue: Contact,
}>()

const emit = defineEmits(['update:modelValue', 'blur'])

const rules = {
  contact: {
    name: { required },
    mail: { required, email },
    msg: { required },
  }
}

const v$ = useVuelidate(rules, { contact: props.modelValue })

const getErrorMsg = (field: string) => {
  const fieldValidation = v$.value.contact[field];
  if (fieldValidation?.$dirty && fieldValidation?.$errors.length) {
    if (field === 'mail' && fieldValidation?.$errors.some(e => e.$validator === 'email')) {
      return "The mail format is invalid";
    }
    if (fieldValidation?.$errors.some(e => e.$validator === 'required')) {
      return "The field is required";
    }
  }
  return "";
}
</script>

<template>
  <form class="form-contact">
    <FieldCompo 
      v-model="modelValue.name" 
      @blur="v$.contact.name.$touch()"
      place-h="name..." 
      :hint="v$.contact?.name && getErrorMsg('name')"
    />
    <FieldCompo 
      v-model="modelValue.mail" 
      @blur="v$.contact.mail.$touch()"
      place-h="mail..." 
      :hint="v$.contact?.mail && getErrorMsg('mail')"
    />
    <FieldCompo 
      v-model="modelValue.msg"
      @blur="v$.contact.msg.$touch()" 
      place-h="message..." 
      :textarea="true"
      :hint="v$.contact?.msg && getErrorMsg('msg')"
    />
  </form>
</template>

<style lang="less" scoped>
.form-contact-compo {
  display: flex;
  flex-direction: column;
}
</style>
