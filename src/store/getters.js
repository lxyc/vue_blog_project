export default {
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
