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
import { StatementOfAccountsCustomerWhereInput } from "./StatementOfAccountsCustomerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StatementOfAccountsCustomerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StatementOfAccountsCustomerWhereInput,
  })
  @ValidateNested()
  @Type(() => StatementOfAccountsCustomerWhereInput)
  @IsOptional()
  @Field(() => StatementOfAccountsCustomerWhereInput, {
    nullable: true,
  })
  every?: StatementOfAccountsCustomerWhereInput;

  @ApiProperty({
    required: false,
    type: () => StatementOfAccountsCustomerWhereInput,
  })
  @ValidateNested()
  @Type(() => StatementOfAccountsCustomerWhereInput)
  @IsOptional()
  @Field(() => StatementOfAccountsCustomerWhereInput, {
    nullable: true,
  })
  some?: StatementOfAccountsCustomerWhereInput;

  @ApiProperty({
    required: false,
    type: () => StatementOfAccountsCustomerWhereInput,
  })
  @ValidateNested()
  @Type(() => StatementOfAccountsCustomerWhereInput)
  @IsOptional()
  @Field(() => StatementOfAccountsCustomerWhereInput, {
    nullable: true,
  })
  none?: StatementOfAccountsCustomerWhereInput;
}
export { StatementOfAccountsCustomerListRelationFilter as StatementOfAccountsCustomerListRelationFilter };
