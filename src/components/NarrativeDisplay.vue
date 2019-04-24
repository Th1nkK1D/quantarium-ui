<template>
  <div class="fx-row narrative-display">
    <div class="fx-x2 content">
      <p>{{ langSwitch(narratorState.text) }}</p>
      <div v-if="narrativeIsPending" class="next-btn" @click="onClickNext()"> {{ langSwitch(['next', 'ต่อไป']) }} > </div>
      <div class="fx holder">
        <div class="triangle"></div>
      </div>
    </div>
    <div class="fx-x1"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'NarrativeDisplay',
  props: {
    narratorState: Object,
    narrativeIsPending: Boolean
  },
  computed: {
    ...mapGetters([
      'langSwitch'
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
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 1rem;

    .content {
      position: relative;
      color: white;
      background-color: white;
      color: black;
      border-radius: 0.4rem;
      padding: 0.5rem 1rem;
      margin: auto 2rem;

      p {
        font-size: 1.2em;
        /* margin: .5em 0; */
      }

      .next-btn {
        text-align: right;
        padding: .5em;
        padding-top: 0;
        opacity: 0.4;
      }
      .holder {
        position: absolute;
        right: -1rem;
        top: 0;
        bottom: 0;

        .triangle {
          margin: auto 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 1rem 0 1rem 1rem;
          border-color: transparent transparent transparent white;
        }
      }
    }
  }
</style>
