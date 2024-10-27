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
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { Type } from "class-transformer";
import { IsOptional } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BigIntNullableFilter } from "../../util/BigIntNullableFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

@InputType()
class GameObjectLootTemplateWhereInput {
  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  chance?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  comment?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: BigIntNullableFilter,
  })
  @Type(() => BigIntNullableFilter)
  @IsOptional()
  @Field(() => BigIntNullableFilter, {
    nullable: true,
  })
  entry?: BigIntNullableFilter;

  @ApiProperty({
    required: false,
    type: BigIntNullableFilter,
  })
  @Type(() => BigIntNullableFilter)
  @IsOptional()
  @Field(() => BigIntNullableFilter, {
    nullable: true,
  })
  groupId?: BigIntNullableFilter;

  @ApiProperty({
    required: false,
    type: BigIntFilter,
  })
  @Type(() => BigIntFilter)
  @IsOptional()
  @Field(() => BigIntFilter, {
    nullable: true,
  })
  id?: BigIntFilter;

  @ApiProperty({
    required: false,
    type: BigIntNullableFilter,
  })
  @Type(() => BigIntNullableFilter)
  @IsOptional()
  @Field(() => BigIntNullableFilter, {
    nullable: true,
  })
  itemId?: BigIntNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  lootMode?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  maxCount?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  minCount?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: BigIntNullableFilter,
  })
  @Type(() => BigIntNullableFilter)
  @IsOptional()
  @Field(() => BigIntNullableFilter, {
    nullable: true,
  })
  questId?: BigIntNullableFilter;

  @ApiProperty({
    required: false,
    type: BigIntNullableFilter,
  })
  @Type(() => BigIntNullableFilter)
  @IsOptional()
  @Field(() => BigIntNullableFilter, {
    nullable: true,
  })
  referenceId?: BigIntNullableFilter;
}

export { GameObjectLootTemplateWhereInput as GameObjectLootTemplateWhereInput };
