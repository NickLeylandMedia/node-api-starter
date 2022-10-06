/*  Imports  */
//Express
import express from "express";
//DotENV
import dotenv from "dotenv";
//Database Import
import db from "./db/index";

/* API Routes */
//Route Imports
import mealRoutes from "./routes/sample_route";

/* App Initialization */
const app = express();

/* ENV Initialization */
dotenv.config();

/* Env Variables */
const PORT = process.env.PORT || 3042;

/* Middleware Initialization */
//Express JSON
app.use(express.json());

//Routes
app.use("/", mealRoutes);

/* App Listener */
app.listen(process.env.PORT, () => {
  console.log(`Server initialized and running on port ${PORT}`);
});
