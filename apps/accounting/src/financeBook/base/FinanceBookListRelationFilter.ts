/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinanceBookWhereInput } from "./FinanceBookWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FinanceBookListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FinanceBookWhereInput,
  })
  @ValidateNested()
  @Type(() => FinanceBookWhereInput)
  @IsOptional()
  @Field(() => FinanceBookWhereInput, {
    nullable: true,
  })
  every?: FinanceBookWhereInput;

  @ApiProperty({
    required: false,
    type: () => FinanceBookWhereInput,
  })
  @ValidateNested()
  @Type(() => FinanceBookWhereInput)
  @IsOptional()
  @Field(() => FinanceBookWhereInput, {
    nullable: true,
  })
  some?: FinanceBookWhereInput;

  @ApiProperty({
    required: false,
    type: () => FinanceBookWhereInput,
  })
  @ValidateNested()
  @Type(() => FinanceBookWhereInput)
  @IsOptional()
  @Field(() => FinanceBookWhereInput, {
    nullable: true,
  })
  none?: FinanceBookWhereInput;
}
export { FinanceBookListRelationFilter as FinanceBookListRelationFilter };
