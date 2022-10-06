import express from "express";

import mealController from "../controllers/sample_cont";

const router = express.Router();

router.post("/api/meals", mealController.addMeal);

router.delete("/api/meals/", mealController.deleteAllMeals);

router.delete("/api/meals/:name", mealController.deleteOneMeal);

router.get("/api/meals", mealController.getAllMeals);

router.get("/api/meals/:name", mealController.getOneMeal);

router.put("/api/meals/:name", mealController.modifyMeal);

export default router;
