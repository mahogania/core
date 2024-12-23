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
import { DiscountedInvoiceWhereUniqueInput } from "./DiscountedInvoiceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DiscountedInvoiceUpdateInput } from "./DiscountedInvoiceUpdateInput";

@ArgsType()
class UpdateDiscountedInvoiceArgs {
  @ApiProperty({
    required: true,
    type: () => DiscountedInvoiceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DiscountedInvoiceWhereUniqueInput)
  @Field(() => DiscountedInvoiceWhereUniqueInput, { nullable: false })
  where!: DiscountedInvoiceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DiscountedInvoiceUpdateInput,
  })
  @ValidateNested()
  @Type(() => DiscountedInvoiceUpdateInput)
  @Field(() => DiscountedInvoiceUpdateInput, { nullable: false })
  data!: DiscountedInvoiceUpdateInput;
}

export { UpdateDiscountedInvoiceArgs as UpdateDiscountedInvoiceArgs };
