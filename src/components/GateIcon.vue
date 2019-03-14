<template>
  <div class="gate-icon" @click="onClickGate()">
    <h1>{{ symbol.toUpperCase() }}</h1>
  </div>
</template>

<script>
export default {
  name: 'GateIcon',
  props: {
    symbol: String,
    onClickGate: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .gate-icon {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    background-color: white;
    color: black;
    margin: 10px;

    h1 {
      margin: auto;
    }
  }
</style>
