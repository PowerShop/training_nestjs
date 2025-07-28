import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('students')
export class Student {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ name: 'student_id', type: 'varchar', length: 10, unique: true, nullable: false })
    studentId: string;

    @CreateDateColumn({ name: 'registration_date', type: 'timestamp' })
    registrationDate: Date;

    @Column({ name: 'first_name', type: 'varchar', length: 100, nullable: false })
    firstName: string;

    @Column({ name: 'last_name', type: 'varchar', length: 100, nullable: false })
    lastName: string;

    @Column({ name: 'email', type: 'varchar', length: 255, unique: true, nullable: false })
    email: string;

    @Column({ name: 'phone', type: 'varchar', length: 15, nullable: false })
    phone: string;

    @Column({ name: 'birth_date', type: 'date', nullable: false })
    birthDate: Date;
}
