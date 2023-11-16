<template>
  <h2>the greet component</h2>
  <h1>Welcome {{ name }}</h1>
</template>


<script>
// here we need to specify what all the props we will get from the parent component and we will mention
//as shown in the props obj arr
export default {
  name: "GreetVue",
  props: ["name"],
};
</script>