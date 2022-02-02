import { Router } from "express";
import {
  create,
  getAll,
  getOne,
  remove,
  update,
} from "../controllers/doctor.controller";

const router = Router();

export const DoctorRouter = () => {
  router.post("/register", create);
  router.get("", getAll);
  router.get("/:id", getOne);
  router.put("/:id", update);
  router.delete("/:id", remove);

  return router;
};
