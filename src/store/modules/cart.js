export default {
  state: {
    products: []
  },
  mutations: {
    ADD_PRODUCT(state, product) {
      if (!state.products.includes(product)) {
        state.products.push(product);
      }
    }
  },
  actions: {
    addProduct(context, product) {
      context.commit('ADD_PRODUCT', product);
    }
  }
}