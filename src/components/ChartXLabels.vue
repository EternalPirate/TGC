<template>
  <g>
    <text
      v-for="text of labelsArr"
      :key="text.x"
      :x="text.x"
      :y="text.y"
      :opacity="text.opacity"
      :font-size="text.fontSize"
      :fill="text.fill">
      {{text.value}}
    </text>
  </g>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ChartXLabels',
  props: ['data', 'visibleFrame', 'svg'],
  data: () => {
    return {
      labelsArr: []
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
      const beforeLoopCalcObj = this.beforeLoopCalc(this.visibleFrame)

      const xLabelsArr = []
      for (let xDataIndex = 0; xDataIndex < beforeLoopCalcObj.xLabelsCount; xDataIndex++) {
        const loopCalcObj = this.loopCalc(beforeLoopCalcObj, xDataIndex)

        xLabelsArr.push({
          value: loopCalcObj.value,
          x: loopCalcObj.xPoint,
          y: loopCalcObj.yPoint,
          opacity: '1',
          fontSize: this.settings.grid.fontSize,
          fill: 'black'
        })
      }

      return xLabelsArr
    },

    beforeLoopCalc (visibleFrame) {
      // one char width
      const chartWidth = this.settings.grid.fontSize / 2
      // calculate y point position
      const yPoint = this.svg.height - (this.svg.paddingBot / 2)
      // left right padding (in chars)
      const xLabelsPadding = chartWidth * 6
      // calculate visible values count
      // according to value width + padding
      let xLabelsCount = window.innerWidth / (this.data.x.maxValLength * chartWidth + xLabelsPadding)
      xLabelsCount = Math.floor(xLabelsCount)
      // get values according to visibleFrame
      const visiblePointsArr = this.data.x.data.slice(visibleFrame.from, visibleFrame.to)
      // distribute values according to visiblePointsArr
      const visibleValuesPiece = Math.floor(visiblePointsArr.length / xLabelsCount)
      // middle of one value piece
      const visibleValuesMiddlePiece = Math.floor(visiblePointsArr.length / xLabelsCount / 2)
      // distribute x points according to window.innerWidth
      const visiblePointsPiece = Math.floor(window.innerWidth / xLabelsCount)
      // middle of one x points
      const visiblePointsMiddlePiece = Math.floor(window.innerWidth / xLabelsCount / 2)
      return {
        chartWidth,
        yPoint,
        xLabelsCount,
        visiblePointsArr,
        visibleValuesPiece,
        visibleValuesMiddlePiece,
        visiblePointsPiece,
        visiblePointsMiddlePiece
      }
    },

    loopCalc (beforeLoopCalcObj, index) {
      const {
        chartWidth,
        yPoint,
        visiblePointsArr,
        visibleValuesPiece,
        visibleValuesMiddlePiece,
        visiblePointsPiece,
        visiblePointsMiddlePiece
      } = beforeLoopCalcObj
      // get middle index of each piece
      const pointValueIdx = visibleValuesPiece * (index + 1) - visibleValuesMiddlePiece
      // get value
      const value = visiblePointsArr[pointValueIdx] ? visiblePointsArr[pointValueIdx].toString() : '0'
      // get value width
      const valueWidth = Math.round(value.length * chartWidth)
      // get middle point of each piece
      let xPoint = visiblePointsPiece * (index + 1) - visiblePointsMiddlePiece
      // and set it in the middle of the value
      xPoint -= valueWidth / 2
      return {
        value: Number(value),
        xPoint,
        yPoint
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
