<template>
  <div class="fx-row">
    <!-- gates list -->
    <div class="fx-col fx-x2">
      <div class="fx-row">
        <GateIcon v-for="gate in gateList" :key="gate.symbol" :symbol="gate.symbol" :onClickGate="() => onClickGate(gate)" />
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
import GateIcon from './GateIcon'
import gates from '@/assets/gates.json'

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
  computed: {
    gateList () {
      return this.availableGates.map(gateSymbol => gates.find(gate => gate.symbol === gateSymbol))
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
