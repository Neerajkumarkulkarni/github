<template>
  <div class="modal">
    <h3>{{ product.title }}</h3>
    <img :src="product.thumbnail" alt="product" />
    <p>{{ product.description }}</p>
    <p>Price: ${{ product.price }}</p>
    <button @click="$emit('close')">Close</button>
  </div>
</template>

<script>
export default { props: { product: Object } };
</script>
