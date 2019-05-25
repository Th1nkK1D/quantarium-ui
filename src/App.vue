<template>
  <div id="app">
    <router-view/>
    <router-link v-if="$route.path !== '/'" class="nav-icon" to="/">Q</router-link>
  </div>
</template>

<style lang="scss">
@keyframes glowing {
  0%   { box-shadow: 0 0 10px 0 rgba(255, 253, 133, 0.8); }
  50% { box-shadow: 0 0 20px 0 rgba(255, 253, 133, 0.8); }
  100%   { box-shadow: 0 0 10px 0 rgba(255, 253, 133, 0.8); }
}

html, body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  position: fixed;
}

body {
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

#app {
  font-family: 'Raleway', 'Pridi', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;

  .nav-icon {
    position: fixed;
    top: 0;
    padding: 10px 15px;
    color: white;
    font-weight: bold;
    font-size: 1.2em;
    text-decoration: none;
    z-index: 15;
  }
}

.fx {
  display: flex;
}

.fx-row {
  display: flex;
  flex-direction: row;
}

.fx-col {
  display: flex;
  flex-direction: column;
}

.fx-x1 {
  flex: 1;
}

.fx-x2 {
  flex: 2;
}

.fx-x3 {
  flex: 3;
}

.fx-justcent {
  justify-content: center;
}

.menu-buttons {
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
}

.is-objective {
  animation: glowing 1s infinite;
}

</style>
