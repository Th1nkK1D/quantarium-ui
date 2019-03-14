<template>
  <div class="fx-row measurement-result">
    <div class="fx-col">
      <strong>Measurement result</strong>
      Number of measurement: <br>
      {{ measurement.batchSize }}
    </div>
    <div class="fx-col fx-x1">
      <div class="fx-row">0: {{ measurement.result[0] }}</div>
      <div class="fx-row">1: {{ measurement.result[1] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeasurementResult',
  props: {
    measurement: Object
  }
}
</script>

<style lang="scss" scoped>

</style>
