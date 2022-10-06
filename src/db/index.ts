import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "food-review-base",
  password: "",
  port: 5432,
});

const query = (text: any, params: any): any => pool.query(text, params);

export default { pool, query };
