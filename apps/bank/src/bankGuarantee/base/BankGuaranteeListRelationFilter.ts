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
import { BankGuaranteeWhereInput } from "./BankGuaranteeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BankGuaranteeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BankGuaranteeWhereInput,
  })
  @ValidateNested()
  @Type(() => BankGuaranteeWhereInput)
  @IsOptional()
  @Field(() => BankGuaranteeWhereInput, {
    nullable: true,
  })
  every?: BankGuaranteeWhereInput;

  @ApiProperty({
    required: false,
    type: () => BankGuaranteeWhereInput,
  })
  @ValidateNested()
  @Type(() => BankGuaranteeWhereInput)
  @IsOptional()
  @Field(() => BankGuaranteeWhereInput, {
    nullable: true,
  })
  some?: BankGuaranteeWhereInput;

  @ApiProperty({
    required: false,
    type: () => BankGuaranteeWhereInput,
  })
  @ValidateNested()
  @Type(() => BankGuaranteeWhereInput)
  @IsOptional()
  @Field(() => BankGuaranteeWhereInput, {
    nullable: true,
  })
  none?: BankGuaranteeWhereInput;
}
export { BankGuaranteeListRelationFilter as BankGuaranteeListRelationFilter };
