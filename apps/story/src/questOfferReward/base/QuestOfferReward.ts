/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { QuestOfferRewardConditional } from "../../questOfferRewardConditional/base/QuestOfferRewardConditional";
import { QuestOfferRewardLocale } from "../../questOfferRewardLocale/base/QuestOfferRewardLocale";
import { QuestRewardItem } from "../../questRewardItem/base/QuestRewardItem";
import { QuestRewardSpell } from "../../questRewardSpell/base/QuestRewardSpell";
import { QuestTemplate } from "../../questTemplate/base/QuestTemplate";

@ObjectType()
class QuestOfferReward {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [QuestOfferRewardConditional],
  })
  @ValidateNested()
  @Type(() => QuestOfferRewardConditional)
  @IsOptional()
  questOfferRewardConditionals?: Array<QuestOfferRewardConditional>;

  @ApiProperty({
    required: false,
    type: () => [QuestOfferRewardLocale],
  })
  @ValidateNested()
  @Type(() => QuestOfferRewardLocale)
  @IsOptional()
  questOfferRewardLocales?: Array<QuestOfferRewardLocale>;

  @ApiProperty({
    required: false,
    type: () => QuestRewardItem,
  })
  @ValidateNested()
  @Type(() => QuestRewardItem)
  @IsOptional()
  questRewardItem?: QuestRewardItem | null;

  @ApiProperty({
    required: false,
    type: () => QuestRewardSpell,
  })
  @ValidateNested()
  @Type(() => QuestRewardSpell)
  @IsOptional()
  questRewardSpell?: QuestRewardSpell | null;

  @ApiProperty({
    required: false,
    type: () => [QuestTemplate],
  })
  @ValidateNested()
  @Type(() => QuestTemplate)
  @IsOptional()
  questTemplates?: Array<QuestTemplate>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { QuestOfferReward as QuestOfferReward };
