/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LedgerMergeAccountsWhereInput } from "./LedgerMergeAccountsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LedgerMergeAccountsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LedgerMergeAccountsWhereInput,
  })
  @ValidateNested()
  @Type(() => LedgerMergeAccountsWhereInput)
  @IsOptional()
  @Field(() => LedgerMergeAccountsWhereInput, {
    nullable: true,
  })
  every?: LedgerMergeAccountsWhereInput;

  @ApiProperty({
    required: false,
    type: () => LedgerMergeAccountsWhereInput,
  })
  @ValidateNested()
  @Type(() => LedgerMergeAccountsWhereInput)
  @IsOptional()
  @Field(() => LedgerMergeAccountsWhereInput, {
    nullable: true,
  })
  some?: LedgerMergeAccountsWhereInput;

  @ApiProperty({
    required: false,
    type: () => LedgerMergeAccountsWhereInput,
  })
  @ValidateNested()
  @Type(() => LedgerMergeAccountsWhereInput)
  @IsOptional()
  @Field(() => LedgerMergeAccountsWhereInput, {
    nullable: true,
  })
  none?: LedgerMergeAccountsWhereInput;
}
export { LedgerMergeAccountsListRelationFilter as LedgerMergeAccountsListRelationFilter };