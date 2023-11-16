<template>
  <h5>Hello {{ name }}</h5>

  <!-- v-text directive -->
  <p v-text="village"></p>

  <!-- v-html directive -->
  <p v-html="mentor"></p>

  <!-- using the atrributes like id,class etc.. -->
  <p v-bind:id="height">{{ height }}</p>
  <!-- other binding example using the boolean  -->

  <button v-bind:disabled="isButtonDisabled">Click Me!</button>

  <!-- using the class (static)-->
  <p class="underlined">underlined text</p>

  <!-- we can also add the dynamic styles by using the  -->
  <p v-bind:class="isSuccess">{{ isSuccess }}</p>
  <!-- to dynamically bind the data using the ternary operator in the v-bind directive -->
  <p :class="isTrue ? 'success' : 'unsuccess'">is its {{ isTrue }}</p>

  <!-- we can also use the array and the object approach to bind the multiple classes to the tag  -->
  <p :class="['new', 'success']">
    New Data with the multiple array of styles (classes in the array)
  </p>

  <!-- we can also conditional render the aray of the classes  -->

  <p :class="[isTrue ? 'success' : 'unsuccess', isNew && 'new']">
    Conditional rendering of the v bind classes within the array
  </p>

  <!-- we can also bind the conditional data using the object  -->
  <p
    v-bind:class="{
      new: isNew,
      isSuccess: 'success',
    }"
  >
    Binding the data using the object in the bind class
  </p>

  <!-- we can also add the inline styles first we need to declare the color in the js and then use 
  the color in the bind:style directive -->

  <p
    v-bind:style="{
      color: highlightColor,
    }"
  >
    Highlighted Text
  </p>

  <!-- we can also bind the style objects to the directive as shwon , first you need to create an obejct
  with the styles in the js and then you need to use it in the template as shown in the example -->
  <p v-bind:style="succcessStyled">
    Success styled with the object in the inline
  </p>

  <!-- instead of using the v-bind everywhere we can also use the :attribute same as the v-bind:attribute -->

  <!-- //! conditional rendering  -->
  <!-- v-if -->
  <p class="notGreaterThanZero" v-if="number === 0">
    Not greater than {{ number }}
  </p>

  <p class="greaterThanZero" v-else-if="number > 0">
    Number is a positive number
  </p>

  <p class="notGreaterThanZero" v-else>
    Not a number/negative number {{ number }}
  </p>

  <!-- we can show or hide the ele uisng the v-show directive -->
  <!-- if the condition for the vhsow is false then the content wont show beacuse the display is none for this -->
  <p v-show="vShowDir">v-show directive</p>

  <!-- listing the data from the array using the v-for directive -->
  <p v-for="(superhero, index) in arrNumdata" :key="index">
    {{ index }}{{ superhero }}
  </p>

  <h4>superhero data</h4>
  <p v-for="hero in superheroDataArr" :key="hero">
    {{ hero?.name }} alias is {{ hero?.alias }}
  </p>

  <!-- conditional rendering using the vfor and vif  -->
  <!-- only the show the data in the array which contains the batman -->
  <template v-for="supe in superheroDataArr" :key="supe">
    <p
      v-bind:style="{
        color: highlightColor,
        fontSize: fontSizehighlight,
      }"
      v-if="supe.name === 'batman'"
    >
      {{ supe?.name }}
    </p>
  </template>

  <!-- //!even we need to use the vfor to show the data from the object  -->

  <!-- methods in in vue -->

  <!-- we can create our own methods, we can also declare a variable in the data method and can use in 
our methods as well  -->

  <p>the multiplier for provided is {{ multiplier(2) }}</p>

  <!-- on click event in the vue to change the name -->
  <button v-on:click="name = 'Batman'">Change name to {{ name }}</button>

  <!-- the counter example in vue -->

  <h2>Counter in Vue.js</h2>
  <h3>{{ countvalue }}</h3>
  <button v-on:click="increment()">INC</button>
  <!-- //! to bind the events in the vue instead of using the v-on every time we can also use the @click -->
  <button @click="decrement()">DEC</button>

  <!-- to use the form in the vue js -->
  <div>
    <form @submit="handleForm">
      <label for="">Name</label>
      <input
        type="text"
        placeholder="enter the name"
        v-model="formValues.name"
      />
      <label for="">Age</label>
      <input type="text" placeholder="enter the age" v-model="formValues.age" />

      <label for="">will to work from remote location?</label>
      <!-- we also set the values to yes or no for the checkbox values -->
      <input
        type="checkbox"
        name=""
        id=""
        v-model="formValues.isAvailable"
        true-value="yes"
        false-value="no"
      />

      <p>select skills</p>
      <label for="">HTML</label>
      <input
        type="checkbox"
        name=""
        id="html"
        value="html"
        v-model="formValues.skills"
      />
      <label for="">CSS</label>
      <input
        type="checkbox"
        name=""
        id="css"
        value="css"
        v-model="formValues.skills"
      />
      <label for="">Vue</label>
      <input type="checkbox" value="vue" id="vue" v-model="formValues.skills" />
      <button type="submit">Submit Form</button>
    </form>
  </div>

  <!-- the example for the computed -->
  <p>with out computed</p>
  <p>full name is {{ firstname }}, {{ lastname }}</p>

  <p>with computed</p>
  <p>full name is {{ fullnamecomputed }}</p>

  <h2>The volume is {{ volume }}</h2>
  <button @click="volume += 2">Increase volume</button>
  <button @click="volume -= 2">Decrease volumn</button>

  <GreetVue />
</template>

<script>
import GreetVue from "./components/Greet.vue";

export default {
  name: "App",
  components: {
    GreetVue,
  },
  data() {
    return {
      formValues: {
        name: "",
        age: "",
        isAvailable: "no",
        skills: [],
      },
      firstname: "brue",
      lastname: "wayne",
      volume: 0,
      basemultiplier: 23,
      countvalue: 0,
      name: "Naruto",
      village: "Leaf",
      mentor: "<b>Jiraya</b>",
      height: "5.3",
      isButtonDisabled: false,
      isSuccess: "unsuccess",
      isTrue: true,
      isNew: true,
      highlightColor: "orange",
      fontSizehighlight: "20px",
      succcessStyled: {
        color: "green",
        border: "1px solid green",
        padding: "10px",
      },
      number: -2,
      vShowDir: true,
      arrNumdata: ["batman", "superman", "flash"],
      superheroDataArr: [
        { name: "batman", alias: "bruce" },
        { name: "superman", alias: "clark" },
        { name: "flash", alias: "barry" },
      ],
    };
  },

  methods: {
    multiplier(number) {
      return number * this.basemultiplier;
    },
    increment() {
      return (this.countvalue += 1);
    },
    decrement() {
      return (this.countvalue -= 1);
    },

    handleForm(e) {
      e.preventDefault();
      console.log("the form values are", this.formValues);
    },
  },

  // the computed property can be used to write the piece of logic in one place and then we use the property
  // when needed in the template
  computed: {
    // fullnamefun() {},
    fullnamecomputed() {
      return `${this.firstname}, ${this.lastname}`;
    },
  },

  // watchers , the watchers are used to watch the data of the value of the var closely to execute the funciton for
  // the certain condition
  watch: {
    volume(vol, inpval) {
      if (vol > inpval && vol === 16) {
        alert("volume is loud, please decrease!");
      }
    },
  },

  // ! if there is any data to be formatted then we use the computed property or any generic fun to modify the data
  //! and we use the watch to watch closely the value which we want to and trigger the function or method wehen needed
};
</script>

<style>
.underlined {
  text-decoration: underline;
}

.success {
  color: green;
}
.unsuccess {
  color: red;
}

.new {
  font-style: italic;
  font-weight: 800;
}

.greaterThanZero {
  color: green;
}

.notGreaterThanZero {
  color: red;
}
</style>
