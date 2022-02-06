import { Express } from "express";
import { DoctorRouter } from "./doctor.router";
import swaggerUiExpress from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

export const Router = (app: Express) => {
  app.use("/doctors", DoctorRouter());
  app.use(
    "/api/docs",
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(swaggerDocument)
  );
};
