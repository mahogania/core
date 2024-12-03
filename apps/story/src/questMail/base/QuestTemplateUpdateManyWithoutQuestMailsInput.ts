/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { QuestTemplateWhereUniqueInput } from "../../questTemplate/base/QuestTemplateWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class QuestTemplateUpdateManyWithoutQuestMailsInput {
  @Field(() => [QuestTemplateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestTemplateWhereUniqueInput],
  })
  connect?: Array<QuestTemplateWhereUniqueInput>;

  @Field(() => [QuestTemplateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestTemplateWhereUniqueInput],
  })
  disconnect?: Array<QuestTemplateWhereUniqueInput>;

  @Field(() => [QuestTemplateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestTemplateWhereUniqueInput],
  })
  set?: Array<QuestTemplateWhereUniqueInput>;
}

export { QuestTemplateUpdateManyWithoutQuestMailsInput as QuestTemplateUpdateManyWithoutQuestMailsInput };
