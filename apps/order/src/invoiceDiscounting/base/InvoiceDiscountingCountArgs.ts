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
import { InvoiceDiscountingWhereInput } from "./InvoiceDiscountingWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class InvoiceDiscountingCountArgs {
  @ApiProperty({
    required: false,
    type: () => InvoiceDiscountingWhereInput,
  })
  @Field(() => InvoiceDiscountingWhereInput, { nullable: true })
  @Type(() => InvoiceDiscountingWhereInput)
  where?: InvoiceDiscountingWhereInput;
}

export { InvoiceDiscountingCountArgs as InvoiceDiscountingCountArgs };
