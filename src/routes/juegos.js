import express from 'express';
import Juego from '../models/Juego.js';
const router = express.Router();

router.get('/', async (req, res) => res.json(await Juego.find()));
router.post('/', async (req, res) => res.json(await Juego.create(req.body)));
router.put('/:id', async (req, res) => res.json(await Juego.findByIdAndUpdate(req.params.id, req.body, { new: true })));
router.delete('/:id', async (req, res) => res.json(await Juego.findByIdAndDelete(req.params.id)));

export default router;
