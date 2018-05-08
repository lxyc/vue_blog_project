<template>
  <div class="m-body-item">
    <el-button @click="add">ADD</el-button>
    <el-button @click="reset">RESET</el-button>
  </div>
</template>

<script>
import Bus from './bus'
export default {
  methods: {
    add () {
      Bus.$emit('change', 1)
    },
    reset () {
      Bus.$emit('reset')
    }
  }
}
</script>
