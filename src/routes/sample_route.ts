import express from "express";

import sampleController from "../controllers/sample_cont";

const router = express.Router();

router.post("/api/items", sampleController.addItem);

router.delete("/api/items/", sampleController.deleteAllItems);

router.delete("/api/items/:id", sampleController.deleteOneItem);

router.get("/api/items", sampleController.getAllItems);

router.get("/api/items/:id", sampleController.getOneItem);

router.put("/api/items/:id", sampleController.modifyItem);

export default router;
