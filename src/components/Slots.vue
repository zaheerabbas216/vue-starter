<template>
  <div>
    <h2>using the slot in vue</h2>

    <!-- add the data to the cards -->
    <CardComponent>
      <h1>Card One</h1>
    </CardComponent>
    <CardComponent>
      <h2>Card Two</h2>
    </CardComponent>
  </div>
</template>

<script>
import CardComponent from "./cards/Cards.vue";
export default {
  name: "SlotComponent",
  components: {
    CardComponent,
  },
};
</script>

<style lang="scss" scoped>
</style>