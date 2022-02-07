import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import Especiality from "../entities/Especiality";
import { createEspeciality } from "../services/especiality.service";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const especiality = await createEspeciality(req.body.nome);
  return res.status(201).json(especiality);
};
export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const especialidades = await getRepository(Especiality).find();
  return res.json(especialidades);
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
