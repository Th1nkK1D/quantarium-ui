<template>
  <div class="fx-row narrative-display">
    <div class="fx-x2 content" @click="onClickNext()">
      <vue-typed-js
        :key="displayedText"
        :strings="[displayedText]"
        :typeSpeed="15"
        cursorChar=""
        @onComplete="typingIsDone = true"
        ref="typer"
      >
        <span class="typing"></span>
      </vue-typed-js>
      <div :class="`next-btn${narrativeIsPending && typingIsDone ? '': ' is-hide'}`"> {{ langSwitch(['next', 'ถัดไป']) }} > </div>
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
  data () {
    return {
      typingIsDone: false
    }
  },
  computed: {
    ...mapGetters([
      'langSwitch'
    ]),
    displayedText () {
      return this.langSwitch(this.narratorState.text)
    }
  },
  methods: {
    ...mapActions([
      'fireEvent'
    ]),
    onClickNext () {
      if (this.narrativeIsPending && this.typingIsDone) {
        this.typingIsDone = false

        this.fireEvent({
          trigger: 'narrator-text-read'
        })
      }
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
      padding: 0.75rem 1rem;
      margin: auto 2rem;

      .typing {
        font-size: 1.2em;
        margin: .25em 0;
      }

      .next-btn {
        text-align: right;
        opacity: 0.4;

        &.is-hide {
          opacity: 0;
        }
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
