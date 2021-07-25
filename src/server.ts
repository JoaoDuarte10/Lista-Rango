import express from "express";
import { router } from "./routers/routes";
import { Tables } from "./database/Tables";

const app = express();

const tables = new Tables();

//Cria as tabelas necessárias para o projeto.
tables.createTables();

app.use(express.json());
app.use(router);

app.listen(3000, () => console.log("Server Running!"))