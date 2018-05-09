<template>
  <ul class="product-wrapper">
    <li class="row header">
      <div v-for="(th,i) in tHeader" :key="i">{{ th }}</div>
    </li>
    <li class="row" v-for="product in currentProducts" :key="product.id">
      <div>{{ product.title }}</div>
      <div>{{ product.price }}</div>
      <div>{{ product.inventory - product.quantity }}</div>
      <div>
        <el-input-number
          :min="0" :max="product.inventory"
          v-model="product.quantity"
          @change="handleChange">
        </el-input-number>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      tHeader: ['名称', '价格', '剩余库存', '操作'],
      currentProducts: []
    }
  },
  computed: {
    ...mapGetters(['allProducts'])
  },
  // 为了避免表单直接修改store中的数据，需要使用watch模拟双向绑定
  watch: {
    allProducts: {
      handler (val) {
        this.currentProducts = JSON.parse(JSON.stringify(this.allProducts))
      },
      deep: true
    }
  },
  created () {
    this.getAllProducts()
  },
  methods: {
    handleChange () {
      this.setProducts(this.currentProducts)
    },
    ...mapActions([
      'setProducts',
      'getAllProducts'
    ])
  }
}
</script>

<style scoped>
.product-wrapper {
  padding: 0;
  margin: 0;
  max-width: 600px;
}
.row {
  list-style: none;
  display: flex;
}
.row.header {
  font-size: large;
  font-weight: bold;
}
.row > div {
  flex: 1;
}
.row > div:first-child,
.row > div:last-child {
  flex: 2;
}
</style>
