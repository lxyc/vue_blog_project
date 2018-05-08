<template>
  <div class="m-side">
    我是侧边栏{{ sideNum }}
  </div>
</template>

<script>
import Bus from './bus'
export default {
  data () {
    return {
      sideNum: 0
    }
  },
  created () {
    Bus.$on('change', (step) => {
      this.sideNum += step
    })
    Bus.$on('reset', () => {
      this.sideNum = 0
    })
  }
}
</script>

<style scoped>
.m-side {
  min-height: 500px;
  color: #fff;
  padding: 20px;
  background-color: #39f;
}
</style>
