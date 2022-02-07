import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("especialities")
export default class Especiality {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  nome!: string;
}
