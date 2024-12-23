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
import { InvoiceDiscountingWhereUniqueInput } from "./InvoiceDiscountingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { InvoiceDiscountingUpdateInput } from "./InvoiceDiscountingUpdateInput";

@ArgsType()
class UpdateInvoiceDiscountingArgs {
  @ApiProperty({
    required: true,
    type: () => InvoiceDiscountingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InvoiceDiscountingWhereUniqueInput)
  @Field(() => InvoiceDiscountingWhereUniqueInput, { nullable: false })
  where!: InvoiceDiscountingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => InvoiceDiscountingUpdateInput,
  })
  @ValidateNested()
  @Type(() => InvoiceDiscountingUpdateInput)
  @Field(() => InvoiceDiscountingUpdateInput, { nullable: false })
  data!: InvoiceDiscountingUpdateInput;
}

export { UpdateInvoiceDiscountingArgs as UpdateInvoiceDiscountingArgs };
