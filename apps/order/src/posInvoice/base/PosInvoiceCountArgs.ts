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
import { PosInvoiceWhereInput } from "./PosInvoiceWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PosInvoiceCountArgs {
  @ApiProperty({
    required: false,
    type: () => PosInvoiceWhereInput,
  })
  @Field(() => PosInvoiceWhereInput, { nullable: true })
  @Type(() => PosInvoiceWhereInput)
  where?: PosInvoiceWhereInput;
}

export { PosInvoiceCountArgs as PosInvoiceCountArgs };