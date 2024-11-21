<template>
  <div class="filters">
    <input v-model="search" @input="applyFilters" placeholder="Search products" />
    <select v-model="category" @change="applyFilters">
      <option value="">All Categories</option>
      <option v-for="cat in categories" :key="cat">{{ cat }}</option>
    </select>
    <select v-model="sort" @change="applyFilters">
      <option value="">Sort By</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="name-asc">Name: A-Z</option>
      <option value="name-desc">Name: Z-A</option>
    </select>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return { search: '', category: '', sort: '' };
  },
  computed: { ...mapState(['categories']) },
  methods: {
    applyFilters() {
      this.$store.commit('filterProducts', {
        category: this.category,
        search: this.search,
        sort: this.sort,
      });
    },
  },
};
</script>
