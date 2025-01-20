import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    phoneNumber: string;
    @Column()
    adress: string;
    @Column()
    city: string;
    @Column()
    state: string;
    @Column()
    zipCode: string;
    @Column()
    country: string;
    @Column()
    createAt: Date;
    @Column()
    updatedAt: Date;
    @Column()
    role: string;
}