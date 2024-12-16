import { Field, ObjectType, ArgsType } from 'type-graphql';

@ObjectType()
export class IUser {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  us_fullname: string;

  @Field({ nullable: true })
  us_email: string;

  //   @Field({ nullable: true }) // Make fields optional if they aren't always returned
  //   us_password?: string;

  //   @Field({ nullable: true })
  //   us_password_salt?: string;

  @Field({ nullable: true })
  us_is_active: boolean;

  @Field({ nullable: true })
  us_is_deleted: boolean;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;
}

@ArgsType()
export class CreateUserInput {
  @Field({ nullable: true })
  us_fullname: string;

  @Field({ nullable: true })
  us_email: string;

  @Field({ nullable: true })
  us_password: string;

  //   @Field({ nullable: true })
  //   us_is_active?: boolean;

  //   @Field({ nullable: true })
  //   us_is_deleted?: boolean;
}

@ArgsType()
export class UpdateUserInput {
  @Field({ nullable: true })
  us_fullname?: string;

  @Field({ nullable: true })
  us_email?: string;

  @Field({ nullable: true })
  us_password?: string;

  //   @Field({ nullable: true })
  //   us_is_active?: boolean;

  //   @Field({ nullable: true })
  //   us_is_deleted?: boolean;
}
