/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { QuestCompletionConditionalWhereUniqueInput } from "../../questCompletionConditional/base/QuestCompletionConditionalWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class QuestCompletionConditionalCreateNestedManyWithoutQuestsInput {
  @Field(() => [QuestCompletionConditionalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestCompletionConditionalWhereUniqueInput],
  })
  connect?: Array<QuestCompletionConditionalWhereUniqueInput>;
}

export { QuestCompletionConditionalCreateNestedManyWithoutQuestsInput as QuestCompletionConditionalCreateNestedManyWithoutQuestsInput };