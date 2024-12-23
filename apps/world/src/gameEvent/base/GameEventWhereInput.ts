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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GameEventConditionWhereUniqueInput } from "../../gameEventCondition/base/GameEventConditionWhereUniqueInput";
import { GameEventCreatureWhereUniqueInput } from "../../gameEventCreature/base/GameEventCreatureWhereUniqueInput";
import { GameEventGameObjectWhereUniqueInput } from "../../gameEventGameObject/base/GameEventGameObjectWhereUniqueInput";
import { GameEventModelEquipWhereUniqueInput } from "../../gameEventModelEquip/base/GameEventModelEquipWhereUniqueInput";
import { GameEventQuestWhereUniqueInput } from "../../gameEventQuest/base/GameEventQuestWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class GameEventWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  announce?: StringNullableFilter;

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
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  endTime?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => GameEventConditionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GameEventConditionWhereUniqueInput)
  @IsOptional()
  @Field(() => GameEventConditionWhereUniqueInput, {
    nullable: true,
  })
  gameEventConditions?: GameEventConditionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => GameEventCreatureWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GameEventCreatureWhereUniqueInput)
  @IsOptional()
  @Field(() => GameEventCreatureWhereUniqueInput, {
    nullable: true,
  })
  gameEventCreatures?: GameEventCreatureWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => GameEventGameObjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GameEventGameObjectWhereUniqueInput)
  @IsOptional()
  @Field(() => GameEventGameObjectWhereUniqueInput, {
    nullable: true,
  })
  gameEventGameObjects?: GameEventGameObjectWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => GameEventModelEquipWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GameEventModelEquipWhereUniqueInput)
  @IsOptional()
  @Field(() => GameEventModelEquipWhereUniqueInput, {
    nullable: true,
  })
  gameEventModelEquips?: GameEventModelEquipWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => GameEventQuestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GameEventQuestWhereUniqueInput)
  @IsOptional()
  @Field(() => GameEventQuestWhereUniqueInput, {
    nullable: true,
  })
  gameEventQuests?: GameEventQuestWhereUniqueInput;

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
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  startTime?: DateTimeNullableFilter;
}

export { GameEventWhereInput as GameEventWhereInput };
