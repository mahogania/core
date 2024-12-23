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
import { QuestCompletionLogConditionalWhereInput } from "./QuestCompletionLogConditionalWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QuestCompletionLogConditionalListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => QuestCompletionLogConditionalWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestCompletionLogConditionalWhereInput)
  @IsOptional()
  @Field(() => QuestCompletionLogConditionalWhereInput, {
    nullable: true,
  })
  every?: QuestCompletionLogConditionalWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestCompletionLogConditionalWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestCompletionLogConditionalWhereInput)
  @IsOptional()
  @Field(() => QuestCompletionLogConditionalWhereInput, {
    nullable: true,
  })
  some?: QuestCompletionLogConditionalWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestCompletionLogConditionalWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestCompletionLogConditionalWhereInput)
  @IsOptional()
  @Field(() => QuestCompletionLogConditionalWhereInput, {
    nullable: true,
  })
  none?: QuestCompletionLogConditionalWhereInput;
}
export { QuestCompletionLogConditionalListRelationFilter as QuestCompletionLogConditionalListRelationFilter };
