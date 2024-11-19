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
import { AreaQuestTrigger } from "../../areaQuestTrigger/base/AreaQuestTrigger";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Epic } from "../../epic/base/Epic";
import { QuestCompletionConditional } from "../../questCompletionConditional/base/QuestCompletionConditional";
import { QuestCueEffect } from "../../questCueEffect/base/QuestCueEffect";
import { QuestDescriptionConditional } from "../../questDescriptionConditional/base/QuestDescriptionConditional";
import { QuestDetail } from "../../questDetail/base/QuestDetail";
import { QuestGreeting } from "../../questGreeting/base/QuestGreeting";
import { QuestTemplate } from "../../questTemplate/base/QuestTemplate";
import { User } from "../../user/base/User";

@ObjectType()
class Quest {
  @ApiProperty({
    required: false,
    type: () => [AreaQuestTrigger],
  })
  @ValidateNested()
  @Type(() => AreaQuestTrigger)
  @IsOptional()
  areaQuestTriggers?: Array<AreaQuestTrigger>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Epic,
  })
  @ValidateNested()
  @Type(() => Epic)
  @IsOptional()
  epic?: Epic | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [QuestCompletionConditional],
  })
  @ValidateNested()
  @Type(() => QuestCompletionConditional)
  @IsOptional()
  questCompletionConditionals?: Array<QuestCompletionConditional>;

  @ApiProperty({
    required: false,
    type: () => QuestCueEffect,
  })
  @ValidateNested()
  @Type(() => QuestCueEffect)
  @IsOptional()
  questCueEffects?: QuestCueEffect | null;

  @ApiProperty({
    required: false,
    type: () => [QuestDescriptionConditional],
  })
  @ValidateNested()
  @Type(() => QuestDescriptionConditional)
  @IsOptional()
  questDescriptionConditionals?: Array<QuestDescriptionConditional>;

  @ApiProperty({
    required: false,
    type: () => QuestDetail,
  })
  @ValidateNested()
  @Type(() => QuestDetail)
  @IsOptional()
  questDetails?: QuestDetail | null;

  @ApiProperty({
    required: false,
    type: () => QuestGreeting,
  })
  @ValidateNested()
  @Type(() => QuestGreeting)
  @IsOptional()
  questGreeting?: QuestGreeting | null;

  @ApiProperty({
    required: false,
    type: () => QuestTemplate,
  })
  @ValidateNested()
  @Type(() => QuestTemplate)
  @IsOptional()
  questTemplate?: QuestTemplate | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { Quest as Quest };