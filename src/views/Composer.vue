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
        <GateTray v-if="!collapsed" :onSelectGate="pushGate" />
        <MeasurementResult v-else :result="measurementRes"/>
      </div><!-- end of gate tray -->
      <!-- options -->
      <div class="fx-col fx-x1 options">
        <button v-if="!collapsed" @click="measure()">Measure once</button>
        <button v-else @click="remeasure()">Measure again</button>
        <button v-if="!collapsed" @click="measure(1000)">Measure 1000 times</button>
        <button v-else @click="unmeasure()">Undo measurement</button>
        <button class="is-dark" @click="reset()">Reset</button>
      </div><!-- end of options -->
    </div><!-- end of controller row -->
  </div>
</template>

<script>
import GateStage from '../components/GateStage'
import GateTray from '../components/GateTray'
import MeasurementResult from '../components/MeasurementResult'

import Qapi from '../lib/Qapi'

export default {
  name: 'Composer',
  components: {
    GateStage,
    GateTray,
    MeasurementResult
  },
  data () {
    return {
      appliedGates: [],
      collapsed: false,
      lastBatchSize: 0,
      measurementRes: {}
    }
  },
  async mounted () {
    Qapi.getStatus().then(state => {
      console.log(state)
      this.appliedGates = state.gates
      this.collapsed = state.collapsed !== false
    })
  },
  methods: {
    pushGate (gate) {
      if (!this.collapsed) {
        this.appliedGates.push(gate.symbol)
      }
    },
    popGate () {
      if (!this.collapsed) {
        this.appliedGates.splice(this.appliedGates.length - 1, 1)
      }
    },
    measure (batchSize = 1) {
      this.lastBatchSize = batchSize
      this.collapsed = true
    },
    unmeasure () {
      this.collapsed = false
    },
    remeasure () {
      this.unmeasure()
      this.measure(this.lastBatchSize)
    },
    reset () {
      this.appliedGates = []
      this.collapsed = false
      this.measurementRes = {}
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

    .options {
      button {
        background-color: white;
        color: black;
        border-radius: 3px;
        padding: 7px;
        margin: 3px;

        &.is-dark {
          background-color: black;
          color: white;
          border: 1px solid white;
        }
      }
    }
  }
</style>
