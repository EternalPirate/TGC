import Vue from 'vue'
import Vuex from 'vuex'
import data from './assets/data/chart_data_test.json'
import { prepareData } from './utils/sortData'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    setData (state, data) {
      state.data = data
    }
  },
  actions: {
    setData (context) {
      const preparedData = prepareData(data)
      context.commit('setData', preparedData)
    }
  },
  getters: {
    chartByIdx: state => idx => {
      return state.data[idx]
    }
  }
})
