const app = Vue.createApp({
  data() {
    return {
      titulo: "Mi banco con Vuejs",
      cantidad: 1000,
      enlace: "https://youtube.com",
      estado: false,
      servicios: ["transferencias", "pagos", "giros"],
      desactivar: false,
    };
  },
  methods: {
    agregarSaldo() {
      this.cantidad = this.cantidad + 100;
    },
    disminuirSaldo(saldo) {
      if (this.cantidad === 0) {
        alert("saldo cero!");
        this.desactivar = true;
        return;
      }
      this.cantidad = this.cantidad - saldo;
    },
  },
});
