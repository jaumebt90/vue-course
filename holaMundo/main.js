const app = Vue.createApp({
  data() {
    return {
      titulo: "Mi banco con Vuejs",
      cantidad: 1000,
      enlace: "https://youtube.com",
      estado: false,
      servicios: ["transferencias", "pagos", "giros"],
    };
  },
  methods: {
    agregarSaldo() {
      this.cantidad = this.cantidad + 100;
    },
    disminuirSaldo() {
      this.cantidad = this.cantidad - 100;
    },
  },
});
