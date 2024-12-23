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
import { ClosingStockBalanceWhereInput } from "./ClosingStockBalanceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ClosingStockBalanceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ClosingStockBalanceWhereInput,
  })
  @ValidateNested()
  @Type(() => ClosingStockBalanceWhereInput)
  @IsOptional()
  @Field(() => ClosingStockBalanceWhereInput, {
    nullable: true,
  })
  every?: ClosingStockBalanceWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClosingStockBalanceWhereInput,
  })
  @ValidateNested()
  @Type(() => ClosingStockBalanceWhereInput)
  @IsOptional()
  @Field(() => ClosingStockBalanceWhereInput, {
    nullable: true,
  })
  some?: ClosingStockBalanceWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClosingStockBalanceWhereInput,
  })
  @ValidateNested()
  @Type(() => ClosingStockBalanceWhereInput)
  @IsOptional()
  @Field(() => ClosingStockBalanceWhereInput, {
    nullable: true,
  })
  none?: ClosingStockBalanceWhereInput;
}
export { ClosingStockBalanceListRelationFilter as ClosingStockBalanceListRelationFilter };
