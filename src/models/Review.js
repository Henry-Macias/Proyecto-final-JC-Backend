import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  juegoId: { type: mongoose.Schema.Types.ObjectId, ref: "Juego", required: true },

  puntuacion: { type: Number, min: 1, max: 5, required: true },
  textoReseña: { type: String },
  horasJugadas: { type: Number },
  dificultad: { type: String, enum: ["Fácil", "Normal", "Difícil"], default: "Normal" },
  recomendaria: { type: Boolean, default: false },

  fecha: { type: Date, default: Date.now },
});

export default mongoose.model("Review", reviewSchema);
