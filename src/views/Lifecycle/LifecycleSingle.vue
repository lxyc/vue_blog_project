<template>
  <div>
    <h3>单组件</h3>
    <el-button @click="dataVar += 1">更新 {{dataVar}}</el-button>
    <el-button @click="handleDestroy">销毁{{compName}}</el-button>
  </div>
</template>

<script>
export default {
  props: {
    compName: {
      type: String,
      default: 'single'
    }
  },
  data () {
    return {
      dataVar: 1
    }
  },
  beforeCreate () {
    // this.compName = 'single'
    // console.log(`--${this.compName}--beforeCreate`)

    console.log(`  --data未初始化--beforeCreate`)
  },
  created () {
    console.log(`  --${this.compName}--created`)
  },
  beforeMount () {
    console.log(`  --${this.compName}--beforeMount`)
  },
  mounted () {
    console.log(`  --${this.compName}--mounted`)
  },
  beforeUpdate () {
    console.log(`  --${this.compName}--beforeUpdate`)
  },
  updated () {
    console.log(`  --${this.compName}--updated`)
  },
  beforeDestroy () {
    console.log(`  --${this.compName}--beforeDestroy`)
  },
  destroyed () {
    console.log(`  --${this.compName}--destroyed`)
  },
  methods: {
    handleDestroy () {
      this.$destroy()
    }
  }
}
</script>
