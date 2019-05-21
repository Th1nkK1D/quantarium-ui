<template>
  <div class="fx fx-row main-menu">
    <div class="fx fx-col fx-justcent">
      <img src="/img/quantarium_logo.png" alt="">
    </div>
    <div class="fx fx-x1 fx-col fx-justcent menu-buttons">
      <h1>Quantarium</h1>

      <router-link to="story">{{ langSwitch(['Story Mode', 'โหมดเนื้อเรื่อง']) }}</router-link>
      <router-link to="composer">{{ langSwitch(['Composer Mode', 'โหมดอิสระ']) }}</router-link>

      <span @click="toggleNextLanguage()">- {{ langSwitch(['ภาษาไทย', 'English']) }} -</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MainMenu',
  computed: {
    ...mapGetters([
      'langSwitch'
    ])
  },
  methods: {
    ...mapActions([
      'toggleNextLanguage'
    ])
  }
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

    span {
      font-size: 0.8em;
      margin-top: 1em;
    }
  }
</style>
