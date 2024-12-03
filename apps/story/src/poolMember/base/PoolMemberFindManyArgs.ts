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
import { PoolMemberWhereInput } from "./PoolMemberWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PoolMemberOrderByInput } from "./PoolMemberOrderByInput";

@ArgsType()
class PoolMemberFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PoolMemberWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PoolMemberWhereInput, { nullable: true })
  @Type(() => PoolMemberWhereInput)
  where?: PoolMemberWhereInput;

  @ApiProperty({
    required: false,
    type: [PoolMemberOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PoolMemberOrderByInput], { nullable: true })
  @Type(() => PoolMemberOrderByInput)
  orderBy?: Array<PoolMemberOrderByInput>;

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

export { PoolMemberFindManyArgs as PoolMemberFindManyArgs };
