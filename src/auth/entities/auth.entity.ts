import { Column, Entity , PrimaryGeneratedColumn } from 'typeorm';

@Entity('auth')
export class Auth {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ name: 'username', type: 'varchar', length: 50 })
    username: string;

    @Column({ name: 'password', type: 'varchar', length: 255 })
    password: string;
}
