import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './models/user.model';
import { CreateUserDto } from './dto/user.dto';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => [User])
  async user(@Args('id') id: number): Promise<User> {
    return this.userService.findOne(Number(id));
  }

  @Mutation(() => User)
  async createUser(@Args('userData') userData: CreateUserDto): Promise<User> {
    return await this.userService.create(userData);
  }
}
