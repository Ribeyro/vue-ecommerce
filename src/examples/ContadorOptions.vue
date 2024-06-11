<script lang="ts">
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    },
  },
  mounted() {
    console.log("The initial count is:", this.count);
  },
};
</script>

<template>
  <p>Your goal is to reach 20 clicks.</p>
  <h1>Contador: {{ count }}</h1>
  <button @click="increment">Aumentar</button>
  <button @click="decrement">Disminuir</button>
  <p v-if="count < 10">Come on, you can do it!</p>
  <p v-else>You're almost there.</p>
</template>
