import express from "express";
import categoriasrouter from "./routes/categorias.routes.js";

const app = express();

app.set('port', 4002);

//Middleware //
app.use(express.json());

//RUTAS//
app.use("/api/categorias",categoriasrouter);

export default app;