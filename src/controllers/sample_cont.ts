import { Request, Response, NextFunction } from "express";

const addMeal = (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "New meal posted" });
};

const deleteAllMeals = (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "All meals deleted" });
};

const deleteOneMeal = (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Meal deleted" });
};

const getAllMeals = (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Here are the meals!" });
};

const getOneMeal = (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Here is the meal!" });
};

const modifyMeal = (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Meal modified" });
};

export default {
  addMeal,
  deleteAllMeals,
  deleteOneMeal,
  getAllMeals,
  getOneMeal,
  modifyMeal,
};
