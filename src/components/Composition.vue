<template>
  <div>
    <h2>This is the composition component</h2>
    <h4>The fullname is {{ firstname }}</h4>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "CompositionComponent",
  setup() {
    const firstname = ref("Bruce");

    return {
      firstname,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>