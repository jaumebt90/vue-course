<template>
  <h2>Tipo de cuenta: {{ cuenta }}</h2>
  <h2>Saldo: {{ saldo }}</h2>
  <h2>Cuenta {{ estado ? "Activa" : "Inactiva" }}</h2>
</template>

<script>
export default {
  data() {
    return {
      saldo: 1000,
      cuenta: "Visa",
      estado: true,
      servicios: ["transfers", "bizum", "efectivo"],
    };
  },
};
</script>

<style></style>
