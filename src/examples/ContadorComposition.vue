<script setup lang="ts">
import { onMounted, ref } from "vue";
const count = ref(0);

function increment() {
    count.value += 1;
}

function decrement() {
    count.value -= 1;
}
onMounted(() => {
    console.log("The initial count is:", count.value);
});
</script>

<template>
    <h1>Count with Composition API.</h1>
    <h1>contador: {{ count }}</h1>
    <button @click="increment">Increase</button>
    <button @click="decrement">Decrease</button>
</template>
