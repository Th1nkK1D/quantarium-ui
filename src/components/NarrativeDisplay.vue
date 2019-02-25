<template>
  <div class="narrative-display">
    <div class="content">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NarrativeDisplay',
  props: [
    'text'
  ]
}
</script>

<style lang="scss" scoped>
  .narrative-display {
    background-color: black;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    .content {
      color: white;
      max-width: calc(100% - 4em);
      max-height: calc(100% - 4em);
      margin: auto;
      text-align: center;
    }
  }
</style>
