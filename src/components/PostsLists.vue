<template>
  <div>
    <h2>Posts List</h2>

    <div class="postlist">
      <h5>posts are</h5>
      <template v-for="posts in postslist" :key="posts.id">
        <p>{{ posts?.title }}</p>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

let count = ref([]);
export default {
  name: "PostsComponent",
  created() {
    this.getallposts();
  },
  data() {
    return {
      postslist: [],
    };
  },

  methods: {
    getallposts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          count = response?.data;
          this.postslist = response?.data;
        })
        .catch((err) => {
          console.log("error", err);
        });

      console.log("the count arry is", count);
    },
  },
};
</script>

<style>
</style>