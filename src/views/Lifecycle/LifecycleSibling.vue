<template>
  <div class="complex">
    <h3>复杂组件</h3>
    <lifecycle-single compName="cihld1"></lifecycle-single>
    <lifecycle-single compName="cihld2"></lifecycle-single>
    <el-button @click="dataVar += 1">complex更新 {{dataVar}}</el-button>
    <el-button @click="handleDestroy">complex销毁</el-button>
  </div>
</template>

<script>
import LifecycleSingle from '@/views/Lifecycle/LifecycleSingle'
const COMPONENT_NAME = 'complex'

export default {
  data () {
    return {
      dataVar: 1
    }
  },
  beforeCreate () {
    console.log(`--${COMPONENT_NAME}--beforeCreate`)
  },
  created () {
    console.log(`--${COMPONENT_NAME}--created`)
  },
  beforeMount () {
    console.log(`--${COMPONENT_NAME}--beforeMount`)
  },
  mounted () {
    console.log(`--${COMPONENT_NAME}--mounted`)
  },
  beforeUpdate () {
    console.log(`--${COMPONENT_NAME}--beforeUpdate`)
  },
  updated () {
    console.log(`--${COMPONENT_NAME}--updated`)
  },
  beforeDestroy () {
    console.log(`--${COMPONENT_NAME}--beforeDestroy`)
  },
  destroyed () {
    console.log(`--${COMPONENT_NAME}--destroyed`)
  },
  methods: {
    handleDestroy () {
      this.$destroy()
    }
  },
  components: {
    LifecycleSingle
  }
}
</script>
