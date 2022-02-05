import * as yup from "yup";

export const DoctorSchema = yup.object().shape({
  nome: yup.string().required("nome é um campo obrigatório"),
  crm: yup.number().required("crm é um campo obrigatório"),
  telefone: yup.number().required("telefone é um campo obrigatório"),
  celular: yup.number().required("celular é um campo obrigatório"),
  especialidade: yup.string().required("especialidade é um campo obrigatório"),
});
