<template>
  <div class="main-menu">
    <h1>Welcome to Quantarium Beta 1</h1>

    <router-link to="story">Story Mode</router-link>
    <br>
    <router-link to="composer">Composer Mode</router-link>
  </div>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<style lang="scss" scoped>
  .main-menu {
    text-align: center;
  }
</style>
