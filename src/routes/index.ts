import { Express } from "express";
import { DoctorRouter } from "./doctor.router";

export const Router = (app: Express) => {
  app.use("/api/doctors", DoctorRouter());
};
