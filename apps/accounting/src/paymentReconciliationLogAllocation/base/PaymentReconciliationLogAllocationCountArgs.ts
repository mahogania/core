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
import { PaymentReconciliationLogAllocationWhereInput } from "./PaymentReconciliationLogAllocationWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PaymentReconciliationLogAllocationCountArgs {
  @ApiProperty({
    required: false,
    type: () => PaymentReconciliationLogAllocationWhereInput,
  })
  @Field(() => PaymentReconciliationLogAllocationWhereInput, { nullable: true })
  @Type(() => PaymentReconciliationLogAllocationWhereInput)
  where?: PaymentReconciliationLogAllocationWhereInput;
}

export { PaymentReconciliationLogAllocationCountArgs as PaymentReconciliationLogAllocationCountArgs };
