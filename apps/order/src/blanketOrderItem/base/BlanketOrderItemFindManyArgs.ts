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
import { BlanketOrderItemWhereInput } from "./BlanketOrderItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BlanketOrderItemOrderByInput } from "./BlanketOrderItemOrderByInput";

@ArgsType()
class BlanketOrderItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BlanketOrderItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BlanketOrderItemWhereInput, { nullable: true })
  @Type(() => BlanketOrderItemWhereInput)
  where?: BlanketOrderItemWhereInput;

  @ApiProperty({
    required: false,
    type: [BlanketOrderItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BlanketOrderItemOrderByInput], { nullable: true })
  @Type(() => BlanketOrderItemOrderByInput)
  orderBy?: Array<BlanketOrderItemOrderByInput>;

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

export { BlanketOrderItemFindManyArgs as BlanketOrderItemFindManyArgs };