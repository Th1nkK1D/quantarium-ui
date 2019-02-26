<template>
  <div class="fx-col qubit-composer">
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
        <GateTray v-if="!collapsed" :onFocusGate="previewGate" :onSelectGate="pushGate" />
        <MeasurementResult v-else :measurement="measurement" />
      </div><!-- end of gate tray -->
      <!-- options -->
      <div class="fx-col fx-x1 options">
        <!-- <button v-if="!collapsed" @click="measure()">Measure once</button>
        <button v-else @click="remeasure()">Measure again</button> -->
        <button v-if="!collapsed" @click="measure(1000)">Measure 1000 times</button>
        <button v-else @click="unmeasure()">Undo measurement</button>
        <!-- <button class="is-dark" @click="reset()">Reset</button> -->
      </div><!-- end of options -->
    </div><!-- end of controller row -->
  </div>
</template>

<script>
import GateStage from '@/components/GateStage'
import GateTray from '@/components/GateTray'
import MeasurementResult from '@/components/MeasurementResult'

import Qapi from '@/lib/Qapi'

export default {
  name: 'QubitComposer',
  components: {
    GateStage,
    GateTray,
    MeasurementResult
  },
  data () {
    return {
      appliedGates: [],
      collapsed: false,
      measurement: {
        batchSize: 0,
        result: [0, 0]
      }
    }
  },
  async mounted () {
    Qapi.getStatus().then(state => {
      console.log(state)
      this.appliedGates = state.gates
      this.collapsed = state.collapsed !== false
      this.measurement = state.measurement
    })
  },
  methods: {
    previewGate (gate) {
      if (!this.collapsed) {
        Qapi.previewGate(gate.symbol).then(state => console.log(state))
      }
    },
    pushGate (gate) {
      if (!this.collapsed) {
        this.appliedGates.push(gate.symbol)
        Qapi.pushGate(gate.symbol).then(state => console.log(state))
      }
    },
    popGate () {
      if (!this.collapsed) {
        this.appliedGates.splice(this.appliedGates.length - 1, 1)
        Qapi.popGate().then(state => console.log(state))
      }
    },
    measure (batchSize = 1) {
      Qapi.measure(batchSize).then(measurement => {
        console.log(measurement)
        this.measurement = measurement
        this.collapsed = true
      })
    },
    unmeasure () {
      this.measurement = {
        batchSize: 0,
        result: [0, 0]
      }
      this.collapsed = false

      return Qapi.unmeasure()
    },
    remeasure () {
      const batchSize = this.measurement.batchSize

      this.unmeasure().then(() => this.measure(batchSize))
    },
    reset () {
      this.appliedGates = []
      this.collapsed = false
      this.measurement = {
        batchSize: 0,
        result: [0, 0]
      }

      Qapi.reset().then(state => console.log(state))
    }
  }
}
</script>

<style lang="scss" scoped>
  .qubit-composer {
    width: 100%;
    height: 100%;
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
