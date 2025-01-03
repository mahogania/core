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
import { QuestMailWhereUniqueInput } from "../../questMail/base/QuestMailWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { QuestObjectiveWhereUniqueInput } from "../../questObjective/base/QuestObjectiveWhereUniqueInput";
import { QuestOfferRewardWhereUniqueInput } from "../../questOfferReward/base/QuestOfferRewardWhereUniqueInput";
import { QuestPoolWhereUniqueInput } from "../../questPool/base/QuestPoolWhereUniqueInput";
import { QuestRequestItemWhereUniqueInput } from "../../questRequestItem/base/QuestRequestItemWhereUniqueInput";
import { QuestTemplateLocaleWhereUniqueInput } from "../../questTemplateLocale/base/QuestTemplateLocaleWhereUniqueInput";
import { QuestUpdateManyWithoutQuestTemplatesInput } from "./QuestUpdateManyWithoutQuestTemplatesInput";

@InputType()
class QuestTemplateUpdateInput {
  @ApiProperty({
    required: false,
    type: () => QuestMailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestMailWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestMailWhereUniqueInput, {
    nullable: true,
  })
  questMails?: QuestMailWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => QuestObjectiveWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestObjectiveWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestObjectiveWhereUniqueInput, {
    nullable: true,
  })
  questObjectives?: QuestObjectiveWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => QuestOfferRewardWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestOfferRewardWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestOfferRewardWhereUniqueInput, {
    nullable: true,
  })
  questOfferRewards?: QuestOfferRewardWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => QuestPoolWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestPoolWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestPoolWhereUniqueInput, {
    nullable: true,
  })
  questPools?: QuestPoolWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => QuestRequestItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestRequestItemWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestRequestItemWhereUniqueInput, {
    nullable: true,
  })
  questRequestItems?: QuestRequestItemWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => QuestTemplateLocaleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestTemplateLocaleWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestTemplateLocaleWhereUniqueInput, {
    nullable: true,
  })
  questTemplateLocale?: QuestTemplateLocaleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => QuestUpdateManyWithoutQuestTemplatesInput,
  })
  @ValidateNested()
  @Type(() => QuestUpdateManyWithoutQuestTemplatesInput)
  @IsOptional()
  @Field(() => QuestUpdateManyWithoutQuestTemplatesInput, {
    nullable: true,
  })
  quests?: QuestUpdateManyWithoutQuestTemplatesInput;
}

export { QuestTemplateUpdateInput as QuestTemplateUpdateInput };
