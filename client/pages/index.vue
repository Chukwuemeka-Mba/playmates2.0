<template>
  <main>
    <div class="title">
      <h1>Home Page</h1>
      <p>Welcome to Playmates.com</p>
    </div>

    <div class="button">
      <nuxt-link to="/create">
        <button>Create New Memory</button>
      </nuxt-link>
    </div>
  </main>
</template>

<script>
export default {
  name: "index",
};
</script>

<style lang="scss" scoped>
body {
  margin: 0px;
}
main {
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    button {
      display: flex;
      padding: 5px 10px;
      justify-content: center;
      letter-spacing: 3px;
      font-weight: 400;
      box-shadow: 1px 2px 5px #f79393;
      background-color: #fff;
    }
  }
}
</style>
