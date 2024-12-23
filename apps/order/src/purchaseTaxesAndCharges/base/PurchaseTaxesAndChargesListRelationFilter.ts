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
import { PurchaseTaxesAndChargesWhereInput } from "./PurchaseTaxesAndChargesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PurchaseTaxesAndChargesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PurchaseTaxesAndChargesWhereInput,
  })
  @ValidateNested()
  @Type(() => PurchaseTaxesAndChargesWhereInput)
  @IsOptional()
  @Field(() => PurchaseTaxesAndChargesWhereInput, {
    nullable: true,
  })
  every?: PurchaseTaxesAndChargesWhereInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseTaxesAndChargesWhereInput,
  })
  @ValidateNested()
  @Type(() => PurchaseTaxesAndChargesWhereInput)
  @IsOptional()
  @Field(() => PurchaseTaxesAndChargesWhereInput, {
    nullable: true,
  })
  some?: PurchaseTaxesAndChargesWhereInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseTaxesAndChargesWhereInput,
  })
  @ValidateNested()
  @Type(() => PurchaseTaxesAndChargesWhereInput)
  @IsOptional()
  @Field(() => PurchaseTaxesAndChargesWhereInput, {
    nullable: true,
  })
  none?: PurchaseTaxesAndChargesWhereInput;
}
export { PurchaseTaxesAndChargesListRelationFilter as PurchaseTaxesAndChargesListRelationFilter };
