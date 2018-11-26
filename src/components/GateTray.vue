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
      {{ focusedGate }}
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
        { symbol: 'h', name: 'Hadamard Gate', description: 'description' },
        { symbol: 'x', name: 'Pauli-X Gate', description: 'description' },
        { symbol: 'y', name: 'Pauli-Y Gate', description: 'description' },
        { symbol: 'z', name: 'Pauli-Z Gate', description: 'description' }
      ],
      focusedGate: {}
    }
  },
  methods: {
    onClickGate (gate) {
      if (gate !== this.focusedGate) {
        this.focusedGate = gate
        this.onFocusGate(gate)
      } else {
        this.focusedGate = {}
        this.onSelectGate(gate)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
