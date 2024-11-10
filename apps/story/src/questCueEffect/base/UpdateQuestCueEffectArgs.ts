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
import { QuestCueEffectWhereUniqueInput } from "./QuestCueEffectWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { QuestCueEffectUpdateInput } from "./QuestCueEffectUpdateInput";

@ArgsType()
class UpdateQuestCueEffectArgs {
  @ApiProperty({
    required: true,
    type: () => QuestCueEffectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestCueEffectWhereUniqueInput)
  @Field(() => QuestCueEffectWhereUniqueInput, { nullable: false })
  where!: QuestCueEffectWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => QuestCueEffectUpdateInput,
  })
  @ValidateNested()
  @Type(() => QuestCueEffectUpdateInput)
  @Field(() => QuestCueEffectUpdateInput, { nullable: false })
  data!: QuestCueEffectUpdateInput;
}

export { UpdateQuestCueEffectArgs as UpdateQuestCueEffectArgs };
