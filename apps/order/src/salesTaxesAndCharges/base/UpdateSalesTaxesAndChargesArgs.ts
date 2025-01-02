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
import { SalesTaxesAndChargesWhereUniqueInput } from "./SalesTaxesAndChargesWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SalesTaxesAndChargesUpdateInput } from "./SalesTaxesAndChargesUpdateInput";

@ArgsType()
class UpdateSalesTaxesAndChargesArgs {
  @ApiProperty({
    required: true,
    type: () => SalesTaxesAndChargesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalesTaxesAndChargesWhereUniqueInput)
  @Field(() => SalesTaxesAndChargesWhereUniqueInput, { nullable: false })
  where!: SalesTaxesAndChargesWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SalesTaxesAndChargesUpdateInput,
  })
  @ValidateNested()
  @Type(() => SalesTaxesAndChargesUpdateInput)
  @Field(() => SalesTaxesAndChargesUpdateInput, { nullable: false })
  data!: SalesTaxesAndChargesUpdateInput;
}

export { UpdateSalesTaxesAndChargesArgs as UpdateSalesTaxesAndChargesArgs };