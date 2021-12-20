<template>
  <button @click="accion" :disabled="desactivar">{{ texto }}</button>
</template>

<script>
export default {
  props: {
    texto: String,
    desactivar: Boolean,
  },
  methods: {
    accion() {
      this.$emit("accion");
    },
  },
};
</script>

<style></style>
