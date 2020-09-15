import axios from 'axios'

export default {
  state: {
    products: []
  },
  mutations: {
    ADD_PRODUCTS(state, products) {
      state.products = products;
    }
  },
  actions: {
    async fetchProducts(context) {
      const response = await axios.get('https://fakestoreapi.com/products');
      context.commit('ADD_PRODUCTS', response.data);
    }
  }
}