<template>
  <div class="fx fx-col story-mode">
    <div v-if="!storyIsDone" class="fx fx-col stage">
      <div class="composer-wrapper" v-if="composerIsDisplayed">
        <div v-if="narrativeIsPending" class="blocker">
        </div>
        <QubitComposer />
      </div>
      <div class="fx fx-row" :style="`height: ${!composerIsDisplayed ? '100%' : '20%' }`">
        <NarrativeDisplay :narratorState="narrator" :narrativeIsPending="narrativeIsPending" />
      </div>
      <img src="/svg/qitty.svg" class="qitty" :style="{ bottom: composerIsDisplayed ? '-12vh' : '25vh' }" />
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
    height: 100%;
    background-color: black;

    .stage {
      height: 100%;
    }

    .composer-wrapper {
      height: 80%;
      position: relative;

      .blocker {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: black;
        opacity: 0.3;
        z-index: 10;
      }
    }

    .qitty {
      position: fixed;
      right: 3rem;
      width: 25vw;
      height: auto;
      z-index: 15;
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
