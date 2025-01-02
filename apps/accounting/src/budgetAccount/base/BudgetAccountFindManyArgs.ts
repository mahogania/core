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
import { BudgetAccountWhereInput } from "./BudgetAccountWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BudgetAccountOrderByInput } from "./BudgetAccountOrderByInput";

@ArgsType()
class BudgetAccountFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BudgetAccountWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BudgetAccountWhereInput, { nullable: true })
  @Type(() => BudgetAccountWhereInput)
  where?: BudgetAccountWhereInput;

  @ApiProperty({
    required: false,
    type: [BudgetAccountOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BudgetAccountOrderByInput], { nullable: true })
  @Type(() => BudgetAccountOrderByInput)
  orderBy?: Array<BudgetAccountOrderByInput>;

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

export { BudgetAccountFindManyArgs as BudgetAccountFindManyArgs };