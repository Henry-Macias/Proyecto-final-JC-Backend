import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { MONGO_URI, PORT } from './config.js';
import juegosRoutes from './routes/juegos.js';
import reseñasRoutes from './routes/reseñas.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI).then(() => console.log('✅ Conectado a MongoDB'));

app.use('/api/juegos', juegosRoutes);
app.use('/api/reseñas', reseñasRoutes);

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
