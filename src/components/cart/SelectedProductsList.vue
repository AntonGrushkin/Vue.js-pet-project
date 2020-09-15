<template>
  <ul class="selected-products-list">
    <SelectedProduct v-for="(product, i) in products" :key="i" :product="product" />
  </ul>
</template>

<script>
import SelectedProduct from './SelectedProduct';
import { mapState } from 'vuex';
export default {
  name: 'SelectedProductsList',
  components: {
    SelectedProduct
  },
  computed: mapState({
    products: state => state.cart.products,
  })
}
</script>