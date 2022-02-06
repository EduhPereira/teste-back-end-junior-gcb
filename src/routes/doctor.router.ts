import { Router } from "express";
import {
  create,
  getAll,
  getOne,
  remove,
  update,
} from "../controllers/doctor.controller";
import { validate } from "../middlewares/validation.middleware";
import { DoctorSchema } from "../schemas/doctor.shema";

const router = Router();

export const DoctorRouter = () => {
  router.post("", validate(DoctorSchema), create);
  router.get("", getAll);
  router.get("/:id", getOne);
  router.put("/:id", update);
  router.delete("/:id", remove);

  return router;
};
