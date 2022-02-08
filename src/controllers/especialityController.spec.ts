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
});
