/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { QuestDescriptionConditionalWhereUniqueInput } from "../../questDescriptionConditional/base/QuestDescriptionConditionalWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class QuestDescriptionConditionalUpdateManyWithoutQuestsInput {
  @Field(() => [QuestDescriptionConditionalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestDescriptionConditionalWhereUniqueInput],
  })
  connect?: Array<QuestDescriptionConditionalWhereUniqueInput>;

  @Field(() => [QuestDescriptionConditionalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestDescriptionConditionalWhereUniqueInput],
  })
  disconnect?: Array<QuestDescriptionConditionalWhereUniqueInput>;

  @Field(() => [QuestDescriptionConditionalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestDescriptionConditionalWhereUniqueInput],
  })
  set?: Array<QuestDescriptionConditionalWhereUniqueInput>;
}

export { QuestDescriptionConditionalUpdateManyWithoutQuestsInput as QuestDescriptionConditionalUpdateManyWithoutQuestsInput };
