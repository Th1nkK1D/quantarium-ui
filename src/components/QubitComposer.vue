<template>
  <div class="fx-col qubit-composer">
    <!-- title row -->
    <div class="fx-row">
      <h3 class="title">Qubit Composer</h3>
    </div><!-- end of title row -->
    <!-- stage -->
    <div class="fx-row fx-x2" style="padding: 2em">
      <GateStage class="fx-x1" :appliedGates="composer.appliedGates" :onRemoveGate="popGate"/>
      <div v-if="composer.allowMeasure" class="fx-col options">
        <button v-if="!composer.collapsed" @click="measure(1000)">Measure 1000 times</button>
        <button v-else @click="unmeasure()">Undo measurement</button>
      </div>
    </div><!-- end of stage -->
    <!-- gate tray -->
    <div class="fx-col fx-x2">
      <GateTray v-if="!composer.collapsed" :onFocusGate="previewGate" :onSelectGate="pushGate" :availableGates="composer.availableGates" />
      <MeasurementResult v-else :measurement="composer.measurement" />
    </div><!-- end of gate tray -->
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
    ])
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
      button {
        background-color: white;
        color: black;
        border-radius: 3px;
        padding: 7px;
        margin: auto 3px;

        &.is-dark {
          background-color: black;
          color: white;
          border: 1px solid white;
        }
      }
    }
  }
</style>
