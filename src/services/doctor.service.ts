import { getRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import Doctor from "../entities/Doctor";

export const createDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { nome, crm, telefone, celular, cep, especialidade } = req.body;
  try {
    const adress = getAdress(cep);
    const doctor = getRepository(Doctor).create({});
    await getRepository(Doctor).save(doctor);
    return doctor;
  } catch (error) {}
};
