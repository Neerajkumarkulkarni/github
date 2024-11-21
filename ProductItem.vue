<template>
  <div class="product-item">
    <img :src="product.thumbnail" alt="product" />
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
    <p>Price: ${{ product.price }}</p>
    <button @click="$emit('addToBasket', product)">Add to Basket</button>
    <button @click="$emit('viewDetails', product)">View Details</button>
  </div>
</template>

<script>
export default { props: { product: Object } };
</script>
