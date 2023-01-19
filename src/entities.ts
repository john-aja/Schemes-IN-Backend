import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { ColumnStringTransformer } from './columnStringTransformer';

@Entity('SchemeTypes')
export class Schemes extends BaseEntity {
  @PrimaryGeneratedColumn()
  schemeNo: string;

  @Column()
  schemeType: string;

  @Column()
  schemeName: string;

  @Column()
  schemeId: string;

  @Column()
  category: string;

  @Column()
  launchedBy: string;

  @Column({ nullable: true })
  launchedOn: string;

  @Column()
  description: string;

  @Column('text', { array: true, nullable: true })
  feature: string[];

  @Column('text', { array: true, nullable: true })
  beneficiaries: string[];

  @Column('text', { array: true, nullable: true })
  eligibility: string[];

  @Column('text', {
    nullable: true,
    transformer: new ColumnStringTransformer(),
  })
  schemeBenefits: any;

  @Column('text', {
    nullable: true,
    transformer: new ColumnStringTransformer(),
  })
  applicationProcedure: any;

  @Column('text', {
    nullable: true,
    transformer: new ColumnStringTransformer(),
  })
  documentsRequired: any;

  @Column({ nullable: true })
  link: string;

  @Column({ default: false })
  deleted: boolean;
}
