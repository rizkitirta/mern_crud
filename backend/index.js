import express from "express";
import db from "./config/database.js";
import productRoute from "./routes/index.js";
import cors from "cors";

const app = express();

try {
  await db.authenticate();
  console.log("Database Connected");
} catch (e) {
  console.log("Connection error", e.message);
}

app.use(express.json());
app.use(cors());

//Router product
app.use(productRoute);

app.listen(5000, () => console.log("runing at port 5000"));
