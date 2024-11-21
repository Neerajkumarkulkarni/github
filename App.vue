<template>
  <div id="app">
    <Filters />
    <ProductCatalog />
    <Basket />
  </div>
</template>

<script>
import Filters from './components/Filters.vue';
import ProductCatalog from './components/ProductCatalog.vue';
import Basket from './components/Basket.vue';

export default {
  components: { Filters, ProductCatalog, Basket },
};
</script>
