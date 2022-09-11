import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  otimo: number;

  @Column()
  bom: number;

  @Column()
  critico: number;
}
