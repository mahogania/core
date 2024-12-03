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
import { AchievementBehaviourListRelationFilter } from "../../achievementBehaviour/base/AchievementBehaviourListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { AchievementRewardWhereUniqueInput } from "../../achievementReward/base/AchievementRewardWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../../player/base/PlayerWhereUniqueInput";

@InputType()
class AchievementWhereInput {
  @ApiProperty({
    required: false,
    type: () => AchievementBehaviourListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AchievementBehaviourListRelationFilter)
  @IsOptional()
  @Field(() => AchievementBehaviourListRelationFilter, {
    nullable: true,
  })
  achievementBehaviours?: AchievementBehaviourListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => AchievementRewardWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AchievementRewardWhereUniqueInput)
  @IsOptional()
  @Field(() => AchievementRewardWhereUniqueInput, {
    nullable: true,
  })
  achievementRewards?: AchievementRewardWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  count?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  flags?: IntNullableFilter;

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
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  map?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PlayerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlayerWhereUniqueInput)
  @IsOptional()
  @Field(() => PlayerWhereUniqueInput, {
    nullable: true,
  })
  player?: PlayerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  points?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  refAchievement?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  requiredFaction?: IntNullableFilter;
}

export { AchievementWhereInput as AchievementWhereInput };
