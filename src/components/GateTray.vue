<template>
  <div class="fx-col gate-tray">
    <!-- gates list -->
    <div class="fx-row fx-justcent">
      <GateIcon
        v-for="gate in availableGates"
        :key="gate.symbol"
        :symbol="gate.symbol"
        :colors="gate.colors"
        :onClickGate="() => onClickGate(gate)"
        :class="{ 'active-gate':  focusedGate && gate.symbol === focusedGate.symbol }"
      />
    </div><!-- end of gates list -->
    <!-- gate detail -->
    <div class="fx-col subtext">
      <div v-if="focusedGate === null">
        Available quantum gates
      </div>
      <div v-else>
        <strong>{{ focusedGate.name }}</strong>
        {{ focusedGate.description }}
      </div>
    </div><!-- end of gate detail -->
  </div>
</template>

<script>
import GateIcon from './GateIcon'

export default {
  name: 'GateTray',
  props: {
    onFocusGate: Function,
    onSelectGate: Function,
    availableGates: Array
  },
  components: {
    GateIcon
  },
  data () {
    return {
      focusedGate: null
    }
  },
  methods: {
    onClickGate (gate) {
      if (gate !== this.focusedGate) {
        this.focusedGate = gate
        this.onFocusGate(gate)
      } else {
        this.focusedGate = null
        this.onSelectGate(gate)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .gate-tray {

    .gate-icon {
      transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);

      &.active-gate {
        transform: translateY(-1em);
      }
    }

    .subtext {
      padding: 0.5em;
      text-align: center;
    }
  }
</style>
