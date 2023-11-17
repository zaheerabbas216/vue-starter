<template>
  <h1>Title is {{ title }}</h1>
  <h2>The superhero name for {{ name }} is {{ superheroname }}</h2>

  <p>Enter the superhero name</p>
  <InputVue v-model="supename" />

  <button @click="getsupename">Get supe name</button>

  <ButtonComponent v-model="buttonData" @click="handlebuttonclick" />
</template>

<script>
import InputVue from "./Input.vue";
import ButtonComponent from "./Button.vue";

export default {
  name: "SuperherosVue",
  data() {
    return {
      supename: "",
      buttonData: "",
    };
  },
  components: {
    InputVue,
    ButtonComponent,
  },

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

  methods: {
    getsupename() {
      console.log("the supe name is ", this.supename);
    },
    handlebuttonclick() {
      console.log("button clicked");
    },
  },
};
</script>