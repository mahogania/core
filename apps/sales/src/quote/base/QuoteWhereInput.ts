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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { ItemListRelationFilter } from "../../item/base/ItemListRelationFilter";
import { ProposalWhereUniqueInput } from "../../proposal/base/ProposalWhereUniqueInput";

@InputType()
class QuoteWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ItemListRelationFilter)
  @IsOptional()
  @Field(() => ItemListRelationFilter, {
    nullable: true,
  })
  lineItems?: ItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProposalWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProposalWhereUniqueInput)
  @IsOptional()
  @Field(() => ProposalWhereUniqueInput, {
    nullable: true,
  })
  proposal?: ProposalWhereUniqueInput;
}

export { QuoteWhereInput as QuoteWhereInput };