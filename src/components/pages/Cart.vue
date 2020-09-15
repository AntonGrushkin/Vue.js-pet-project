<template>
  <div class="cart">
    <SelectedProductsList />
  </div>
</template>

<script>
import SelectedProductsList from '../cart/SelectedProductsList';
export default {
  name: 'Cart',
  components: {
    SelectedProductsList
  },
}
</script>