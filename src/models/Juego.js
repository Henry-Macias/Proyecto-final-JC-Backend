import mongoose from 'mongoose';

const juegoSchema = new mongoose.Schema({
  titulo: String,
  portada: String,
  horasJugadas: Number,
  puntuacion: Number,
  completado: Boolean,
});

export default mongoose.model('Juego', juegoSchema);
