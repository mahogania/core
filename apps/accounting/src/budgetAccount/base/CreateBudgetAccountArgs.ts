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
import { BudgetAccountCreateInput } from "./BudgetAccountCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateBudgetAccountArgs {
  @ApiProperty({
    required: true,
    type: () => BudgetAccountCreateInput,
  })
  @ValidateNested()
  @Type(() => BudgetAccountCreateInput)
  @Field(() => BudgetAccountCreateInput, { nullable: false })
  data!: BudgetAccountCreateInput;
}

export { CreateBudgetAccountArgs as CreateBudgetAccountArgs };
