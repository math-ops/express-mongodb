import express from "express";
import databaseConect from "./config/dbConect.js";
import routes from "./routes/index.js";

const conection = await databaseConect();

conection.on("error", (erro) => {
  console.error("erro de conexao", erro);
});

conection.once("open", () => {
  console.log("Muryo Kusho");
});

const app = express();
routes(app);

export default app;
