<template>
  <div id="app">
    <ChartMain/>
    <ChartThumb/>
    <ChartButtons/>
  </div>
</template>

<script>
import ChartMain from './components/ChartMain.vue'
import ChartThumb from './components/ChartThumb'
import ChartButtons from './components/ChartButtons'

export default {
  name: 'app',
  components: {
    ChartMain,
    ChartThumb,
    ChartButtons
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
