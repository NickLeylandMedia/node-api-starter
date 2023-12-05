import { Pool } from "pg";

//Initialize DB Connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "food-review-base",
  password: "",
  port: 5432,
});

/* Query Functions */
//Callback Query
const cbquery = (text: any, params: any, callback: any): any => {
  return pool.query(text, params, callback);
};
//Promise Query
const query = (text: any, params: any): any => {
  return pool.query(text, params);
};
/* End Query Functions */

export default { pool, query, cbquery };
