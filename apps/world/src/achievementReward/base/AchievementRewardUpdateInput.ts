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
import { AchievementRewardLocaleWhereUniqueInput } from "../../achievementRewardLocale/base/AchievementRewardLocaleWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsInt,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { AchievementUpdateManyWithoutAchievementRewardsInput } from "./AchievementUpdateManyWithoutAchievementRewardsInput";

@InputType()
class AchievementRewardUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AchievementRewardLocaleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AchievementRewardLocaleWhereUniqueInput)
  @IsOptional()
  @Field(() => AchievementRewardLocaleWhereUniqueInput, {
    nullable: true,
  })
  achievementRewardLocales?: AchievementRewardLocaleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => AchievementUpdateManyWithoutAchievementRewardsInput,
  })
  @ValidateNested()
  @Type(() => AchievementUpdateManyWithoutAchievementRewardsInput)
  @IsOptional()
  @Field(() => AchievementUpdateManyWithoutAchievementRewardsInput, {
    nullable: true,
  })
  achievements?: AchievementUpdateManyWithoutAchievementRewardsInput;

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
  body?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  itemId?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  mailTemplateId?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  sender?: number | null;

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
  subject?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  titleA?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  titleH?: number | null;
}

export { AchievementRewardUpdateInput as AchievementRewardUpdateInput };