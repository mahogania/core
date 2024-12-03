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
import { SalesInvoiceAdvanceWhereUniqueInput } from "./SalesInvoiceAdvanceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SalesInvoiceAdvanceUpdateInput } from "./SalesInvoiceAdvanceUpdateInput";

@ArgsType()
class UpdateSalesInvoiceAdvanceArgs {
  @ApiProperty({
    required: true,
    type: () => SalesInvoiceAdvanceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalesInvoiceAdvanceWhereUniqueInput)
  @Field(() => SalesInvoiceAdvanceWhereUniqueInput, { nullable: false })
  where!: SalesInvoiceAdvanceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SalesInvoiceAdvanceUpdateInput,
  })
  @ValidateNested()
  @Type(() => SalesInvoiceAdvanceUpdateInput)
  @Field(() => SalesInvoiceAdvanceUpdateInput, { nullable: false })
  data!: SalesInvoiceAdvanceUpdateInput;
}

export { UpdateSalesInvoiceAdvanceArgs as UpdateSalesInvoiceAdvanceArgs };
