<template>
  <div id="app">
    <ChartMain :data="data" :visibleFrame="visibleFrame"/>
    <ChartThumb :data="data" :visibleFrame="visibleFrame"/>
    <ChartButtons :data="data"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ChartMain from './ChartMain'
import ChartThumb from './ChartThumb'
import ChartButtons from './ChartButtons'
import { calcFrameArea } from '../utils/chartUtils'

export default {
  name: 'Chart',
  props: ['data'],
  components: {
    ChartMain,
    ChartThumb,
    ChartButtons
  },
  data: () => {
    return {
      visibleFrame: {}
    }
  },
  computed: mapState({
    settings: state => state.settings
  }),
  created () {
    const xDataLen = this.data.x.data.length + 1
    const to = Math.floor(xDataLen * this.settings.initRatioPercent)
    this.visibleFrame = calcFrameArea(this.data.y, 0, to)
  }
}
</script>

<style lang="scss">
</style>
