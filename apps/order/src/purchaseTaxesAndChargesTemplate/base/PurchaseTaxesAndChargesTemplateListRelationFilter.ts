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
import { PurchaseTaxesAndChargesTemplateWhereInput } from "./PurchaseTaxesAndChargesTemplateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PurchaseTaxesAndChargesTemplateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PurchaseTaxesAndChargesTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => PurchaseTaxesAndChargesTemplateWhereInput)
  @IsOptional()
  @Field(() => PurchaseTaxesAndChargesTemplateWhereInput, {
    nullable: true,
  })
  every?: PurchaseTaxesAndChargesTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseTaxesAndChargesTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => PurchaseTaxesAndChargesTemplateWhereInput)
  @IsOptional()
  @Field(() => PurchaseTaxesAndChargesTemplateWhereInput, {
    nullable: true,
  })
  some?: PurchaseTaxesAndChargesTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseTaxesAndChargesTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => PurchaseTaxesAndChargesTemplateWhereInput)
  @IsOptional()
  @Field(() => PurchaseTaxesAndChargesTemplateWhereInput, {
    nullable: true,
  })
  none?: PurchaseTaxesAndChargesTemplateWhereInput;
}
export { PurchaseTaxesAndChargesTemplateListRelationFilter as PurchaseTaxesAndChargesTemplateListRelationFilter };
