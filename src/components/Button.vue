<template>
  <h4>the custom button</h4>

  <button class="custom-button" @click="handleClick">
    Custome button here!
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",

  props: {
    modelValue: String,
  },

  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style>
.custom-button {
  height: 40px;
  border: 1px solid green;
  background: #fff;
  color: #000;
}
</style>