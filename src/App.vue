<template>
  <div id="app">
    <Chart  :data="data[0]"/>
<!--    <Chart v-for="(item, index) in data" :data="item" :key="index"/>-->
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Chart from './components/Chart'

export default {
  name: 'app',
  components: {
    Chart
  },
  computed: mapState({
    data: state => state.data
  }),
  beforeCreate () {
    this.$store.dispatch('initStore')
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
