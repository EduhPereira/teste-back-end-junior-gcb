import { createConnection, getConnection } from "typeorm";
import request from "supertest";
import app from "../app";

describe("Doctor Controler Test", () => {
  beforeAll(async () => {
    await createConnection();
  });
  afterAll(async () => {
    const connection = getConnection();
    await connection.close();
  });

  let doctorId = "";

  it("Should able to register a new doctor", async () => {
    const response = await request(app).post("/doctors").send({
      nome: "John Doe",
      crm: 1234567,
      telefone: 31321862,
      celular: 988296077,
      cep: 12520380,
      especialidade: "Cardiologia",
    });

    doctorId = response.body.id;

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("nome");
    expect(response.body).toHaveProperty("crm");
    expect(response.body).toHaveProperty("telefone");
    expect(response.body).toHaveProperty("celular");
    expect(response.body).toHaveProperty("cep");
    expect(response.body).toHaveProperty("logradouro");
    expect(response.body).toHaveProperty("complemento");
    expect(response.body).toHaveProperty("bairro");
    expect(response.body).toHaveProperty("localidade");
    expect(response.body).toHaveProperty("uf");
    expect(response.body).toHaveProperty("especialidade");
    expect(response.status).toBe(201);
  });

  it("Should be able to get the doctor profile informations", async () => {
    const response = await request(app).get(`/doctors/${doctorId}`);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("nome");
    expect(response.body).toHaveProperty("crm");
    expect(response.body).toHaveProperty("telefone");
    expect(response.body).toHaveProperty("celular");
    expect(response.body).toHaveProperty("cep");
    expect(response.body).toHaveProperty("logradouro");
    expect(response.body).toHaveProperty("complemento");
    expect(response.body).toHaveProperty("bairro");
    expect(response.body).toHaveProperty("localidade");
    expect(response.body).toHaveProperty("uf");
    expect(response.body).toHaveProperty("especialidade");
    expect(response.status).toBe(200);
  });

  it("Should be able to update the created doctor", async () => {
    const response = await request(app).put(`/doctors/${doctorId}`).send({
      nome: "Doe John",
    });

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("nome");
    expect(response.body).toHaveProperty("crm");
    expect(response.body).toHaveProperty("telefone");
    expect(response.body).toHaveProperty("celular");
    expect(response.body).toHaveProperty("cep");
    expect(response.body).toHaveProperty("logradouro");
    expect(response.body).toHaveProperty("complemento");
    expect(response.body).toHaveProperty("bairro");
    expect(response.body).toHaveProperty("localidade");
    expect(response.body).toHaveProperty("uf");
    expect(response.body).toHaveProperty("especialidade");
    expect(response.body.nome).toBe("Doe John");
    expect(response.status).toBe(200);
  });

  it("Should be able to delete the created doctor", async () => {
    const response = await request(app).delete(`/doctors/${doctorId}`);
    expect(response.status).toBe(204);
  });
});
