<template>
  <div class="fx-col measurement-result">
    <div class="text-center">
      <strong>{{ langSwitch(['Measurement Result', 'ผลลัพธ์จากการวัด']) }}</strong>
    </div>
    <div class="fx-row">
      <div class="fx-col fx-justcent text-center">
        <div class="label" style="color: #3B71EB;">0</div>
        <div>{{ measurement.result[0] }} {{ langSwitch(['times', 'ครั้ง']) }}</div>
      </div>
      <div class="pie-chart">
        <BinaryPieChart :values="measurement.result" :colors="['#3B71EB', '#EB3B93']" />
      </div>
      <div class="fx-col fx-justcent text-center">
        <div class="label" style="color: #EB3B93;">1</div>
        <div>{{ measurement.result[1] }} {{ langSwitch(['times', 'ครั้ง']) }}</div>
      </div>
    </div>
    <div class="text-center subtitle">
      {{ langSwitch(['From total', 'จากทั้งหมด']) }} {{ measurement.batchSize }} {{ langSwitch(['times', 'ครั้ง']) }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BinaryPieChart from './BinaryPieChart'

export default {
  name: 'MeasurementResult',
  components: {
    BinaryPieChart
  },
  props: {
    measurement: Object
  },
  computed: {
    ...mapGetters([
      'langSwitch'
    ])
  }
}
</script>

<style lang="scss" scoped>
.measurement-result {
  .text-center {
    text-align: center;
  }

  .pie-chart {
    padding: 2em;
  }

  .label {
    font-size: 2em;
  }

  .subtitle {
    font-size: 0.8em;
  }
}
</style>
