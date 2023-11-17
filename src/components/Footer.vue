<template>
  <h4>This is the footer</h4>

  <p>the user is {{ fullname }}</p>

  <button @click="clickedmethod">send data to parent(App)</button>
</template>


<script>
export default {
  name: "FooterComponent",
  inject: ["fullname"],

  methods: {
    clickedmethod() {
      console.log("the clicked in the child component");
      this.$emit("clicked", "data from child", "another data from child");
    },
  },
};
</script>