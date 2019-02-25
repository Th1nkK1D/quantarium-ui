<template>
  <div class="narrative-display">
    <div class="content">
      <p v-for="t in narratorState.text" :key="t">{{ t }}</p>
    </div>
    <div class="next-btn" @click="onClickNext()">
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NarrativeDisplay',
  props: [
    'narratorState'
  ],
  methods: {
    ...mapActions([
      'fireEvent'
    ]),
    onClickNext() {
      this.fireEvent('text-read')
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
      max-height: calc(100% - 4em);
      margin: auto;
      text-align: center;
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
