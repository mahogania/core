/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { QuestRequestItemsLocaleWhereUniqueInput } from "../../questRequestItemsLocale/base/QuestRequestItemsLocaleWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class QuestRequestItemsLocaleUpdateManyWithoutQuestRequestItemsInput {
  @Field(() => [QuestRequestItemsLocaleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestRequestItemsLocaleWhereUniqueInput],
  })
  connect?: Array<QuestRequestItemsLocaleWhereUniqueInput>;

  @Field(() => [QuestRequestItemsLocaleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestRequestItemsLocaleWhereUniqueInput],
  })
  disconnect?: Array<QuestRequestItemsLocaleWhereUniqueInput>;

  @Field(() => [QuestRequestItemsLocaleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestRequestItemsLocaleWhereUniqueInput],
  })
  set?: Array<QuestRequestItemsLocaleWhereUniqueInput>;
}

export { QuestRequestItemsLocaleUpdateManyWithoutQuestRequestItemsInput as QuestRequestItemsLocaleUpdateManyWithoutQuestRequestItemsInput };
