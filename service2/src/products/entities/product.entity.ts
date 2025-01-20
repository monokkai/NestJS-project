import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    price: string;
    @Column()
    stockQuantity: number;
    @Column()
    category: string;
    @Column()
    imageUrl: string;
    @Column()
    createAt: Date;
    @Column()
    updatedAt: Date;    
}