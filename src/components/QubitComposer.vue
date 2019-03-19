<template>
  <div class="fx-col qubit-composer">
    <!-- title row -->
    <div class="fx-row">
      <h3 class="title">Qubit Composer</h3>
    </div><!-- end of title row -->
    <!-- stage -->
    <div class="fx-row fx-x3" style="padding: 4em 4em 0">
      <GateStage class="fx-x1" :appliedGates="appliedGates" :onRemoveGate="popGate" :isCollapsed="composer.collapsed"/>
      <div v-if="composer.allowMeasure" class="fx-col options">
        <button v-if="!composer.collapsed" @click="measure(1000)">
          Measure<br>x1000
        </button>
        <button v-else @click="unmeasure()">
          Revert
        </button>
      </div>
    </div><!-- end of stage -->
    <!-- under stage -->
    <div class="fx-row fx-x2 fx-justcent under-stage">
      <GateTray v-if="!composer.collapsed" :onFocusGate="previewGate" :onSelectGate="pushGate" :availableGates="availableGates" />
      <MeasurementResult v-else :measurement="composer.measurement" />
    </div><!-- end of under stage -->
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import GateStage from '@/components/GateStage'
import GateTray from '@/components/GateTray'
import MeasurementResult from '@/components/MeasurementResult'

export default {
  name: 'QubitComposer',
  components: {
    GateStage,
    GateTray,
    MeasurementResult
  },
  computed: {
    ...mapState([
      'composer'
    ]),
    availableGates () {
      return this.composer.availableGates.map(ag => this.composer.gateList.find(gl => ag === gl.symbol))
    },
    appliedGates () {
      return this.composer.appliedGates.map(ag => this.composer.gateList.find(gl => ag === gl.symbol))
    }
  },
  methods: {
    ...mapActions([
      'previewGate',
      'pushGate',
      'popGate',
      'measure',
      'unmeasure',
      'resetComposer'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .qubit-composer {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(160deg, #160E29, #2E1A57);
    color: white;
    overflow: hidden;

    .title {
      text-align: center;
      margin: 10px auto;
    }

    .options {
      margin-left: 1em;

      button {
        width: 7em;
        height: 7em;
        background: none;
        color: #F3C4FF;
        border: 2px solid #F3C4FF;
        border-radius: 50%;
        margin: auto 0;
        font-weight: bold;
        text-align: center;
      }
    }
  }
</style>
