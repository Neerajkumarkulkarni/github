<template>
  <div class="basket">
    <h3>Shopping Basket</h3>
    <div v-for="item in basket" :key="item.id">
      <h4>{{ item.title }}</h4>
      <p>Price: ${{ item.price }}</p>
      <p>Quantity: <input v-model.number="item.quantity" @change="updateQuantity(item)" type="number" min="1" /></p>
      <button @click="removeFromBasket(item.id)">Remove</button>
    </div>
    <p>Total: ${{ total }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['basket']),
    total() {
      return this.basket.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
  },
  methods: {
    removeFromBasket(id) {
      this.$store.commit('removeFromBasket', id);
    },
    updateQuantity(item) {
      this.$store.commit('updateQuantity', { productId: item.id, quantity: item.quantity });
    },
  },
};
</script>
