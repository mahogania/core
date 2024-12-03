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
import { PaymentEntryWhereInput } from "./PaymentEntryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PaymentEntryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PaymentEntryWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentEntryWhereInput)
  @IsOptional()
  @Field(() => PaymentEntryWhereInput, {
    nullable: true,
  })
  every?: PaymentEntryWhereInput;

  @ApiProperty({
    required: false,
    type: () => PaymentEntryWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentEntryWhereInput)
  @IsOptional()
  @Field(() => PaymentEntryWhereInput, {
    nullable: true,
  })
  some?: PaymentEntryWhereInput;

  @ApiProperty({
    required: false,
    type: () => PaymentEntryWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentEntryWhereInput)
  @IsOptional()
  @Field(() => PaymentEntryWhereInput, {
    nullable: true,
  })
  none?: PaymentEntryWhereInput;
}
export { PaymentEntryListRelationFilter as PaymentEntryListRelationFilter };
