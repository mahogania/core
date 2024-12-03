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
import { PurchaseTaxesAndChargesTemplateWhereUniqueInput } from "./PurchaseTaxesAndChargesTemplateWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PurchaseTaxesAndChargesTemplateUpdateInput } from "./PurchaseTaxesAndChargesTemplateUpdateInput";

@ArgsType()
class UpdatePurchaseTaxesAndChargesTemplateArgs {
  @ApiProperty({
    required: true,
    type: () => PurchaseTaxesAndChargesTemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PurchaseTaxesAndChargesTemplateWhereUniqueInput)
  @Field(() => PurchaseTaxesAndChargesTemplateWhereUniqueInput, {
    nullable: false,
  })
  where!: PurchaseTaxesAndChargesTemplateWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PurchaseTaxesAndChargesTemplateUpdateInput,
  })
  @ValidateNested()
  @Type(() => PurchaseTaxesAndChargesTemplateUpdateInput)
  @Field(() => PurchaseTaxesAndChargesTemplateUpdateInput, { nullable: false })
  data!: PurchaseTaxesAndChargesTemplateUpdateInput;
}

export { UpdatePurchaseTaxesAndChargesTemplateArgs as UpdatePurchaseTaxesAndChargesTemplateArgs };
