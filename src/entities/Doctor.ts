import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  nome!: string;

  @Column()
  crm!: number;

  @Column()
  telefone!: number;

  @Column()
  celular!: number;

  @Column()
  cep!: string;

  @Column()
  logradouro!: string;

  @Column()
  complemento!: string;

  @Column()
  bairro!: string;

  @Column()
  localidade!: string;

  @Column()
  uf!: string;

  @Column()
  especialidade!: string;
}
