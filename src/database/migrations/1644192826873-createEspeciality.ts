import {MigrationInterface, QueryRunner} from "typeorm";

export class createEspeciality1644192826873 implements MigrationInterface {
    name = 'createEspeciality1644192826873'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "especialities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, CONSTRAINT "PK_0b11971585fb623114b4881c5fa" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "especialities"`);
    }

}
