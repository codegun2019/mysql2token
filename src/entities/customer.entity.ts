import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ValidationPipe } from '@nestjs/common';

@Entity('tbl_customer')
export class CustomerEntity {
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  customer_id: number;

  @Column({ nullable: true })
  customer_code: string;

  @Column({ nullable: false })
  customer_pin: string;

  @Column({ nullable: false })
  customer_name: string;

  @Column({ nullable: false })
  customer_name_en: string;

  @Column({ nullable: true })
  customer_bank_holder_name: string;

  @Column({ nullable: true })
  customer_name_en_scb: string;

  @Column({ nullable: true })
  customer_img: string;

  @Column({ nullable: false })
  bank_id: string;

  @Column({ nullable: false })
  bank_no: string;

  @Column({ nullable: true })
  truewallet_id: string;

  @Column({ nullable: true })
  line_id: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: false })
  idcard: string;

  @Column({ nullable: false })
  backidcard: string;

  @Column({ nullable: true })
  birthday: string;

  @Column({ nullable: true })
  remark: string;

  @Column('int')
  status: number;

  @Column('int', { nullable: true })
  verify_identity: number;

  @Column('int')
  verify_bank: number;

  @Column({ nullable: true })
  device_token: string;

  @Column({ nullable: true })
  user_token: string;

  @Column({ nullable: true })
  agent_id: string;

  @Column({ nullable: true })
  nopromation: string;

  @Column({ nullable: true })
  languages: string;

  @Column({ nullable: true })
  register_type: string;

  @Column({ nullable: true })
  scb_premium: string;

  @Column({ nullable: true })
  qr_status: string;

  @Column({ nullable: true })
  referer: string;

  @Column('int', { nullable: true })
  referer_status: number;

  @Column({ nullable: true })
  mylink: string;

  @Column('int', { nullable: true })
  welcome: number;

  @Column('int', { nullable: true })
  wrong_bank: number;

  @Column({ nullable: true })
  lastupdate: Date;

  @Column({ nullable: true })
  createdate: Date;

  @Column({ nullable: true })
  isBankVerified: string;
}
