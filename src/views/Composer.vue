<template>
  <div class="fx-col composer">
    <!-- title row -->
    <div class="fx-row">
      <h3 class="title">Quantarium | Composer</h3>
    </div><!-- end of title row -->
    <!-- stage -->
    <div class="fx-row fx-x2">
      <GateStage :appliedGates="appliedGates" :onRemoveGate="popGate"/>
    </div><!-- end of stage -->
    <!-- controller row -->
    <div class="fx-row fx-x1">
      <!-- gate tray -->
      <div class="fx-col fx-x2">
        <GateTray :onSelectGate="pushGate" />
      </div><!-- end of gate tray -->
      <!-- options -->
      <div class="fx-col fx-x1">
        option
      </div><!-- end of options -->
    </div><!-- end of controller row -->
  </div>
</template>

<script>
import GateStage from '../components/GateStage'
import GateTray from '../components/GateTray'

export default {
  name: 'Composer',
  components: {
    GateStage,
    GateTray
  },
  data () {
    return {
      appliedGates: []
    }
  },
  methods: {
    pushGate (gate) {
      this.appliedGates.push(gate.symbol)
    },
    popGate () {
      this.appliedGates.splice(this.appliedGates.length - 1, 1)
    }
  }
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
      margin: 10px auto;
    }
  }
</style>
