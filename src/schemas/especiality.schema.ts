import * as yup from "yup";

export const EspecialitySchema = yup.object().shape({
  nome: yup.string().required("nome é um campo obrigatório"),
});
