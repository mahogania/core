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
import { PosInvoiceCreateInput } from "./PosInvoiceCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreatePosInvoiceArgs {
  @ApiProperty({
    required: true,
    type: () => PosInvoiceCreateInput,
  })
  @ValidateNested()
  @Type(() => PosInvoiceCreateInput)
  @Field(() => PosInvoiceCreateInput, { nullable: false })
  data!: PosInvoiceCreateInput;
}

export { CreatePosInvoiceArgs as CreatePosInvoiceArgs };
