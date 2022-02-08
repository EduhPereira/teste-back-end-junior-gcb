import { createConnection, getConnection } from "typeorm";
import request from "supertest";
import app from "../app";

describe("Especiality Controller Test", () => {
  beforeAll(async () => {
    await createConnection();
  });
  afterAll(async () => {
    const connection = getConnection();
    await connection.close();
  });

  let especialityId = "";
  const especialityPayload = {
    nome: "Cardiologia",
  };

  it("Should able to register a new especiality", async () => {
    const response = await request(app)
      .post("/especialities")
      .send(especialityPayload);
    especialityId = response.body.id;

    expect(response.body).toHaveProperty("nome");
    expect(response.body).toHaveProperty("id");
    expect(response.body.nome).toBe(especialityPayload.nome);
    expect(response.status).toBe(201);
  });
  it("Should be able to get the especiality informations", async () => {
    const response = await request(app).get(`/especialities/${especialityId}`);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("nome");
    expect(response.status).toBe(200);
  });
  it("Should be able to update the created especiality", async () => {
    const response = await request(app)
      .put(`/especialities/${especialityId}`)
      .send({
        nome: "Alergologia",
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("nome");
    expect(response.body.nome).toBe("Alergologia");
    expect(response.status).toBe(200);
  });
  it("Should be able to delete the created especiality", async () => {
    const response = await request(app).delete(
      `/especialities/${especialityId}`
    );

    expect(response.status).toBe(204);
  });
});
