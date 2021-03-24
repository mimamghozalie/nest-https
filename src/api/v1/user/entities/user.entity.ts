
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../role/entities/role.entity";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    fullname: string;

    @Column({ nullable: true, unique: true, })
    phone: number;

    @Column({
        unique: true,
    })
    email: string;

    @Column()
    password: string;

    @Column({
        default: 1
    })
    device_limit: number;

    @CreateDateColumn()
    created: Date;

    @CreateDateColumn()
    updated: Date;

    // Relations
    @ManyToOne(type => Role, r => r.user)
    @JoinColumn({ name: 'role' })
    role: Role;
}
