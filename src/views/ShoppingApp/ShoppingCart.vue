<template>
  <div class="cart">
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price }} x {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total }}</p>
    <el-button @click="clearCartProducts">CLEAR</el-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    ...mapActions([
      'clearCartProducts'
    ])
  }
}
</script>
