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
import { QuestOfferRewardConditionalWhereUniqueInput } from "./QuestOfferRewardConditionalWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { QuestOfferRewardConditionalUpdateInput } from "./QuestOfferRewardConditionalUpdateInput";

@ArgsType()
class UpdateQuestOfferRewardConditionalArgs {
  @ApiProperty({
    required: true,
    type: () => QuestOfferRewardConditionalWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestOfferRewardConditionalWhereUniqueInput)
  @Field(() => QuestOfferRewardConditionalWhereUniqueInput, { nullable: false })
  where!: QuestOfferRewardConditionalWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => QuestOfferRewardConditionalUpdateInput,
  })
  @ValidateNested()
  @Type(() => QuestOfferRewardConditionalUpdateInput)
  @Field(() => QuestOfferRewardConditionalUpdateInput, { nullable: false })
  data!: QuestOfferRewardConditionalUpdateInput;
}

export { UpdateQuestOfferRewardConditionalArgs as UpdateQuestOfferRewardConditionalArgs };
