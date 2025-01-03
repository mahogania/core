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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { QuestObjectiveUpdateManyWithoutQuestRegionsInput } from "./QuestObjectiveUpdateManyWithoutQuestRegionsInput";
import { Type } from "class-transformer";
import { QuestPoiUpdateManyWithoutQuestRegionsInput } from "./QuestPoiUpdateManyWithoutQuestRegionsInput";

@InputType()
class QuestRegionUpdateInput {
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
  name?: string;

  @ApiProperty({
    required: false,
    type: () => QuestObjectiveUpdateManyWithoutQuestRegionsInput,
  })
  @ValidateNested()
  @Type(() => QuestObjectiveUpdateManyWithoutQuestRegionsInput)
  @IsOptional()
  @Field(() => QuestObjectiveUpdateManyWithoutQuestRegionsInput, {
    nullable: true,
  })
  questObjectives?: QuestObjectiveUpdateManyWithoutQuestRegionsInput;

  @ApiProperty({
    required: false,
    type: () => QuestPoiUpdateManyWithoutQuestRegionsInput,
  })
  @ValidateNested()
  @Type(() => QuestPoiUpdateManyWithoutQuestRegionsInput)
  @IsOptional()
  @Field(() => QuestPoiUpdateManyWithoutQuestRegionsInput, {
    nullable: true,
  })
  questPoiPoints?: QuestPoiUpdateManyWithoutQuestRegionsInput;
}

export { QuestRegionUpdateInput as QuestRegionUpdateInput };
