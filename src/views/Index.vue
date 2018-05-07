<template>
  <div class="menu-wrapper">
    <div v-for="link in routes" :key="link.path">
      <div class="menu"
        :class="{'clickable': !link.children}"
        @click="gotoRoute(link)">
        {{ link.name }}
      </div>
      <div
        class="sub-menu clickable"
        v-for="subLink in link.children"
        :key="subLink.path"
        @click="gotoRoute(subLink)">
        {{ subLink.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { constantRouterMap } from '@/router'

export default {
  data () {
    return {
      routes: constantRouterMap.filter(e => e.name !== 'index')
    }
  },
  methods: {
    gotoRoute (link) {
      if (link.children) return
      this.$router.push(link.path)
    }
  }
}
</script>

<style scoped>
.menu-wrapper {
  margin: 20px;
  max-width: 200px;
  font: menu;
}
.menu {
  font-size: 18px;
  line-height: 40px;
}
.sub-menu {
  font-size: 14px;
  line-height: 40px;
  padding-left: 20px;
}
.clickable {
  cursor: pointer;
}
.clickable:hover {
  color: #fff;
  background-color: #409eff;
}
</style>
