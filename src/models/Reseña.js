import mongoose from 'mongoose';

const reseñaSchema = new mongoose.Schema({
  juegoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Juego' },
  texto: String,
  autor: String,
  fecha: { type: Date, default: Date.now },
});

export default mongoose.model('Reseña', reseñaSchema);
