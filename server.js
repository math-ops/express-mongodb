// import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Agora vc esta no meu dominio");
});
