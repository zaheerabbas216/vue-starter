<template>
  <h2>Vue Js starter</h2>

  <div>
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/slots">Slots</router-link>
      <router-link to="/posts">Posts</router-link>
      <router-link to="/composition">Comoposition API</router-link>
      <router-link to="/addpost">Add new post</router-link>
    </p>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
</style>
