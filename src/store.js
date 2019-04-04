import Vue from 'vue'
import Vuex from 'vuex'
import data from './assets/data/chart_data_test.json'
import { prepareData } from './utils/sortData'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    settings: {
      initRatioPercent: 0.2,
      main: {
        width: window.innerWidth,
        height: 500,
        polylineStrokeWidth: 2,
        paddingBot: 40
      },
      thumb: {
        width: window.innerWidth,
        height: 100,
        polylineStrokeWidth: 1
      },
      grid: {
        xLinesThickness: 1,
        yLabelsCount: 6,
        fontSize: 14
      }
    }
  },
  mutations: {
    setData (state, data) {
      state.data = data
    },
    setVisibleFrame (state, data) {
      state.visibleFrame = data
    }
  },
  actions: {
    initStore (context) {
      const preparedData = prepareData(data)
      context.commit('setData', preparedData)
    }
  },
  getters: {
    chartByIdx: state => idx => {
      return state.data[idx]
    },
    settings: state => state.data.settings
  }
})
