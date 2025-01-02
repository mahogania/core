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
import { QuotationItemWhereInput } from "./QuotationItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QuotationItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => QuotationItemWhereInput,
  })
  @ValidateNested()
  @Type(() => QuotationItemWhereInput)
  @IsOptional()
  @Field(() => QuotationItemWhereInput, {
    nullable: true,
  })
  every?: QuotationItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuotationItemWhereInput,
  })
  @ValidateNested()
  @Type(() => QuotationItemWhereInput)
  @IsOptional()
  @Field(() => QuotationItemWhereInput, {
    nullable: true,
  })
  some?: QuotationItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuotationItemWhereInput,
  })
  @ValidateNested()
  @Type(() => QuotationItemWhereInput)
  @IsOptional()
  @Field(() => QuotationItemWhereInput, {
    nullable: true,
  })
  none?: QuotationItemWhereInput;
}
export { QuotationItemListRelationFilter as QuotationItemListRelationFilter };