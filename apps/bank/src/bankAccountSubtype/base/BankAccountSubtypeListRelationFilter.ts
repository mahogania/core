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
import { BankAccountSubtypeWhereInput } from "./BankAccountSubtypeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BankAccountSubtypeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BankAccountSubtypeWhereInput,
  })
  @ValidateNested()
  @Type(() => BankAccountSubtypeWhereInput)
  @IsOptional()
  @Field(() => BankAccountSubtypeWhereInput, {
    nullable: true,
  })
  every?: BankAccountSubtypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => BankAccountSubtypeWhereInput,
  })
  @ValidateNested()
  @Type(() => BankAccountSubtypeWhereInput)
  @IsOptional()
  @Field(() => BankAccountSubtypeWhereInput, {
    nullable: true,
  })
  some?: BankAccountSubtypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => BankAccountSubtypeWhereInput,
  })
  @ValidateNested()
  @Type(() => BankAccountSubtypeWhereInput)
  @IsOptional()
  @Field(() => BankAccountSubtypeWhereInput, {
    nullable: true,
  })
  none?: BankAccountSubtypeWhereInput;
}
export { BankAccountSubtypeListRelationFilter as BankAccountSubtypeListRelationFilter };