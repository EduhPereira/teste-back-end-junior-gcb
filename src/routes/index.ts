import { Express } from "express";
import { DoctorRouter } from "./doctor.router";
import { EspecialityRouter } from "./especiality.router";
import swaggerUiExpress from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

export const Router = (app: Express) => {
  app.use("/doctors", DoctorRouter());
  app.use("/especialities", EspecialityRouter());
  app.use(
    "/api/docs",
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(swaggerDocument)
  );
};
