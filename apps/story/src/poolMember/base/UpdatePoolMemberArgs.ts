/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PoolMemberWhereUniqueInput } from "./PoolMemberWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PoolMemberUpdateInput } from "./PoolMemberUpdateInput";

@ArgsType()
class UpdatePoolMemberArgs {
  @ApiProperty({
    required: true,
    type: () => PoolMemberWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PoolMemberWhereUniqueInput)
  @Field(() => PoolMemberWhereUniqueInput, { nullable: false })
  where!: PoolMemberWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PoolMemberUpdateInput,
  })
  @ValidateNested()
  @Type(() => PoolMemberUpdateInput)
  @Field(() => PoolMemberUpdateInput, { nullable: false })
  data!: PoolMemberUpdateInput;
}

export { UpdatePoolMemberArgs as UpdatePoolMemberArgs };