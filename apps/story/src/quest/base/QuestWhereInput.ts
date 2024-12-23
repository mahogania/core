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
import { AreaQuestTriggerListRelationFilter } from "../../areaQuestTrigger/base/AreaQuestTriggerListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { EpicWhereUniqueInput } from "../../epic/base/EpicWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { QuestCompletionConditionalListRelationFilter } from "../../questCompletionConditional/base/QuestCompletionConditionalListRelationFilter";
import { QuestCueEffectWhereUniqueInput } from "../../questCueEffect/base/QuestCueEffectWhereUniqueInput";
import { QuestDescriptionConditionalListRelationFilter } from "../../questDescriptionConditional/base/QuestDescriptionConditionalListRelationFilter";
import { QuestDetailWhereUniqueInput } from "../../questDetail/base/QuestDetailWhereUniqueInput";
import { QuestGreetingWhereUniqueInput } from "../../questGreeting/base/QuestGreetingWhereUniqueInput";
import { QuestTemplateWhereUniqueInput } from "../../questTemplate/base/QuestTemplateWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class QuestWhereInput {
  @ApiProperty({
    required: false,
    type: () => AreaQuestTriggerListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AreaQuestTriggerListRelationFilter)
  @IsOptional()
  @Field(() => AreaQuestTriggerListRelationFilter, {
    nullable: true,
  })
  areaQuestTriggers?: AreaQuestTriggerListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => EpicWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EpicWhereUniqueInput)
  @IsOptional()
  @Field(() => EpicWhereUniqueInput, {
    nullable: true,
  })
  epic?: EpicWhereUniqueInput;

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
    type: () => QuestCompletionConditionalListRelationFilter,
  })
  @ValidateNested()
  @Type(() => QuestCompletionConditionalListRelationFilter)
  @IsOptional()
  @Field(() => QuestCompletionConditionalListRelationFilter, {
    nullable: true,
  })
  questCompletionConditionals?: QuestCompletionConditionalListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => QuestCueEffectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestCueEffectWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestCueEffectWhereUniqueInput, {
    nullable: true,
  })
  questCueEffects?: QuestCueEffectWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => QuestDescriptionConditionalListRelationFilter,
  })
  @ValidateNested()
  @Type(() => QuestDescriptionConditionalListRelationFilter)
  @IsOptional()
  @Field(() => QuestDescriptionConditionalListRelationFilter, {
    nullable: true,
  })
  questDescriptionConditionals?: QuestDescriptionConditionalListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => QuestDetailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestDetailWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestDetailWhereUniqueInput, {
    nullable: true,
  })
  questDetails?: QuestDetailWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => QuestGreetingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestGreetingWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestGreetingWhereUniqueInput, {
    nullable: true,
  })
  questGreeting?: QuestGreetingWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => QuestTemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestTemplateWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestTemplateWhereUniqueInput, {
    nullable: true,
  })
  questTemplate?: QuestTemplateWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { QuestWhereInput as QuestWhereInput };
