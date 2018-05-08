<template>
  <div class="m-body">
    我是主体内容
    <slot></slot>
  </div>
</template>

<script>
export default {
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
