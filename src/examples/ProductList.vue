<script lang="ts">
import { ref, type Ref } from 'vue';
import type { Product } from './Product.ts';
import ProductCard from './ProductCard.vue';

export default {
    components: {
        ProductCard,
    },
    setup() {
        const products: Ref<Product[]> = ref([
            { name: "Chair", price: 100, id:1},
            { name: "Microphone", price: 200, id: 2 },
            { name: "Monitor", price: 300, id: 3}
        ]);

        return {
            products
        };
    },
};
</script>

<template>
    <ProductCard v-for="product in products" :key="product.name" :product="product" />
</template>