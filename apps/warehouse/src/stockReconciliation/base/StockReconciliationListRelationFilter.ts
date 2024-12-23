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
import { StockReconciliationWhereInput } from "./StockReconciliationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StockReconciliationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StockReconciliationWhereInput,
  })
  @ValidateNested()
  @Type(() => StockReconciliationWhereInput)
  @IsOptional()
  @Field(() => StockReconciliationWhereInput, {
    nullable: true,
  })
  every?: StockReconciliationWhereInput;

  @ApiProperty({
    required: false,
    type: () => StockReconciliationWhereInput,
  })
  @ValidateNested()
  @Type(() => StockReconciliationWhereInput)
  @IsOptional()
  @Field(() => StockReconciliationWhereInput, {
    nullable: true,
  })
  some?: StockReconciliationWhereInput;

  @ApiProperty({
    required: false,
    type: () => StockReconciliationWhereInput,
  })
  @ValidateNested()
  @Type(() => StockReconciliationWhereInput)
  @IsOptional()
  @Field(() => StockReconciliationWhereInput, {
    nullable: true,
  })
  none?: StockReconciliationWhereInput;
}
export { StockReconciliationListRelationFilter as StockReconciliationListRelationFilter };
