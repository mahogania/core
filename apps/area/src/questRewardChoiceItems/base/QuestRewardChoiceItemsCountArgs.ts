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
import { QuestRewardChoiceItemsWhereInput } from "./QuestRewardChoiceItemsWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class QuestRewardChoiceItemsCountArgs {
  @ApiProperty({
    required: false,
    type: () => QuestRewardChoiceItemsWhereInput,
  })
  @Field(() => QuestRewardChoiceItemsWhereInput, { nullable: true })
  @Type(() => QuestRewardChoiceItemsWhereInput)
  where?: QuestRewardChoiceItemsWhereInput;
}

export { QuestRewardChoiceItemsCountArgs as QuestRewardChoiceItemsCountArgs };
