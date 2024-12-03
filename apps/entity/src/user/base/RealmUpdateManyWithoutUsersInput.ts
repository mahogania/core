/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RealmWhereUniqueInput } from "../../realm/base/RealmWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RealmUpdateManyWithoutUsersInput {
  @Field(() => [RealmWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RealmWhereUniqueInput],
  })
  connect?: Array<RealmWhereUniqueInput>;

  @Field(() => [RealmWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RealmWhereUniqueInput],
  })
  disconnect?: Array<RealmWhereUniqueInput>;

  @Field(() => [RealmWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RealmWhereUniqueInput],
  })
  set?: Array<RealmWhereUniqueInput>;
}

export { RealmUpdateManyWithoutUsersInput as RealmUpdateManyWithoutUsersInput };
