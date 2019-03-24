<template>
  <QubitComposer />
</template>

<script>
import { mapActions } from 'vuex'

import QubitComposer from '@/components/QubitComposer'

export default {
  name: 'ComposerMode',
  components: {
    QubitComposer
  },
  methods: {
    ...mapActions([
      'getComposerStatus'
    ])
  },
  mounted () {
    this.getComposerStatus()
  }
}
</script>

<style lang="scss" scoped>

</style>
