<template lang="">
  <div class="body">
    <div class="">
      <h1>Hello Mate</h1>

      <h3>{{ $route.params.details }}</h3>
    </div>

    <div>
      <p>Here are the details of your matings activities</p>
    </div>

    <div>
      <div>
        <h1>Name: {{ playmate.name }}</h1>
        <p>Age: {{ playmate.age }}</p>
        <p>Details{{ playmate.details }}</p>
        <p>Play Count: {{ playmate.count }}</p>
        <div v-if="playmate.image">
          <p>Image:</p>
          <img :src="`/${playmate.image}`" alt="" />
        </div>
        <div>
          <p>{{ playmate.created }}</p>
        </div>
      </div>
    </div>
    <div class="buttons">
      <nuxt-link :to="`/playmates/edit/${route}`">
        <button class="edit" type="submit">Edit</button>
      </nuxt-link>
      <button class="delete" type="submit" @click="deletePlaymate">
        Delete
      </button>
    </div>
  </div>
</template>
<script>
import API from "~/plugins/api";

export default {
  data() {
    return {
      playmate: [],
      route: this.$route.params.details,
    };
  },
  async fetch() {
    this.$axios
      .get("/api/playmates/" + `${this.route}`)
      .then((res) => {
        this.playmate = res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    async deletePlaymate() {
      const response = await API.deletePlaymate(this.route);
      this.$router.push({
        name: "index",
        params: { message: response.message },
      });
    },
  },
};
</script>
<style lang="scss">
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .buttons {
    .delete {
      background-color: rgb(243, 61, 61);
      border-radius: 5px;
      padding: 5px 10px;
    }
    .edit {
      background-color: #3df364;
      border-radius: 5px;
      padding: 5px 10px;
    }
  }
}
</style>
