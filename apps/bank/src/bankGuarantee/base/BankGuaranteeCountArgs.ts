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
import { BankGuaranteeWhereInput } from "./BankGuaranteeWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class BankGuaranteeCountArgs {
  @ApiProperty({
    required: false,
    type: () => BankGuaranteeWhereInput,
  })
  @Field(() => BankGuaranteeWhereInput, { nullable: true })
  @Type(() => BankGuaranteeWhereInput)
  where?: BankGuaranteeWhereInput;
}

export { BankGuaranteeCountArgs as BankGuaranteeCountArgs };
