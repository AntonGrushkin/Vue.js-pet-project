<template>
  <li class="product">
    <div class="product__info">
      <img :src="product.image" :alt="product.title" class="product__image">
      <h2 class="product__title">{{ product.title }}</h2>
      <p class="product__price">{{ product.price }} $</p>
    </div>
    <button @click="addToCart(product)">Add To Cart</button>
  </li>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      default: Function 
    }
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addProduct', product);
    }
  }
}
</script>

<style lang="scss" scoped>
  .product {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 240px;
    margin: 15px;
    padding: 12px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
    font-family: arial;
    list-style-type: none;
    border-radius: 2px;

    &__image {
      width: auto;
      height: 100px;
    }

    &__price {
      color: grey;
      font-size: 20px;
    }

    &__title {
      font-size: 18px;
    }

    button {
      border: none;
      outline: 0;
      padding: 9px;
      color: #000;
      background-color: transparent;
      text-align: center;
      cursor: pointer;
      width: 100%;
      font-size: 15px;
      transition: 0.2s;
      border-radius: 2px;
      border: 1px solid #000;

      &:hover {
        background-color: #000;
        color: #fff;
      }

      &:active {
        opacity: 0.7;
      }
    }
  }
</style>