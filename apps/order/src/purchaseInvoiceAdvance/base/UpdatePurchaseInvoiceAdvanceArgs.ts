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
import { PurchaseInvoiceAdvanceWhereUniqueInput } from "./PurchaseInvoiceAdvanceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PurchaseInvoiceAdvanceUpdateInput } from "./PurchaseInvoiceAdvanceUpdateInput";

@ArgsType()
class UpdatePurchaseInvoiceAdvanceArgs {
  @ApiProperty({
    required: true,
    type: () => PurchaseInvoiceAdvanceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PurchaseInvoiceAdvanceWhereUniqueInput)
  @Field(() => PurchaseInvoiceAdvanceWhereUniqueInput, { nullable: false })
  where!: PurchaseInvoiceAdvanceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PurchaseInvoiceAdvanceUpdateInput,
  })
  @ValidateNested()
  @Type(() => PurchaseInvoiceAdvanceUpdateInput)
  @Field(() => PurchaseInvoiceAdvanceUpdateInput, { nullable: false })
  data!: PurchaseInvoiceAdvanceUpdateInput;
}

export { UpdatePurchaseInvoiceAdvanceArgs as UpdatePurchaseInvoiceAdvanceArgs };