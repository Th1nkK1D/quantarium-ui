<template>
  <div class="fx-row">
    <!-- gates list -->
    <div class="fx-col fx-x2">
      <div class="fx-row">
        <GateIcon v-for="gate in availableGates" :key="gate.symbol" :symbol="gate.symbol" :onClickGate="() => onClickGate(gate)" />
      </div>
    </div><!-- end of gates list -->
    <!-- gate detail -->
    <div class="fx-col fx-x1">
      <div v-if="focusedGate === null">
        <strong>Here is available gates</strong> <br>
        - Click to preview the gate <br>
        - Click it again to apply
      </div>
      <div v-else>
        <strong>{{ focusedGate.name }}</strong> <br>
        {{ focusedGate.description }}
      </div>
    </div><!-- end of gate detail -->
  </div>
</template>

<script>
import GateIcon from '../components/GateIcon'

export default {
  name: 'GateTray',
  props: ['onFocusGate', 'onSelectGate'],
  components: {
    GateIcon
  },
  data () {
    return {
      availableGates: [
        { symbol: 'h', name: 'Hadamard Gate', description: 'Combination of two rotations, π about the Z-axis followed by π/2 about the Y-axis' },
        { symbol: 'x', name: 'Pauli-X Gate', description: 'Apply rotation around the X-axis by π radians' },
        { symbol: 'y', name: 'Pauli-Y Gate', description: 'Apply rotation around the Y-axis by π radians' },
        { symbol: 'z', name: 'Pauli-Z Gate', description: 'Apply rotation around the Z-axis by π radians' }
      ],
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

</style>
