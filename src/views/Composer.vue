<template>
  <div class="fx-col composer">
    <div class="fx-row">
      <h3 class="title">Quantarium | Composer</h3>
    </div>
    <div class="fx-row fx-x2">stage</div>
    <div class="fx-row fx-x1">
      <div class="fx-col fx-x2">gate panel</div>
      <div class="fx-col fx-x1">option</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Composer'
}
</script>

<style lang="scss" scoped>
  .composer {
    width: 100vw;
    height: 100vh;
    background-color: #2E1A57;
    color: white;
    overflow: hidden;

    .title {
      text-align: center;
    }
  }
</style>
