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
      'resetComposer'
    ])
  },
  mounted () {
    this.resetComposer()
  }
}
</script>

<style lang="scss" scoped>

</style>
