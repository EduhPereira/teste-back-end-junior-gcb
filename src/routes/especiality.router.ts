import { Router } from "express";
import {
  create,
  getAll,
  getOne,
  remove,
  update,
} from "../controllers/especiality.controller";
import { validate } from "../middlewares/validation.middleware";
import { EspecialitySchema } from "../schemas/especiality.schema";

const router = Router();

export const EspecialityRouter = () => {
  router.post("", validate(EspecialitySchema), create);
  router.get("", getAll);
  router.get("/:id", getOne);
  router.put("/:id", update);
  router.delete("/:id", remove);

  return router;
};
