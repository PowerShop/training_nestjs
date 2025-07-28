import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
	constructor(
		@InjectRepository(Student)
		private readonly studentRepository: Repository<Student>,
	) { }

	async create(createStudentDto: CreateStudentDto): Promise<Student> {
		console.log('Creating student with data:', createStudentDto);

		const birthDate = new Date(createStudentDto.birthDate);
		if (isNaN(birthDate.getTime())) {
			throw new Error(`Invalid birth date: ${createStudentDto.birthDate}`);
		}

		const { studentId, firstName, lastName, email, phone } = createStudentDto;

		const student = this.studentRepository.create({
			studentId,
			firstName,
			lastName,
			email,
			phone,
			birthDate: birthDate,
		});

		console.log('Student entity before save:', student);
		return await this.studentRepository.save(student);
	}

	async findAll(): Promise<Student[]> {
		return await this.studentRepository.find();
	}

	async findOne(id: number): Promise<Student> {
		const student = await this.studentRepository.findOne({ where: { id } });
		if (!student) {
			throw new NotFoundException(`Student with ID ${id} not found`);
		}
		return student;
	}

	async update(id: number, updateStudentDto: UpdateStudentDto) {
		// const { studentId, firstName, lastName, email, phone, birthDate } = updateStudentDto;

		// await this.studentRepository.update(id, {
		// 	studentId,
		// 	firstName,
		// 	lastName,
		// 	email,
		// 	phone,
		// 	birthDate,
		// });
		return this.findOne(id).then(student => {
			console.log(`Updated student with ID ${id}:`, student);
			return student;
		});
	}

	async remove(id: number): Promise<void> {
		const student = await this.findOne(id);
		await this.studentRepository.remove(student);
	}

	async updateFull(id: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
		const { studentId, firstName, lastName, email, phone, birthDate } = updateStudentDto;
		
		await this.studentRepository.update(id, {
			studentId,
			firstName,
			lastName,
			email,
			phone,
			birthDate,
		});
		return this.findOne(id).then(student => {
			console.log(`Fully updated student with ID ${id}:`, student);
			return student;
		});
	}
}
