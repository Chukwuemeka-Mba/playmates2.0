<template lang="">
  <main>
    <div class="head">
      <h1>Update Playmate</h1>
    </div>
    <div class="form">
      <form @submit.prevent="savePlaymate" enctype="multipart/form-data">
        <label for="playmate">Name</label>
        <input
          type="text"
          name="playmate"
          required
          v-model="form.name"
          :rules="rules"
          ref="input"
        />

        <label for="age">Age</label>
        <input type="number" name="age" v-model="form.age" :rules="rules" />

        <label for="description">Details</label>
        <textarea
          rows="5"
          cols="50"
          name="description"
          v-model="form.details"
          :rules="rules"
          ref="input"
        >
            Enter play details here...
         </textarea
        >

        <label for="play count">Play Count</label>
        <input
          type="number"
          name="play count"
          required
          v-model="form.count"
          :rules="rules"
          ref="input"
        />

        <label for="image">Image</label>
        <input
          type="file"
          name="form.image"
          @change="selectFile"
          :rules="rules"
          ref="input"
        />

        <button ref="button" type="submit" @click="savePlaymate">
          Update Playmate
        </button>
      </form>
    </div>
  </main>
</template>
<script>
import API from "~/plugins/api";

export default {
  data() {
    return {
      rules: [(value) => !!value || "This field is required!"],
      id: this.$route.params.edit,
      form: {
        name: "",
        age: "",
        details: "",
        count: "",
        image: "",
      },
      image: "",
    };
  },
  mounted() {
    document.title = "New Playmate | Playmates";
  },
  methods: {
    selectFile(file) {
      this.image = file[0];
    },
    async savePlaymate() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("name", this.form.name);
      formData.append("age", this.form.age);
      formData.append("details", this.form.details);
      formData.append("count", this.form.count);

      const response = await API.updatePlaymate(this.id, formData);
      this.$router.push({
        name: "index",
        params: { message: response.message },
      });
    },
  },
};
</script>
<style lang="scss">
main {
  .head {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    form {
      max-width: 420px;
      margin: 30px auto;
      background: white;
      text-align: left;
      padding: 40px;
      border-radius: 10px;
    }
    label {
      color: #aaa;
      display: inline-block;
      margin: 25px 0 15px;
      font-size: 0.6em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
    }
    input {
      display: block;
      padding: 10px 6px;
      width: 100%;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid #ddd;
      color: #555;
      //*
    }
    button {
      display: block;
      width: 150px;
      margin: 30px 0px auto;
      border-radius: 5px;
      border: 1px solid #ddd;
      padding: 5px 10px;
    }
  }
}
</style>

// const response = await API.createPlaymate(formData); // this.$router.push({
// name: "index", // params: { message: response.message }, // });
