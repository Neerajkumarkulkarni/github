<template>
  <div>
    <div class="product-grid">
      <ProductItem
        v-for="product in paginatedProducts"
        :key="product.id"
        :product="product"
        @addToBasket="addToBasket"
        @viewDetails="viewDetails"
      />
    </div>
    <div class="pagination">
      <button v-for="page in totalPages" :key="page" @click="$store.commit('setPage', page)">
        {{ page }}
      </button>
    </div>
    <ProductDetailModal v-if="selectedProduct" :product="selectedProduct" @close="closeModal" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductItem from './ProductItem.vue';
import ProductDetailModal from './ProductDetailModal.vue';

export default {
  components: { ProductItem, ProductDetailModal },
  data() {
    return { selectedProduct: null };
  },
  computed: { ...mapGetters(['paginatedProducts', 'totalPages']) },
  methods: {
    addToBasket(product) {
      this.$store.commit('addToBasket', product);
    },
    viewDetails(product) {
      this.selectedProduct = product;
    },
    closeModal() {
      this.selectedProduct = null;
    },
  },
};
</script>
