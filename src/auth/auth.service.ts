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
        await this.authRepo.save({
            username,
            password, // In a real application, ensure to hash the password before saving
        });
        return 'This action adds a new auth';
    }

    findAll() {
        console.log('Fetching all auth records');
        return `This action returns all auth`;
    }

    findOne(id: number) {
        console.log(`Fetching auth with ID: ${id}`);
        return `This action returns a #${id} auth`;
    }

    update(id: number, updateAuthDto: UpdateAuthDto) {
        console.log(`Updating auth with ID: ${id} with data:`, updateAuthDto);
        return `This action updates a #${id} auth`;
    }

    remove(id: number) {
        console.log(`Removing auth with ID: ${id}`);
        return `This action removes a #${id} auth`;
    }
}
