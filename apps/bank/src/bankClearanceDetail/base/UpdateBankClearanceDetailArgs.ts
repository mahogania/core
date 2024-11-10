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
import { BankClearanceDetailWhereUniqueInput } from "./BankClearanceDetailWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BankClearanceDetailUpdateInput } from "./BankClearanceDetailUpdateInput";

@ArgsType()
class UpdateBankClearanceDetailArgs {
  @ApiProperty({
    required: true,
    type: () => BankClearanceDetailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BankClearanceDetailWhereUniqueInput)
  @Field(() => BankClearanceDetailWhereUniqueInput, { nullable: false })
  where!: BankClearanceDetailWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BankClearanceDetailUpdateInput,
  })
  @ValidateNested()
  @Type(() => BankClearanceDetailUpdateInput)
  @Field(() => BankClearanceDetailUpdateInput, { nullable: false })
  data!: BankClearanceDetailUpdateInput;
}

export { UpdateBankClearanceDetailArgs as UpdateBankClearanceDetailArgs };
