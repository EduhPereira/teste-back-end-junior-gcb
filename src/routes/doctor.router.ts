import { Router } from "express";
import {
  create,
  getAll,
  getOne,
  remove,
  update,
} from "../controllers/doctor.controller";
import { validate } from "../middlewares/validation.middleware";
import { idValidation } from "../middlewares/idValidation.middleware";
import { crmValidation } from "../middlewares/crmValidation.middleware";
import { DoctorSchema } from "../schemas/doctor.shema";

const router = Router();

export const DoctorRouter = () => {
  router.post("", validate(DoctorSchema), crmValidation, create);
  router.get("", getAll);
  router.get("/:id", idValidation, getOne);
  router.put("/:id", idValidation, update);
  router.delete("/:id", idValidation, remove);

  return router;
};
