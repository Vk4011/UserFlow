import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { IsEmail, IsNotEmpty, IsPhoneNumber, Length } from 'class-validator';
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id!: number; // Definite assignment assertion (!)
  
    @Column()
    @IsNotEmpty()
    username!: string; // Definite assignment assertion (!)
  
    @Column({ unique: true })
    @IsEmail()
    email!: string;
  
    @Column()
    @IsPhoneNumber('IN')
    phone!: string;
  
    @Column()
    @IsNotEmpty()
    @Length(10, 10)
    dob!: string; // Date of Birth in "dd-mm-yyyy" format
  
    @Column()
    @IsNotEmpty()
    collegeName!: string;
  
    @Column()
    @IsNotEmpty()
    state!: string;
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  }
  