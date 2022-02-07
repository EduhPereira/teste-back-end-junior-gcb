import { Router } from "express";
import {
  create,
  getAll,
  getOne,
  remove,
  update,
} from "../controllers/especiality.controller";

const router = Router();

export const EspecialityRouter = () => {
  router.post("", create);
  router.get("", getAll);
  router.get("/:id", getOne);
  router.put("/:id", update);
  router.delete("/:id", remove);

  return router;
};
