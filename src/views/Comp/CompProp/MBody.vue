<template>
  <div class="m-body">
    我是主体内容
    <el-input-number v-model="currentVal" @change="handleChange"></el-input-number>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      currentVal: 0
    }
  },
  // 外层数据改变时，currentVal值需要同步修改
  watch: {
    num: {
      handler (val) {
        this.currentVal = val
      },
      immediate: true
    }
  },
  methods: {
    handleChange (val) {
      this.$emit('change', val)
    }
  }
}
</script>

<style scoped>
.m-body {
  min-height: 500px;
  color: #fff;
  padding: 20px;
  background-color: #39f;
}
</style>
