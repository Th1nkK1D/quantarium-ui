<template>
  <div class="fx fx-row main-menu">
    <div class="fx fx-col fx-justcent">
      <img src="/img/quantarium_logo.png" alt="">
    </div>
    <div class="fx fx-x1 fx-col fx-justcent">
      <h1>Quantarium</h1>

      <router-link to="story">Story Mode</router-link>
      <router-link to="composer">Composer Mode</router-link>

      <span>&copy; Quantarium Team {{ new Date().getFullYear() }} - All right reserved</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<style lang="scss" scoped>
  .main-menu {
    height: 100vh;
    padding: 0 10vw;
    text-align: center;
    color: white;
    background-color: black;

    img {
      width: 30vw;
      height: 30vw;
      margin-right: 10vw;
    }

    h1 {
      margin-top: 0;
      font-size: 4em;
      font-weight: normal;
    }

    a {
      color: white;
      text-decoration: none;
      padding: 0.5em;
      border: 1px solid white;
      border-radius: 2px;
      margin: 0 0 0.5em;

      &:active {
        color: black;
        background-color: white;
      }
    }

    span {
      font-size: 0.75em;
      margin-top: 2em;
    }
  }
</style>
