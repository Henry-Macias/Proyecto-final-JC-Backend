import express from 'express';
import Reseña from '../models/Reseña.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const reseñas = await Reseña.find();
  res.json(reseñas);
});
router.post('/', async (req, res) => res.json(await Reseña.create(req.body)));
router.put('/:id', async (req, res) => res.json(await Reseña.findByIdAndUpdate(req.params.id, req.body, { new: true })));
router.delete('/:id', async (req, res) => res.json(await Reseña.findByIdAndDelete(req.params.id)));

export default router;
