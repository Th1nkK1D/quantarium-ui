<template>
  <div class="fx-col composer">
    <!-- title row -->
    <div class="fx-row">
      <h3 class="title">Quantarium | Composer</h3>
    </div><!-- end of title row -->
    <!-- stage -->
    <div class="fx-row fx-x2">
      <GateIcon v-for="(gateSym, g) in appliedGates" :key="g" :symbol="gateSym" />
      <span v-if="appliedGates.length > 0" @click="removeGate()">Remove</span>
    </div><!-- end of stage -->
    <!-- controller row -->
    <div class="fx-row fx-x1">
      <!-- gate tray -->
      <div class="fx-col fx-x2">
        <div class="fx-row">
          <!-- gates list -->
          <div class="fx-col fx-x2">
            <div class="fx-row">
              <GateIcon v-for="gate in availableGates" :key="gate.symbol" :symbol="gate.symbol" :onClickGate="() => onClickGate(gate)" />
            </div>
          </div><!-- end of gates list -->
          <div class="fx-col fx-x1">
            {{ focusedGate }}
          </div>
        </div>
      </div><!-- end of gate tray -->
      <!-- options -->
      <div class="fx-col fx-x1">
        option
      </div><!-- end of options -->
    </div><!-- end of controller row -->
  </div>
</template>

<script>
import GateIcon from '../components/GateIcon'

export default {
  name: 'Composer',
  components: {
    GateIcon
  },
  data () {
    return {
      availableGates: [
        { symbol: 'h', name: 'Hadamard Gate', desc: 'desc' },
        { symbol: 'x', name: 'Pauli-X Gate', desc: 'desc' },
        { symbol: 'y', name: 'Pauli-Y Gate', desc: 'desc' },
        { symbol: 'z', name: 'Pauli-Z Gate', desc: 'desc' }
      ],
      appliedGates: [],
      focusedGate: {}
    }
  },
  methods: {
    onClickGate (gate) {
      if (gate !== this.focusedGate) {
        this.focusedGate = gate
      } else {
        this.appliedGates.push(gate.symbol)
        this.focusedGate = {}
      }
    },
    removeGate () {
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
