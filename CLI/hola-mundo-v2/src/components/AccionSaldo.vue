<template>
  <button @click="this.$emit('accion')">{{ texto }}</button>
</template>

<script>
export default {
  props: {
    texto: String,
  },
};
</script>

<style></style>
