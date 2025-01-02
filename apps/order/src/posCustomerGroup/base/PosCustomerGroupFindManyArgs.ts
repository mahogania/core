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
import { PosCustomerGroupWhereInput } from "./PosCustomerGroupWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PosCustomerGroupOrderByInput } from "./PosCustomerGroupOrderByInput";

@ArgsType()
class PosCustomerGroupFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PosCustomerGroupWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PosCustomerGroupWhereInput, { nullable: true })
  @Type(() => PosCustomerGroupWhereInput)
  where?: PosCustomerGroupWhereInput;

  @ApiProperty({
    required: false,
    type: [PosCustomerGroupOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PosCustomerGroupOrderByInput], { nullable: true })
  @Type(() => PosCustomerGroupOrderByInput)
  orderBy?: Array<PosCustomerGroupOrderByInput>;

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

export { PosCustomerGroupFindManyArgs as PosCustomerGroupFindManyArgs };