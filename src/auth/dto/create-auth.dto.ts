import { MinLength } from "class-validator";

export class CreateAuthDto {
    @MinLength(10, {
        message: 'Username must be at least 10 characters long',
    
    })
    username: string;

    @MinLength(8, {
        message: 'Password must be at least 8 characters long',
        
    })
    password: string;
}
