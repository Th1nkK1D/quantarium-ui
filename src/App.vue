<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

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
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
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

</style>
