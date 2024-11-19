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
import { QuestRewardItemWhereUniqueInput } from "./QuestRewardItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { QuestRewardItemUpdateInput } from "./QuestRewardItemUpdateInput";

@ArgsType()
class UpdateQuestRewardItemArgs {
  @ApiProperty({
    required: true,
    type: () => QuestRewardItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestRewardItemWhereUniqueInput)
  @Field(() => QuestRewardItemWhereUniqueInput, { nullable: false })
  where!: QuestRewardItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => QuestRewardItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => QuestRewardItemUpdateInput)
  @Field(() => QuestRewardItemUpdateInput, { nullable: false })
  data!: QuestRewardItemUpdateInput;
}

export { UpdateQuestRewardItemArgs as UpdateQuestRewardItemArgs };
