import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    filteredProducts: [],
    basket: [],
    categories: [],
    pagination: { currentPage: 1, itemsPerPage: 10 },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
      state.filteredProducts = products;
      state.categories = [...new Set(products.map(p => p.category))];
    },
    addToBasket(state, product) {
      const item = state.basket.find(i => i.id === product.id);
      if (item) item.quantity++;
      else state.basket.push({ ...product, quantity: 1 });
    },
    removeFromBasket(state, productId) {
      state.basket = state.basket.filter(item => item.id !== productId);
    },
    updateQuantity(state, { productId, quantity }) {
      const item = state.basket.find(i => i.id === productId);
      if (item) item.quantity = quantity;
    },
    filterProducts(state, { category, search, sort }) {
      let filtered = state.products.filter(p =>
        (!category || p.category === category) &&
        (!search || p.title.toLowerCase().includes(search.toLowerCase()))
      );
      if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
      if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
      if (sort === 'name-asc') filtered.sort((a, b) => a.title.localeCompare(b.title));
      if (sort === 'name-desc') filtered.sort((a, b) => b.title.localeCompare(a.title));
      state.filteredProducts = filtered;
    },
    setPage(state, page) {
      state.pagination.currentPage = page;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get('https://dummyjson.com/products');
      commit('setProducts', response.data.products);
    },
  },
  getters: {
    paginatedProducts(state) {
      const start = (state.pagination.currentPage - 1) * state.pagination.itemsPerPage;
      return state.filteredProducts.slice(start, start + state.pagination.itemsPerPage);
    },
    totalPages(state) {
      return Math.ceil(state.filteredProducts.length / state.pagination.itemsPerPage);
    },
  },
});
