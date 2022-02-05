import { getRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import Doctor from "../entities/Doctor";
import axios, { AxiosInstance, AxiosResponse } from "axios";

export const createDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { nome, crm, telefone, celular, cep, especialidade } = req.body;
  try {
    const adress = await getAdress(cep);
    const doctor = getRepository(Doctor).create({
      nome,
      crm,
      telefone,
      celular,
      cep: adress.cep,
      logradouro: adress.logradouro,
      complemento: adress.complemento,
      bairro: adress.bairro,
      localidade: adress.localidade,
      uf: adress.uf,
      especialidade,
    });
    await getRepository(Doctor).save(doctor);
    return doctor;
  } catch (error) {}
};

const getAdress = async (cep: number) => {
  const baseurl: string = "https://viacep.com.br/ws";
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: baseurl,
  });
  let response: AxiosResponse<any, any>;
  const requestUrl = `/${cep}/json/`;
  try {
    response = await axiosInstance.get(requestUrl);
    return response.data;
  } catch (err: any) {
    return { message: "error" };
  }
};
