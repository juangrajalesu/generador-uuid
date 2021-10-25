import express from "express";
import http from "http";
import helmet from "helmet";
import compression from "compression";
import { v4 as uuidv4 } from "uuid";
import {} from "dotenv/config";

const app = express();

app.use(helmet());
app.use(compression());

const serverHttp = http.createServer(app);

serverHttp.listen(process.env.HTTP_PORT, process.env.IP);

app.use("/", express.static(__dirname + "/public"));

app.get("/api/get-uuid", (req, res) => {
  res.send({ uuid: uuidv4() });
});

app.get("*", function (req, res) {
  res.status(404).send("Error 404 - Recurso no encontrado");
});
