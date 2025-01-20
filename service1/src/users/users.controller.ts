import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  // Поиск всех пользователей
  @Get('searchall')
  public readAll(): Promise<Array<User>> {
    return this.usersService.readAll();
  }

  // Поиск пользователя по id
  @Get('searchid=:id')
  public async readUserById(@Param('id', ParseIntPipe) id: number): Promise<UserDto> {
    return this.usersService.readOneById(id);
  }

  // Создание пользователя
  @Post('new')
  public async createNewUser(@Body() userData: UserDto): Promise<UserDto> {
    return await this.usersService.createUser(userData)
  }

   // Создание пользователей
   @Post('news')
   public async createNewUsers(@Body() usersData: Array<UserDto>): Promise<Array<UserDto>> {
     return await this.usersService.createUsers(usersData)
   }

  // Редактирование пользователя
  @Patch('update=:id')
  public async updateUser(@Param('id', ParseIntPipe) id: number, @Body() userData: UserDto): Promise<UpdateResult> {
    return await this.usersService.updateUser(id, userData)
  }

  // Удаление пользователя по id
  @Delete('remove=:id')
  public async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return await this.usersService.deleteUser(id);
  }
}
