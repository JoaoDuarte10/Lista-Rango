require('dotenv').config();
import express from "express";
import { router } from "./routes";
import { Tables } from "./database/Tables";

const app = express();

const tables = new Tables();

//Cria as tabelas necessárias para o projeto.
tables.createTabelas();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT)