<template>
  <h1>Title is {{ title }}</h1>
  <h2>The superhero name for {{ name }} is {{ superheroname }}</h2>
</template>

<script>
export default {
  name: "SuperherosVue",
  //   props: ["title", "name", "superheroname"],
  props: {
    title: {
      type: String,
      required: true,
      default: "The default title",
    },
    name: {
      type: String,
    },
    superheroname: {
      type: String,
    },
  },
};
</script>