import {MigrationInterface, QueryRunner} from "typeorm";

export class createDoctor1644102004021 implements MigrationInterface {
    name = 'createDoctor1644102004021'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "crm" integer NOT NULL, "telefone" integer NOT NULL, "celular" integer NOT NULL, "cep" character varying NOT NULL, "logradouro" character varying NOT NULL, "complemento" character varying NOT NULL, "bairro" character varying NOT NULL, "localidade" character varying NOT NULL, "uf" character varying NOT NULL, "especialidade" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
