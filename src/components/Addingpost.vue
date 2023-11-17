<template>
  <div>
    <h3>Add a new post</h3>
  </div>

  <div class="addnewpostformdiv">
    <form @submit="formsubmit">
      <label for="">userid</label>
      <input
        type="text"
        placeholder="enter the user id"
        v-model="formValues.userId"
      />
      <label for="">title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="enter title"
        v-model="formValues.title"
      />

      <label for="">body</label>
      <input
        type="text"
        name="body"
        title="body"
        placeholder="enter body"
        v-model="formValues.body"
      />

      <button type="submit">Add new post</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddNewPostComponent",
  data() {
    return {
      formValues: {
        userId: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    formsubmit(event) {
      event.preventDefault();
      console.log("the form data is", this.formValues);

      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.formValues)
        .then((response) => {
          console.log("success response", response);
        })
        .catch((err) => {
          console.log("post erorr", err);
        });
    },
  },
};
</script>

<style >
</style>