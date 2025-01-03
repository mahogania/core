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
import { PoolMembersWhereInput } from "./PoolMembersWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PoolMembersOrderByInput } from "./PoolMembersOrderByInput";

@ArgsType()
class PoolMembersFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PoolMembersWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PoolMembersWhereInput, { nullable: true })
  @Type(() => PoolMembersWhereInput)
  where?: PoolMembersWhereInput;

  @ApiProperty({
    required: false,
    type: [PoolMembersOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PoolMembersOrderByInput], { nullable: true })
  @Type(() => PoolMembersOrderByInput)
  orderBy?: Array<PoolMembersOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PoolMembersFindManyArgs as PoolMembersFindManyArgs };
