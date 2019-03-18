<template>
  <div class="fx-col gate-stage">
    <div class="fx-row stage-fg">
      <GateIcon v-for="(gateSym, g) in appliedGates" :key="g" :symbol="gateSym" />
      <span v-if="appliedGates.length > 0" @click="onRemoveGate">X</span>
    </div>
    <div class="fx-row stage-bg">
      <div class="fx-col zero">0</div>
      <div class="fx-col fx fx-x1" style="margin-top: 0.2em">
        <div class="line"></div>
      </div>
      <div class="fx-col">&gt;</div>
    </div>
  </div>
</template>

<script>
import GateIcon from '../components/GateIcon'

export default {
  name: 'GateStage',
  props: {
    appliedGates: Array,
    onRemoveGate: Function
  },
  components: {
    GateIcon
  }
}
</script>

<style lang="scss" scoped>
  .gate-stage {
    margin: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .stage-fg {
      position: absolute;
      margin: auto 2em;
      right: 0;
      left: 0;
      z-index: 1;

      .gate-icon {
        margin: auto 1em;
      }
    }

    .stage-bg {
      color: #B948D5;
      font-weight: bold;
      font-size: 1.2em;

      .zero {
        padding-right: 0.5em;
      }

      .line {
        background-color: #B948D5;
        height: 0.2em;
        margin: auto 0;
        width: 100%;
      }
    }
  }
</style>
