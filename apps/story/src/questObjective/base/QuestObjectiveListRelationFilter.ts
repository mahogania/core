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
import { QuestObjectiveWhereInput } from "./QuestObjectiveWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QuestObjectiveListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => QuestObjectiveWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestObjectiveWhereInput)
  @IsOptional()
  @Field(() => QuestObjectiveWhereInput, {
    nullable: true,
  })
  every?: QuestObjectiveWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestObjectiveWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestObjectiveWhereInput)
  @IsOptional()
  @Field(() => QuestObjectiveWhereInput, {
    nullable: true,
  })
  some?: QuestObjectiveWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestObjectiveWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestObjectiveWhereInput)
  @IsOptional()
  @Field(() => QuestObjectiveWhereInput, {
    nullable: true,
  })
  none?: QuestObjectiveWhereInput;
}
export { QuestObjectiveListRelationFilter as QuestObjectiveListRelationFilter };