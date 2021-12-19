const app = Vue.createApp({
  data() {
    return {
      titulo: "Mi banco con Vuejs",
      cantidad: 0,
      enlace: "https://youtube.com",
      estado: false,
      servicios: ["transferencias", "pagos", "giros"],
    };
  },
});
