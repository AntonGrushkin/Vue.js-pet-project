<template>
  <li class="selected-product">
    {{ product.title }}
  </li>
</template>

<script>
export default {
  name: 'SelectedProduct',
  props: {
    product: {
      type: Object,
      default: Function
    }
  }
}
</script>