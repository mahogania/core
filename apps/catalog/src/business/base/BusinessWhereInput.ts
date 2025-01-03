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
import { UnitListRelationFilter } from "../../unit/base/UnitListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { IndustryWhereUniqueInput } from "../../industry/base/IndustryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RelationListRelationFilter } from "../../relation/base/RelationListRelationFilter";
import { StrengthListRelationFilter } from "../../strength/base/StrengthListRelationFilter";
import { RelationWhereUniqueInput } from "../../relation/base/RelationWhereUniqueInput";
import { WeaknessListRelationFilter } from "../../weakness/base/WeaknessListRelationFilter";

@InputType()
class BusinessWhereInput {
  @ApiProperty({
    required: false,
    type: () => UnitListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UnitListRelationFilter)
  @IsOptional()
  @Field(() => UnitListRelationFilter, {
    nullable: true,
  })
  businessUnits?: UnitListRelationFilter;

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
    type: () => IndustryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IndustryWhereUniqueInput)
  @IsOptional()
  @Field(() => IndustryWhereUniqueInput, {
    nullable: true,
  })
  industry?: IndustryWhereUniqueInput;

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
    type: () => RelationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RelationListRelationFilter)
  @IsOptional()
  @Field(() => RelationListRelationFilter, {
    nullable: true,
  })
  predecessorRelations?: RelationListRelationFilter;

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
  strengths?: StrengthListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => RelationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RelationWhereUniqueInput)
  @IsOptional()
  @Field(() => RelationWhereUniqueInput, {
    nullable: true,
  })
  succesorRelations?: RelationWhereUniqueInput;

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

export { BusinessWhereInput as BusinessWhereInput };
