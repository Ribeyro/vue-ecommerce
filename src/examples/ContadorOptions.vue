<script  lang="ts">
export default {
    data() {
        return {
            count: 0
        }
    }, 
    methods: {
        increment() {
            this.count += 1
        },
        decrement() {
            this.count -= 1
        }
    },
    mounted() {
        console.log("The initial count is:", this.count)
    }
}
</script>

<template>
    <h1>Contador: {{ count }}</h1>
    <button @click="increment">
        Aumentar
    </button>
    <button @click="decrement">
        Disminuir
    </button>
</template>