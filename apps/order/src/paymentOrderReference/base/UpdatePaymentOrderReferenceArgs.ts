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
import { PaymentOrderReferenceWhereUniqueInput } from "./PaymentOrderReferenceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PaymentOrderReferenceUpdateInput } from "./PaymentOrderReferenceUpdateInput";

@ArgsType()
class UpdatePaymentOrderReferenceArgs {
  @ApiProperty({
    required: true,
    type: () => PaymentOrderReferenceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentOrderReferenceWhereUniqueInput)
  @Field(() => PaymentOrderReferenceWhereUniqueInput, { nullable: false })
  where!: PaymentOrderReferenceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PaymentOrderReferenceUpdateInput,
  })
  @ValidateNested()
  @Type(() => PaymentOrderReferenceUpdateInput)
  @Field(() => PaymentOrderReferenceUpdateInput, { nullable: false })
  data!: PaymentOrderReferenceUpdateInput;
}

export { UpdatePaymentOrderReferenceArgs as UpdatePaymentOrderReferenceArgs };