import { Request, Response, NextFunction } from "express";

const addMeal = async (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: "New meal posted" });
};

const deleteAllMeals = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.json({ message: "All meals deleted" });
};

const deleteOneMeal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.json({ message: "Meal deleted" });
};

const getAllMeals = async (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: "Here are the meals!" });
};

const getOneMeal = async (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: "Here is the meal!" });
};

const modifyMeal = async (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: "Meal modified" });
};

export default {
  addMeal,
  deleteAllMeals,
  deleteOneMeal,
  getAllMeals,
  getOneMeal,
  modifyMeal,
};
