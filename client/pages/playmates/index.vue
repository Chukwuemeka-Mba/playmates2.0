<template lang="">
  <main>
    <div class="header">
      <h1>Here's your Play history</h1>
    </div>

    <div class="playmates">
      <div v-for="(playmate, index) in playmates" :key="playmate._id">
        <div class="card">
          <div class="play-title">
            <img width="150" :src="`/${playmate.image}`" alt="" />
          </div>
          <div class="play-text">
            <h2>{{ playmate.name }}</h2>
            <p>{{ playmate.age }}</p>
          </div>
          <div class="play-det">
            <p>{{ playmate.details.substring(0, 100) + "..." }}</p>
          </div>

          <div class="buttons">
            <nuxt-link :to="'playmates/playmate/' + playmate._id">
              <button class="details" type="submit">View Details</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      playmates: [],
    };
  },
  async fetch() {
    this.$axios
      .get("/api/playmates")
      .then((res) => {
        this.playmates = res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>
<style lang="scss">
main {
  .header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .playmates {
    align-items: center;
    margin: 20px 30px;

    .card {
      box-shadow: 1px 2px 3px #cccc;
      margin: 5px;
      .play-text {
        background-color: #ffcccc;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        text-transform: uppercase;
        letter-spacing: 5px;
        padding: 5px 10px;
        h2 {
          font-size: 14px;
        }
      }
      .play-det {
        padding: 5px 10px;
      }
      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin: 30px 0px;
        .details {
          background-color: rgb(19, 145, 218);
          border-radius: 5px;
          padding: 5px 10px;
        }
      }
    }
  }
}
</style>
