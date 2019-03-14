<template>
  <div class="story-mode">
    <div class="composer-wrapper" v-if="composer.isDisplay">
      <div v-if="narrativePending" class="blocker">
      </div>
      <QubitComposer />
    </div>
    <div class="fx-x1">
      <NarrativeDisplay :narratorState="narrator" :narrativePending="narrativePending" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

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
      'narrator',
      'composer'
    ]),
    ...mapGetters([
      'narrativePending'
    ])
  },
  methods: {
    ...mapActions([
      'loadAllScenes',
      'resetComposer'
    ])
  },
  async mounted () {
    await this.resetComposer()
    await this.loadAllScenes()
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
      position: relative;

      .blocker {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: black;
        opacity: 0.3;
      }
    }
  }
</style>
