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
import { PaymentLedgerEntryWhereUniqueInput } from "./PaymentLedgerEntryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PaymentLedgerEntryUpdateInput } from "./PaymentLedgerEntryUpdateInput";

@ArgsType()
class UpdatePaymentLedgerEntryArgs {
  @ApiProperty({
    required: true,
    type: () => PaymentLedgerEntryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentLedgerEntryWhereUniqueInput)
  @Field(() => PaymentLedgerEntryWhereUniqueInput, { nullable: false })
  where!: PaymentLedgerEntryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PaymentLedgerEntryUpdateInput,
  })
  @ValidateNested()
  @Type(() => PaymentLedgerEntryUpdateInput)
  @Field(() => PaymentLedgerEntryUpdateInput, { nullable: false })
  data!: PaymentLedgerEntryUpdateInput;
}

export { UpdatePaymentLedgerEntryArgs as UpdatePaymentLedgerEntryArgs };
