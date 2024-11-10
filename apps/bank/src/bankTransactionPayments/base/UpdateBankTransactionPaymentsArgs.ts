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
import { BankTransactionPaymentsWhereUniqueInput } from "./BankTransactionPaymentsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BankTransactionPaymentsUpdateInput } from "./BankTransactionPaymentsUpdateInput";

@ArgsType()
class UpdateBankTransactionPaymentsArgs {
  @ApiProperty({
    required: true,
    type: () => BankTransactionPaymentsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BankTransactionPaymentsWhereUniqueInput)
  @Field(() => BankTransactionPaymentsWhereUniqueInput, { nullable: false })
  where!: BankTransactionPaymentsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BankTransactionPaymentsUpdateInput,
  })
  @ValidateNested()
  @Type(() => BankTransactionPaymentsUpdateInput)
  @Field(() => BankTransactionPaymentsUpdateInput, { nullable: false })
  data!: BankTransactionPaymentsUpdateInput;
}

export { UpdateBankTransactionPaymentsArgs as UpdateBankTransactionPaymentsArgs };