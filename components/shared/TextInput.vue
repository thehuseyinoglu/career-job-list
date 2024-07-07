<script setup lang="ts">
import { toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: undefined,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,

  },

  placeholder: {
    type: String,
    default: '',
  },
  class:{
    type:String,
    default:''
  }
});


const name = toRef(props, 'name');


const {
  value: inputValue,
  handleBlur,
  handleChange,
} = useField(name, undefined, {
  initialValue: props.value,
});


</script>

<template>

   <div class="flex flex-col"> 
    <label :for="name">{{ label }}</label>
    <input
    :class="['rounded-xl border-0 flex justify-center p-2', props.class]"
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
    />
   </div>

    

</template>


