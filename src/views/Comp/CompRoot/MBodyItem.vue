<template>
  <div class="m-body-item">
    <el-button @click="add">ADD</el-button>
    <el-button @click="reset">RESET</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    add () {
      this.$root.rootNum += 1
    },
    reset () {
      this.$root.rootNum = 0
    }
  }
}
</script>
