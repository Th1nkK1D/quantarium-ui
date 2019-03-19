<template>
  <div class="fx-col measurement-result">
    <div>
      <strong>Measurement result</strong>
    </div>
    <div class="fx-row">
      <div class="fx">0: {{ measurement.result[0] }}</div>
      <div>
        <BinaryPieChart :values="measurement.result" :colors="['#3B71EB', '#EB3B93']" />
      </div>
      <div class="fx">1: {{ measurement.result[1] }}</div>
    </div>
      <div>
      Number of measurement: {{ measurement.batchSize }}
    </div>
  </div>
</template>

<script>
import BinaryPieChart from './BinaryPieChart'

export default {
  name: 'MeasurementResult',
  components: {
    BinaryPieChart
  },
  props: {
    measurement: Object
  }
}
</script>

<style lang="scss" scoped>

</style>
