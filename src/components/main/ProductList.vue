<template>
  <div class="products">
    <ul class="products__product-list">
      <Product v-for="(product, i) in products" :key="i" :product="product"/>
    </ul>
    <router-link to="/cart" class="products__basket" v-if="products.length">
      <img src="../../assets/basket.svg" alt="Basket">
      <p v-if="cartProductsCount">{{ cartProductsCount }}</p>
    </router-link>
  </div>
</template>

<script>
import Product from '../main/Product';
import { mapState } from 'vuex';
export default {
  name: 'ProductList',
  components: {
    Product
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  computed: mapState({
    products: state => state.products.products,
    cartProductsCount: state => state.cart.products.length
  })
}
</script>

<style lang="scss" scoped>
  .products {
    display: flex;

    &__product-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0;
      padding: 0;
    }

    &__basket {
      height: max-content;
      margin-top: 15px;
      padding: 5px;
      position: fixed;
      top: 8px;
      right: 10px;
      border-radius: 3px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

      img {
        width: auto;
        height: 35px;
      }

      p {
        position: absolute;
        top: -25px;
        right: -10px;
        width: 23px;
        height: 23px;
        border-radius: 100%;
        background-color: #000;
        color: #fff;
        text-align: center;
        line-height: 1.6;
        font-size: 14px;
        font-family: arial;
      }
    }
  }
</style>