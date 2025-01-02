/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QuestCompletionConditionalWhereUniqueInput } from "./QuestCompletionConditionalWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { QuestCompletionConditionalUpdateInput } from "./QuestCompletionConditionalUpdateInput";

@ArgsType()
class UpdateQuestCompletionConditionalArgs {
  @ApiProperty({
    required: true,
    type: () => QuestCompletionConditionalWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestCompletionConditionalWhereUniqueInput)
  @Field(() => QuestCompletionConditionalWhereUniqueInput, { nullable: false })
  where!: QuestCompletionConditionalWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => QuestCompletionConditionalUpdateInput,
  })
  @ValidateNested()
  @Type(() => QuestCompletionConditionalUpdateInput)
  @Field(() => QuestCompletionConditionalUpdateInput, { nullable: false })
  data!: QuestCompletionConditionalUpdateInput;
}

export { UpdateQuestCompletionConditionalArgs as UpdateQuestCompletionConditionalArgs };