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
import { AttributeListRelationFilter } from "../../attribute/base/AttributeListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TraitWhereUniqueInput } from "../../trait/base/TraitWhereUniqueInput";
import { ViewListRelationFilter } from "../../view/base/ViewListRelationFilter";

@InputType()
class FragmentWhereInput {
  @ApiProperty({
    required: false,
    type: () => AttributeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AttributeListRelationFilter)
  @IsOptional()
  @Field(() => AttributeListRelationFilter, {
    nullable: true,
  })
  attributes?: AttributeListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  displayName?: StringNullableFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => TraitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TraitWhereUniqueInput)
  @IsOptional()
  @Field(() => TraitWhereUniqueInput, {
    nullable: true,
  })
  trait?: TraitWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ViewListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ViewListRelationFilter)
  @IsOptional()
  @Field(() => ViewListRelationFilter, {
    nullable: true,
  })
  views?: ViewListRelationFilter;
}

export { FragmentWhereInput as FragmentWhereInput };