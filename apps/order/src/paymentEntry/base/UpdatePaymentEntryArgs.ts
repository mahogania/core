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
import { PaymentEntryWhereUniqueInput } from "./PaymentEntryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PaymentEntryUpdateInput } from "./PaymentEntryUpdateInput";

@ArgsType()
class UpdatePaymentEntryArgs {
  @ApiProperty({
    required: true,
    type: () => PaymentEntryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentEntryWhereUniqueInput)
  @Field(() => PaymentEntryWhereUniqueInput, { nullable: false })
  where!: PaymentEntryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PaymentEntryUpdateInput,
  })
  @ValidateNested()
  @Type(() => PaymentEntryUpdateInput)
  @Field(() => PaymentEntryUpdateInput, { nullable: false })
  data!: PaymentEntryUpdateInput;
}

export { UpdatePaymentEntryArgs as UpdatePaymentEntryArgs };
