import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Repository } from 'typeorm';
import { Auth } from './entities/auth.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(Auth)
        private readonly authRepo: Repository<Auth>,
    ) {}

    async create(createAuthDto: CreateAuthDto) {
        console.log('Creating auth with data:', createAuthDto);
        const { username, password } = createAuthDto;

		// Duplicate check can be added here if needed
		const existingAuth = await this.authRepo.findOne({ where: { username } });
		if (existingAuth) {
			console.log('Auth with username already exists:', username);
			return 'Auth with this username already exists';
		}

        await this.authRepo.save({
            username,
            password, // In a real application, ensure to hash the password before saving
        });
        return 'This action adds a new auth';
    }

    async findAll() {
        console.log('Fetching all auth records');
        return await this.authRepo.findAndCount();
    }

    async findOne(id: number) {
        console.log(`Fetching auth with ID: ${id}`);
		// Check availability
		const auth = await this.authRepo.findOne({ where: { id } });
		if (!auth) {
			console.log('Auth not found:', id);
			return 'Auth not found';
		}
		// Return the found auth record
		return auth;
    }

    async update(id: number, updateAuthDto: UpdateAuthDto) {
        // const auth = await this.authRepo.findOne({ where: { id } });
		
		const { username, password } = updateAuthDto;

		await this.authRepo.update(id, {
			username,
			password,
		});
		return `This action updates a #${id} auth with data: ${JSON.stringify(updateAuthDto)}`;
    }

    async remove(id: number) {
        console.log(`Removing auth with ID: ${id}`);
		// Check availability
		const auth = await this.authRepo.findOne({ where: { id } });
		if (!auth) {
			console.log('Auth not found:', id);
			return 'Auth not found';
		}
		await this.authRepo.delete(id);
        return `This action removes a #${id} auth`;
    }
}
