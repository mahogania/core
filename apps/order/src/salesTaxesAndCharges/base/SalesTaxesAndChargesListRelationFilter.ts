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
import { SalesTaxesAndChargesWhereInput } from "./SalesTaxesAndChargesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SalesTaxesAndChargesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SalesTaxesAndChargesWhereInput,
  })
  @ValidateNested()
  @Type(() => SalesTaxesAndChargesWhereInput)
  @IsOptional()
  @Field(() => SalesTaxesAndChargesWhereInput, {
    nullable: true,
  })
  every?: SalesTaxesAndChargesWhereInput;

  @ApiProperty({
    required: false,
    type: () => SalesTaxesAndChargesWhereInput,
  })
  @ValidateNested()
  @Type(() => SalesTaxesAndChargesWhereInput)
  @IsOptional()
  @Field(() => SalesTaxesAndChargesWhereInput, {
    nullable: true,
  })
  some?: SalesTaxesAndChargesWhereInput;

  @ApiProperty({
    required: false,
    type: () => SalesTaxesAndChargesWhereInput,
  })
  @ValidateNested()
  @Type(() => SalesTaxesAndChargesWhereInput)
  @IsOptional()
  @Field(() => SalesTaxesAndChargesWhereInput, {
    nullable: true,
  })
  none?: SalesTaxesAndChargesWhereInput;
}
export { SalesTaxesAndChargesListRelationFilter as SalesTaxesAndChargesListRelationFilter };