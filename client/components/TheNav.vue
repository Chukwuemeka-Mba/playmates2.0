<template lang="">
  <navbar>
    <div class="icon">
      <nuxt-link to="/"> <h2>PLAYMATES</h2></nuxt-link>
    </div>

    <div class="links">
      <ul>
        <li><nuxt-link to="/"> Home</nuxt-link></li>
        <li><nuxt-link to="/playmates"> Playmates</nuxt-link></li>
      </ul>
    </div>
  </navbar>
</template>
<script>
export default {
  name: "TheNav",
};
</script>
<style lang="scss">
navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 3px -4px 5px gray;
  background-color: #000;
  .icon {
    a {
      color: #fff;
      text-decoration: none;
      h2 {
        line-height: 16px;
        letter-spacing: 5px;
        font-size: 15px;
      }
    }
  }

  .links {
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      li {
        list-style-type: none;
        gap: 20px;
        a {
          color: rgb(255, 0, 85);
          opacity: 0.9;
          text-decoration: none;
          text-transform: uppercase;
          margin: 0px 20px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
