<template>
  <div class="gate-icon" :style="`background-image: linear-gradient(135deg, ${colors.join(', ')});`" @click="onClickGate()">
    <h1>{{ symbol.toUpperCase() }}</h1>
    <span class="remove-btn" v-if="removable" @click="onRemove">
      x
    </span>
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
    },
    removable: Boolean,
    onRemove: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .gate-icon {
    position: relative;
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

    .remove-btn {
      position: absolute;
      right: -0.7em;
      top: -0.7em;
      background-color: white;
      color: black;
      width: 1.2em;
      height: 1.2em;
      font-size: 0.7em;
      padding: 0.3em;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
    }
  }
</style>
