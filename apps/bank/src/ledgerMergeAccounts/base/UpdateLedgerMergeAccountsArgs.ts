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
import { LedgerMergeAccountsWhereUniqueInput } from "./LedgerMergeAccountsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { LedgerMergeAccountsUpdateInput } from "./LedgerMergeAccountsUpdateInput";

@ArgsType()
class UpdateLedgerMergeAccountsArgs {
  @ApiProperty({
    required: true,
    type: () => LedgerMergeAccountsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LedgerMergeAccountsWhereUniqueInput)
  @Field(() => LedgerMergeAccountsWhereUniqueInput, { nullable: false })
  where!: LedgerMergeAccountsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LedgerMergeAccountsUpdateInput,
  })
  @ValidateNested()
  @Type(() => LedgerMergeAccountsUpdateInput)
  @Field(() => LedgerMergeAccountsUpdateInput, { nullable: false })
  data!: LedgerMergeAccountsUpdateInput;
}

export { UpdateLedgerMergeAccountsArgs as UpdateLedgerMergeAccountsArgs };