<template>
  <div class="m-header">
    我是标题{{ num }}
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.m-header {
  color: #fff;
  padding: 20px;
  background-color: #39f;
}
</style>
