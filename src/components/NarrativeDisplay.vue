<template>
  <div class="narrative-display">
    <div class="content">
      <p v-for="t in narratorState.text" :key="t">{{ t }}</p>
    </div>
    <div v-if="stage.passConditions[0] && stage.passConditions[0].trigger === 'narrator-text-read'" class="next-btn" @click="onClickNext()">
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'NarrativeDisplay',
  props: {
    narratorState: Object
  },
  computed: {
    ...mapState([
      'stage'
    ])
  },
  methods: {
    ...mapActions([
      'fireEvent'
    ]),
    onClickNext () {
      this.fireEvent({
        trigger: 'narrator-text-read'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .narrative-display {
    background-color: black;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;

    .content {
      color: white;
      max-width: calc(100% - 4em);
      margin: auto;
      text-align: center;

      p {
        font-size: 1.2em;
        margin: .2em 0;
      }
    }

    .next-btn {
      color: white;
      position: absolute;
      bottom: 1em;
      right: 1em;
      padding: .5em;
    }
  }
</style>
