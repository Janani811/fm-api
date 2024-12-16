import { Resolver, Query, Mutation, Arg, Args } from 'type-graphql';

import { User } from '../../routes/users/users.model';

import { CreateUserInput, UpdateUserInput, IUser } from '../types/user';

@Resolver()
export class UserResolver {
  @Query(() => [IUser])
  async users(): Promise<IUser[]> {
    return await User.find();
  }

  @Query(() => IUser, { nullable: true })
  async user(@Arg('id') id: string): Promise<IUser | null> {
    return await User.findById(id);
  }

  @Mutation(() => IUser)
  async createUser(@Args() data: CreateUserInput) {
    const user = new User(data);
    await user.save();
    return user;
  }

  @Mutation(() => IUser, { nullable: true })
  async updateUser(@Arg('id') id: string, @Args() data: UpdateUserInput): Promise<IUser | null> {
    return await User.findByIdAndUpdate(id, data, { new: true });
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg('id') id: string): Promise<boolean> {
    const result = await User.findByIdAndDelete(id);
    return !!result;
  }
}
