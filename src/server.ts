import express from "express";
import { router } from "./routers/routes";
const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => console.log("Server Running!"))