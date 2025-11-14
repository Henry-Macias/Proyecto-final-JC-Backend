import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().populate("juegoId", "titulo");
    const reseñas = await Review.find().populate("juegoId")
    res.json(reviews);
  } catch (error) {
    console.error("Error al obtener reseñas:", error);
    res.status(500).json({ message: "Error al obtener reseñas" });
  }
});

router.post("/", async (req, res) => {
  const newData = await Review.create(req.body);
  res.json(newData);
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ message: "Reseña no encontrada" });
    }
    res.json({ message: "Reseña eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar reseña:", error);
    res.status(500).json({ message: "Error al eliminar reseña" });
  }
});

export default router;