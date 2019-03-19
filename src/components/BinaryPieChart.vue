<template>
  <div class="pie" :style="`background-color: ${pieColor}`">
    <div class="pie-segment" :style="`--color: ${segmentColor}; --value: ${segmentValue}; --offset: ${segmentOffset};`"></div>
  </div>
</template>

<script>
export default {
  name: 'BinaryPieChart',
  props: {
    values: Array,
    colors: Array
  },
  computed: {
    pieColor () {
      if (this.values) {
        return this.values[0] > this.values[1] ? this.colors[0] : this.colors[1]
      } else {
        return undefined
      }
    },
    segmentColor () {
      if (this.values) {
        return this.values[0] > this.values[1] ? this.colors[1] : this.colors[0]
      } else {
        return undefined
      }
    },
    segmentValue () {
      if (this.values) {
        return Math.min(this.values[0], this.values[1]) * 360 / (this.values[0] + this.values[1])
      } else {
        return 0
      }
    },
    segmentOffset () {
      if (this.segmentValue) {
        return (180 - this.segmentValue) / 2 + (this.values[0] > this.values[1] ? 0 : 180)
      } else {
        return 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .pie {
    height: 10em;
    width: 10em;
    position: relative;
    border-radius: 100%;
    overflow: hidden;

    .pie-segment {
      height: 100%;
      width: 100%;
      overflow: hidden;
      position: absolute;
      transform: translate(0, -50%) rotate(90deg) rotate(calc(var(--offset, 0) * 1deg));
      transform-origin: 50% 100%;

      &:before {
        background-color: var(--color, white);
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        transform: translate(0, 100%) rotate(calc(var(--value, 180) * 1deg));
        transform-origin: 50% 0;
      }
    }
  }
</style>
