import Vue from 'vue'
import Vuex from 'vuex'
// 修改state时在console打印
import createLogger from 'vuex/dist/logger'

import shop from '@/api/shop'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  all: []
}

const getters = {
  // 总商品列表
  allProducts: state => state.all,
  // 购物车商品列表
  cartProducts: (state, getters) => (getters.allProducts.filter(p => p.quantity)),
  // 购物车商品总价
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

const mutations = {
  setProducts (state, products) {
    state.all = products
  },
  clearCartProducts (state) {
    state.all.forEach(p => {
      p.quantity = 0
    })
  }
}

const actions = {
  // 获取数据后，加入选取数量quantity的标识，以区分是否被加入购物车
  getAllProducts ({ commit }) {
    shop.getProducts((res) => {
      const newRes = res.map(p => Object.assign({}, p, {quantity: 0}))
      commit('setProducts', newRes)
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  // 严格模式，非法修改state时报错
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
