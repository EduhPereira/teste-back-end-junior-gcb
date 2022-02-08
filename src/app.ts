import "reflect-metadata";
import express from "express";
import { Router } from "./routes";

const app = express();

app.use(express.json());

Router(app);

export default app;
