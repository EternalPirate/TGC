<template>
  <g>
    <text
      v-for="label of labelsArr"
      :key="label.y"
      :x="label.x"
      :y="label.y"
      :font-size="label.fontSize"
      :fill="label.fill">
      {{label.value}}
    </text>
  </g>
</template>

<script>
import { mapState } from 'vuex'
import { roundUpVal } from '../utils/chartUtils'

export default {
  name: 'ChartYLabels',
  props: ['data', 'svg', 'visibleFrame'],
  data: () => {
    return {
      labelsArr: [],
      horNumMarginBottom: 5
    }
  },
  computed: mapState({
    settings: state => state.settings
  }),
  created () {
    this.labelsArr = this.buildLabels()
  },
  methods: {
    buildLabels () {
      const yLabelsArr = []
      const horStep = roundUpVal(this.visibleFrame.maxValHeight / this.settings.grid.yLabelsCount)

      // build horizontal lines on the data
      for (let lineIndex = 1; lineIndex <= this.settings.grid.yLabelsCount; lineIndex++) {
        // evenly distribute lines from the ground
        let y = this.svg.height / this.settings.grid.yLabelsCount * lineIndex
        y -= this.svg.paddingBot ? this.svg.paddingBot : 0
        y -= this.horNumMarginBottom

        // multiply line on proportional value
        let value = this.settings.grid.yLabelsCount * horStep
        // and show it from biggest to lowest
        value -= lineIndex * horStep

        yLabelsArr.push({
          value,
          x: 0,
          y,
          fontSize: this.settings.grid.fontSize,
          fill: 'black'
        })
      }

      return yLabelsArr
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
