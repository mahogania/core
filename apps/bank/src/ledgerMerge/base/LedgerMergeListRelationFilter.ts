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
import { LedgerMergeWhereInput } from "./LedgerMergeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LedgerMergeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LedgerMergeWhereInput,
  })
  @ValidateNested()
  @Type(() => LedgerMergeWhereInput)
  @IsOptional()
  @Field(() => LedgerMergeWhereInput, {
    nullable: true,
  })
  every?: LedgerMergeWhereInput;

  @ApiProperty({
    required: false,
    type: () => LedgerMergeWhereInput,
  })
  @ValidateNested()
  @Type(() => LedgerMergeWhereInput)
  @IsOptional()
  @Field(() => LedgerMergeWhereInput, {
    nullable: true,
  })
  some?: LedgerMergeWhereInput;

  @ApiProperty({
    required: false,
    type: () => LedgerMergeWhereInput,
  })
  @ValidateNested()
  @Type(() => LedgerMergeWhereInput)
  @IsOptional()
  @Field(() => LedgerMergeWhereInput, {
    nullable: true,
  })
  none?: LedgerMergeWhereInput;
}
export { LedgerMergeListRelationFilter as LedgerMergeListRelationFilter };
