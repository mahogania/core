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
import { CurrencyWhereUniqueInput } from "../../currency/base/CurrencyWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { OptionCreateNestedManyWithoutDiscountsInput } from "./OptionCreateNestedManyWithoutDiscountsInput";

@InputType()
class DiscountCreateInput {
  @ApiProperty({
    required: false,
    type: () => CurrencyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CurrencyWhereUniqueInput)
  @IsOptional()
  @Field(() => CurrencyWhereUniqueInput, {
    nullable: true,
  })
  currency?: CurrencyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  discountRuleUrl?: string | null;

  @ApiProperty({
    required: false,
    type: () => OptionCreateNestedManyWithoutDiscountsInput,
  })
  @ValidateNested()
  @Type(() => OptionCreateNestedManyWithoutDiscountsInput)
  @IsOptional()
  @Field(() => OptionCreateNestedManyWithoutDiscountsInput, {
    nullable: true,
  })
  options?: OptionCreateNestedManyWithoutDiscountsInput;
}

export { DiscountCreateInput as DiscountCreateInput };