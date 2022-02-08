const devEnv = {
  type: "postgres",
  host: process.env.PG_HOST,
  port: "5432",
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB,
  logging: true,
  synchronize: false,
  entities: ["./src/entities/**/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};

const testEnv = {
  type: "sqlite",
  database: ":memory:",
  entities: ["./src/entities/**/*.ts"],
  synchronize: true,
};

module.exports = process.env.NODE_ENV === "test" ? testEnv : devEnv;
