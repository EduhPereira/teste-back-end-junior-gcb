import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import Doctor from "../entities/Doctor";
import { createDoctor } from "../services/doctor.service";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const doctor = await createDoctor(
      req.body.nome,
      req.body.crm,
      req.body.telefone,
      req.body.celular,
      req.body.cep,
      req.body.especialidade
    );
    return res.status(201).json({
      message: "doctor registered",
      doctor: doctor,
    });
  } catch (error) {}
};
export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const doctors = await getRepository(Doctor).find();
  return res.json({ doctors });
};
export const getOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
