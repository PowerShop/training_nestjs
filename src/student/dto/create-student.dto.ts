import { IsNotEmpty, IsEmail, IsString, IsDateString } from 'class-validator';

export class CreateStudentDto {
    @IsNotEmpty()
    @IsString()
    studentId: string;

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsNotEmpty()
    @IsDateString()
    birthDate: string; // Format: YYYY-MM-DD
}
