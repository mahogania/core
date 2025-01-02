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
import { QuestCueEffectWhereInput } from "./QuestCueEffectWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QuestCueEffectListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => QuestCueEffectWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestCueEffectWhereInput)
  @IsOptional()
  @Field(() => QuestCueEffectWhereInput, {
    nullable: true,
  })
  every?: QuestCueEffectWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestCueEffectWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestCueEffectWhereInput)
  @IsOptional()
  @Field(() => QuestCueEffectWhereInput, {
    nullable: true,
  })
  some?: QuestCueEffectWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestCueEffectWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestCueEffectWhereInput)
  @IsOptional()
  @Field(() => QuestCueEffectWhereInput, {
    nullable: true,
  })
  none?: QuestCueEffectWhereInput;
}
export { QuestCueEffectListRelationFilter as QuestCueEffectListRelationFilter };