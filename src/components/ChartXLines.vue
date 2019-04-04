<template>
  <g>
    <line
      v-for="line of linesArr"
      :key="line.y1"
      :x1="line.x1"
      :x2="line.x2"
      :y1="line.y1"
      :y2="line.y2"
      :stroke="line.stroke"
      :stroke-width="line.strokeWidth"
    ></line>
  </g>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ChartXLines',
  props: ['svg'],
  data: () => {
    return {
      linesArr: []
    }
  },
  computed: mapState({
    settings: state => state.settings
  }),
  created () {
    this.linesArr = this.buildLines()
  },
  methods: {
    buildLines () {
      const linesArr = [];
      for (let lineIndex = 1; lineIndex <= this.settings.grid.yLabelsCount; lineIndex++) {
        // evenly distribute lines from the ground
        let lineGap = this.svg.height / this.settings.grid.yLabelsCount * lineIndex
        lineGap -= this.svg.paddingBot ? this.svg.paddingBot : 0
        lineGap += this.settings.grid.xLinesThickness

        linesArr.push({
          x1: 0,
          x2: this.svg.width,
          y1: lineGap,
          y2: lineGap,
          stroke: '#e8e8e8',
          strokeWidth: this.settings.grid.xLinesThickness
        })
      }

      return linesArr
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
