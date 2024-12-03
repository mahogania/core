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
import { QuestMail } from "../../questMail/base/QuestMail";
import { QuestObjective } from "../../questObjective/base/QuestObjective";
import { QuestOfferReward } from "../../questOfferReward/base/QuestOfferReward";
import { QuestPool } from "../../questPool/base/QuestPool";
import { QuestRequestItem } from "../../questRequestItem/base/QuestRequestItem";
import { QuestTemplateLocale } from "../../questTemplateLocale/base/QuestTemplateLocale";
import { Quest } from "../../quest/base/Quest";

@ObjectType()
class QuestTemplate {
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
    type: () => QuestMail,
  })
  @ValidateNested()
  @Type(() => QuestMail)
  @IsOptional()
  questMails?: QuestMail | null;

  @ApiProperty({
    required: true,
    type: () => QuestObjective,
  })
  @ValidateNested()
  @Type(() => QuestObjective)
  questObjectives?: QuestObjective;

  @ApiProperty({
    required: false,
    type: () => QuestOfferReward,
  })
  @ValidateNested()
  @Type(() => QuestOfferReward)
  @IsOptional()
  questOfferRewards?: QuestOfferReward | null;

  @ApiProperty({
    required: false,
    type: () => QuestPool,
  })
  @ValidateNested()
  @Type(() => QuestPool)
  @IsOptional()
  questPools?: QuestPool | null;

  @ApiProperty({
    required: false,
    type: () => QuestRequestItem,
  })
  @ValidateNested()
  @Type(() => QuestRequestItem)
  @IsOptional()
  questRequestItems?: QuestRequestItem | null;

  @ApiProperty({
    required: false,
    type: () => QuestTemplateLocale,
  })
  @ValidateNested()
  @Type(() => QuestTemplateLocale)
  @IsOptional()
  questTemplateLocale?: QuestTemplateLocale | null;

  @ApiProperty({
    required: false,
    type: () => [Quest],
  })
  @ValidateNested()
  @Type(() => Quest)
  @IsOptional()
  quests?: Array<Quest>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { QuestTemplate as QuestTemplate };
