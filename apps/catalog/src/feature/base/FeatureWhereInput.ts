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
import { BundleWhereUniqueInput } from "../../bundle/base/BundleWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OptionListRelationFilter } from "../../option/base/OptionListRelationFilter";
import { StrengthListRelationFilter } from "../../strength/base/StrengthListRelationFilter";
import { WeaknessListRelationFilter } from "../../weakness/base/WeaknessListRelationFilter";

@InputType()
class FeatureWhereInput {
  @ApiProperty({
    required: false,
    type: () => BundleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BundleWhereUniqueInput)
  @IsOptional()
  @Field(() => BundleWhereUniqueInput, {
    nullable: true,
  })
  bundle?: BundleWhereUniqueInput;

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
    type: () => OptionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OptionListRelationFilter)
  @IsOptional()
  @Field(() => OptionListRelationFilter, {
    nullable: true,
  })
  options?: OptionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => StrengthListRelationFilter,
  })
  @ValidateNested()
  @Type(() => StrengthListRelationFilter)
  @IsOptional()
  @Field(() => StrengthListRelationFilter, {
    nullable: true,
  })
  strength?: StrengthListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => WeaknessListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WeaknessListRelationFilter)
  @IsOptional()
  @Field(() => WeaknessListRelationFilter, {
    nullable: true,
  })
  weaknesses?: WeaknessListRelationFilter;
}

export { FeatureWhereInput as FeatureWhereInput };
