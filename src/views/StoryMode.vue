<template>
  <div class="story-mode">
    <div class="composer-wrapper">
      <QubitComposer />
    </div>
    <div class="fx-x1">
      <NarrativeDisplay :text="narrator.text" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import QubitComposer from '@/components/QubitComposer'
import NarrativeDisplay from '@/components/NarrativeDisplay'

export default {
  name: 'StoryMode',
  components: {
    QubitComposer,
    NarrativeDisplay
  },
  computed: {
    ...mapState([
      'narrator'
    ])
  },
  methods: {
    ...mapActions([
      'loadAllScenes'
    ])
  },
  mounted () {
    this.loadAllScenes()
  }
}
</script>

<style lang="scss" scoped>
  .story-mode {
    height: 100vh;
    display: flex;
    flex-direction: column;

    .composer-wrapper {
      height: 85vh;
    }
  }
</style>
