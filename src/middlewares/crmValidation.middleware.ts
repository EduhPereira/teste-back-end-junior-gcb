import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import Doctor from "../entities/Doctor";

export const crmValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const doctor = await getRepository(Doctor).findOne({
    where: {
      crm: req.body["crm"],
    },
  });
  if (doctor) {
    return res.status(409).json({
      error: "crm already registered",
    });
  }
  next();
};
