import Vue from 'vue'
import Vuex from 'vuex'
// 修改state时在console打印
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {

}
const getters = {

}
const mutataions = {

}
const actions = {

}

export default new Vuex.Store({
  state,
  getters,
  mutataions,
  actions,
  // 严格模式，非法修改state时报错
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
