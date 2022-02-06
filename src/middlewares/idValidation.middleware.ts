import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import Doctor from "../entities/Doctor";

export const idValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const doctor = await getRepository(Doctor).findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!doctor) {
    return res.status(404).json({
      error: "doctor not found",
    });
  }

  next();
};
