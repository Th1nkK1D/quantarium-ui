<template>
  <div class="gate-icon" :style="`background-image: linear-gradient(135deg, ${colors.join(', ')});`" @click="onClickGate()">
    <h1>{{ symbol.toUpperCase() }}</h1>
  </div>
</template>

<script>
export default {
  name: 'GateIcon',
  props: {
    symbol: String,
    colors: Array,
    onClickGate: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .gate-icon {
    width: 4em;
    height: 4em;
    display: flex;
    justify-content: center;
    color: white;
    margin: 0.8em;
    border-radius: 0.3em;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);

    h1 {
      margin: auto;
    }
  }
</style>
