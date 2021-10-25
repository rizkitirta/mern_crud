import { Sequelize } from "sequelize";

const db = new Sequelize("fullstack_js", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
