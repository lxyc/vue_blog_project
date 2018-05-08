<template>
  <div class="comp">
    <m-header />
    <div class="main">
      <m-side />
      <m-body>
        <m-body-item></m-body-item>
      </m-body>
    </div>
    <m-footer />
  </div>
</template>

<script>
import MHeader from './MHeader'
import MFooter from './MFooter'
import MBody from './MBody'
import MSide from './MSide'
import MBodyItem from './MBodyItem'

export default {
  components: {
    MHeader,
    MFooter,
    MBody,
    MSide,
    MBodyItem
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin: 10px 0;
  display: flex;
  .m-side {
    width: 200px;
    margin-right: 10px;
  }
  .m-body {
    flex: 1;
  }
}
</style>
