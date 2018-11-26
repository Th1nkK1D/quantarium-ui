<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

</style>
