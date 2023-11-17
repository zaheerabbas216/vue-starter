<template>
  <h2>the greet component</h2>
  <h1>Welcome {{ name }}</h1>

  <!-- from the store -->
  <p>the data from the state is --</p>
  <p>
    Firstname - {{ $store.state.firstname }}, Lastname -
    {{ $store.state.lastname }}
  </p>
  <!-- full name using the getter can be shown below -->
  <p>the data from the getter is -</p>
  <p>fullname - {{ $store.getters.fullname }}</p>

  <!-- add to favs button  -->
  <!-- <p>add to favs button</p> -->
  <!-- <button @click="$store.dispatch('addtofav', 'test')">Add to favs</button> -->

  <!-- to get the count value from the store -->
  <p>count value from the store</p>
  <p>{{ $store.state.counts }}</p>
  <button @click="$store.dispatch('change_counts')">increase count</button>

  <p>showing the list of the cities from the store array -</p>
  {{ $store.state.cities }}
  <p v-for="city in $store.state.cities" :key="city">{{ city }}</p>
  <input type="text" placeholder="add new city" v-model="city" />
  <button @click="addnewcity">Add New City</button>

  <!-- the user data from the form  -->
  <h4>Form to push to the state using the vuex</h4>
  {{ $store.state.userdata }}
  <form @submit="userformsubmit">
    <label for="">username</label>
    <input
      type="text"
      name=""
      id=""
      placeholder="enter the username"
      v-model="userData.username"
    />
    <label for="">email</label>
    <input
      type="text"
      name=""
      id=""
      placeholder="enter the email"
      v-model="userData.email"
    />
    <button type="submit">submit user data</button>
  </form>
</template>


<script>
// here we need to specify what all the props we will get from the parent component and we will mention
//as shown in the props obj arr
export default {
  name: "GreetVue",
  props: ["name"],
  city: "",

  data() {
    return {
      userData: {
        username: "",
        email: "",
      },
    };
  },

  methods: {
    addnewcity() {
      this.$store.dispatch("add_cities", this.city);
    },
    userformsubmit(event) {
      event.preventDefault();
      console.log("the form data is", this.userData);
      this.$store.dispatch("add_userdata", this.userData);
    },
  },
};
</script>