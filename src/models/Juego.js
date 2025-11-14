import mongoose from "mongoose";

const juegoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  imagenPortada: { type: String, default: "" },

  genero: { type: String, default: "" },
  plataforma: { type: String, default: "" },
  añoLanzamiento: { type: Number, default: null },
  desarrollador: { type: String, default: "" },
  descripcion: { type: String, default: "" },

  horasJugadas: { type: Number, default: 0 },
  puntuacion: { type: Number, default: 0 },
  completado: { type: Boolean, default: false },
});

export default mongoose.model("Juego", juegoSchema);