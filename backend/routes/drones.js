import express from "express";
import Drone from "../models/drone.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const drones = await Drone.find();
    res.json(drones);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const drone = await Drone.findOne({ id });
    if (!drone) return res.status(404).json({ message: "Drone not found" });

    res.json(drone);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
