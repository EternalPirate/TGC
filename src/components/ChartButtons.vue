<template>
  <div>
    <button
      v-for="button of buttonsArr"
      :key="button.name"
      :class="{'active': button.isVisible}"
      @click="togglePath(button)"
      class="button">
      <span :style="{
        background: button.isVisible ? button.color : null,
        borderColor: button.color
      }"></span>
      {{button.name}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ChartButtons',
  data: () => {
    return {
      buttonsArr: []
    }
  },
  created () {
    this.$store.dispatch('setData')
    this.buttonsArr = this.buildButtons(this.$store.getters.chartByIdx(0))

    console.log(this.buttonsArr)
  },
  methods: {
    togglePath (button) {
      button.isVisible = !button.isVisible
    },
    buildButtons (data) {
      const buttonsArr = []

      // build buttons based on polyline
      const yDataLength = data.y.length
      for (let pathIndex = 0; pathIndex < yDataLength; pathIndex++) {
        const curPolyline = data.y[pathIndex]

        buttonsArr.push({
          name: curPolyline.name,
          color: curPolyline.color,
          isVisible: true
        })
      }

      return buttonsArr
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 6px 16px 6px 8px;
  margin-right: 10px;
  background: none;
  border-radius: 40px;
  outline: none;
  cursor: pointer;

  span {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border: 1px solid transparent;
    border-radius: 50%;
    cursor: pointer;

    &:after {
      content: "";
      border: 2px solid #fff;
      border-top: none;
      border-right: none;
      height: 6px;
      width: 10px;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: rotate(-45deg) translate(0%, -100%);
    }
  }

  &.active {
    span {
      &:after {
        opacity: 1;
      }
    }
  }
}
</style>
