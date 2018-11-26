<template>
  <div class="fx-row">
    <GateIcon v-for="(gateSym, g) in appliedGates" :key="g" :symbol="gateSym" />
    <span v-if="appliedGates.length > 0" @click="onRemoveGate">X</span>
  </div>
</template>

<script>
import GateIcon from '../components/GateIcon'

export default {
  name: 'GateStage',
  props: ['appliedGates', 'onRemoveGate'],
  components: {
    GateIcon
  }
}
</script>
