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
import { QuestObjectiveCompletionEffectWhereUniqueInput } from "../../questObjectiveCompletionEffect/base/QuestObjectiveCompletionEffectWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { QuestObjectiveLocaleWhereUniqueInput } from "../../questObjectiveLocale/base/QuestObjectiveLocaleWhereUniqueInput";
import { QuestRegionWhereUniqueInput } from "../../questRegion/base/QuestRegionWhereUniqueInput";
import { QuestTemplateUpdateManyWithoutQuestObjectivesInput } from "./QuestTemplateUpdateManyWithoutQuestObjectivesInput";

@InputType()
class QuestObjectiveUpdateInput {
  @ApiProperty({
    required: false,
    type: () => QuestObjectiveCompletionEffectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestObjectiveCompletionEffectWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestObjectiveCompletionEffectWhereUniqueInput, {
    nullable: true,
  })
  questObjectiveCompletionEffects?: QuestObjectiveCompletionEffectWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => QuestObjectiveLocaleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestObjectiveLocaleWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestObjectiveLocaleWhereUniqueInput, {
    nullable: true,
  })
  questObjectiveLocales?: QuestObjectiveLocaleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => QuestRegionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestRegionWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestRegionWhereUniqueInput, {
    nullable: true,
  })
  questPois?: QuestRegionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => QuestTemplateUpdateManyWithoutQuestObjectivesInput,
  })
  @ValidateNested()
  @Type(() => QuestTemplateUpdateManyWithoutQuestObjectivesInput)
  @IsOptional()
  @Field(() => QuestTemplateUpdateManyWithoutQuestObjectivesInput, {
    nullable: true,
  })
  questTemplates?: QuestTemplateUpdateManyWithoutQuestObjectivesInput;
}

export { QuestObjectiveUpdateInput as QuestObjectiveUpdateInput };
