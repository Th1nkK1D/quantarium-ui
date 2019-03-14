<template>
  <div class="story-mode">
    <div v-if="!storyIsDone" class="fx fx-col fx-x1">
      <div class="composer-wrapper" v-if="composerIsDisplayed">
        <div v-if="narrativeIsPending" class="blocker">
        </div>
        <QubitComposer />
      </div>
      <div class="fx-x1">
        <NarrativeDisplay :narratorState="narrator" :narrativeIsPending="narrativeIsPending" />
      </div>
    </div>
    <div v-else class="ending-menu">
      <div>
        <h2>Story mode is completed</h2>
          <router-link to="/">Return to main menu</router-link>
      </div>
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
      'narrator'
    ]),
    ...mapGetters([
      'narrativeIsPending',
      'composerIsDisplayed',
      'storyIsDone'
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

    .ending-menu {
      display: flex;
      flex: 1;
      justify-content: center;
      background-color: black;
      color: white;

      div {
        margin: auto;
        text-align: center;
      }
    }
  }
</style>
