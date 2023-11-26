// import http from "http";
import app from "./src/app.js";
import "dotenv/config";

const PORT = 3000;

const rotas = {
  "/": "Olha o noggers aqui",
  "/feiticeiros": "Satoru Gojo",
  "/maldicoes": "Ryomen Sukuna",
};

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(rotas[req.url]);
// });

app.listen(PORT, () => {
  console.log("Agora vc esta no meu dominio");
});
