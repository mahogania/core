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
import { StatementOfAccountsWhereInput } from "./StatementOfAccountsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StatementOfAccountsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StatementOfAccountsWhereInput,
  })
  @ValidateNested()
  @Type(() => StatementOfAccountsWhereInput)
  @IsOptional()
  @Field(() => StatementOfAccountsWhereInput, {
    nullable: true,
  })
  every?: StatementOfAccountsWhereInput;

  @ApiProperty({
    required: false,
    type: () => StatementOfAccountsWhereInput,
  })
  @ValidateNested()
  @Type(() => StatementOfAccountsWhereInput)
  @IsOptional()
  @Field(() => StatementOfAccountsWhereInput, {
    nullable: true,
  })
  some?: StatementOfAccountsWhereInput;

  @ApiProperty({
    required: false,
    type: () => StatementOfAccountsWhereInput,
  })
  @ValidateNested()
  @Type(() => StatementOfAccountsWhereInput)
  @IsOptional()
  @Field(() => StatementOfAccountsWhereInput, {
    nullable: true,
  })
  none?: StatementOfAccountsWhereInput;
}
export { StatementOfAccountsListRelationFilter as StatementOfAccountsListRelationFilter };
