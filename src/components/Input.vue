<template>
  <h4>Custom input component</h4>

  <!-- for the generic inp tag, you need to get the value from the desired comp to the props here
then you assign the value to the prop value, and then you need to emit the updated value, with the target.value -->
  <input
    type="text"
    name=""
    id="supename"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  {{ modelValue }}
</template>


<script>
export default {
  name: "InputComponent",
  props: {
    modelValue: String,
  },
};
</script>


<style>
</style>