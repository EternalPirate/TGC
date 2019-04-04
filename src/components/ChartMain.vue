<template>
  <svg
    :viewBox="viewBox"
    :width="svg.width"
    :height="svg.height"
    x="0"
    y="0">
    <ChartXLines :svg="svg"/>
    <ChartXLabels :data="data" :svg="svg" :visibleFrame="visibleFrame"/>
    <ChartPolyline :data="data" :svg="svg" :visibleFrame="visibleFrame"/>
    <ChartYLabels :data="data" :svg="svg" :visibleFrame="visibleFrame"/>
  </svg>
</template>

<script>
import { mapState } from 'vuex'
import ChartXLines from './ChartXLines'
import ChartXLabels from './ChartXLabels'
import ChartPolyline from './ChartPolyline'
import ChartYLabels from './ChartYLabels'

export default {
  name: 'ChartMain',
  props: ['data', 'visibleFrame'],
  components: {
    ChartXLines,
    ChartXLabels,
    ChartPolyline,
    ChartYLabels
  },
  data: () => {
    return {
      viewBox: '',
      svg: {}
    }
  },
  computed: mapState({
    settings: state => state.settings
  }),
  created () {
    this.svg = this.settings.main
    this.viewBox = `0 0 ${this.svg.width} ${this.svg.height}`
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
