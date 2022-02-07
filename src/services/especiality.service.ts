import { getRepository } from "typeorm";
import Especiality from "../entities/Especiality";

export const createEspeciality = async (nome: string) => {
  const especialidade = getRepository(Especiality).create({
    nome,
  });
};
