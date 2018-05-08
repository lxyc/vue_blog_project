<template>
  <div class="m-side">
    我是侧边栏
    <el-button @click="add">ADD</el-button>
    <el-button @click="reset">RESET</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    add () {
      this.$emit('add')
    },
    reset () {
      this.$emit('reset')
    }
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
