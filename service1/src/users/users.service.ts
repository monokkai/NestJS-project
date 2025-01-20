import { BadRequestException, Get, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
      ) { }
    private _users: Array<User> = new Array<User>;
    
    // Добавить пользователя
    public async createUser(data: UserDto): Promise<User> {
        const user: UserDto = this.userRepository.create(data);
        
        return this.userRepository.save(user);
    }

    // Добавить пользователей
    public async createUsers(data: Array<UserDto>): Promise<Array<User>> {
        const users: Array<UserDto> = this.userRepository.create(data);
        
        return this.userRepository.save(users);
    }

    // Получить всех пользователей
    public async readAll(): Promise<Array<User>> {
    return this.userRepository.find();
    }

    // Получить пользователя по id
    public async readOneById(id: number): Promise<UserDto> {
        try {
            return this.userRepository.findOneBy({id});
        } catch (error) {
            throw new BadRequestException("Пользователь с данным id не найден")
        }
    }

    // Обновить пользователя
    public async updateUser(id: number, userData: UserDto): Promise<UpdateResult> {
        try {
            return this.userRepository.update(id, userData);
        } catch (error) {
            throw new BadRequestException("Пользователь с данным id не найден")
        }
    }

    // Удалить пользователя
    public async deleteUser(id: number): Promise<DeleteResult> {
        try {
            return this.userRepository.delete(id);
        } catch (error) {
            throw new BadRequestException("Пользователь с данным id не найден");
        }
    }
}
