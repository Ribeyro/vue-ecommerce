<script lang="ts">
// Importas el tipo PropType de Vue, que te permite especificar el tipo de una propiedad.
import type { PropType } from 'vue';

// Importas la interfaz Product que has definido.
import type { Product } from './Product.ts';

export default {
    props: {
        // Defines la propiedad 'product' en tu componente.
        // Usas 'Object as PropType<Product>' para especificar que el tipo de 'product' es 'Product'.
        product: {
            type: Object as PropType<Product>,
            required: true,
        }
    },
    methods: {
        addProduct() {
            // Emites un evento 'addProduct' con el producto actual.
            //this.$emit('addProduct', this.product);
            console.log('Product added to cart : ' + this.product.id);
        }
    }
};
</script>

<template>
    <p>Name: {{ product.name }}</p>
    <p>Price: {{ product.price }}</p>
    <button @click = "addProduct">
        Add to cart
    </button>
    <hr />
</template>