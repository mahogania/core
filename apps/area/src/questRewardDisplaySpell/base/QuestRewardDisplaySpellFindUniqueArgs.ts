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
import { QuestRewardDisplaySpellWhereUniqueInput } from "./QuestRewardDisplaySpellWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class QuestRewardDisplaySpellFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => QuestRewardDisplaySpellWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestRewardDisplaySpellWhereUniqueInput)
  @Field(() => QuestRewardDisplaySpellWhereUniqueInput, { nullable: false })
  where!: QuestRewardDisplaySpellWhereUniqueInput;
}

export { QuestRewardDisplaySpellFindUniqueArgs as QuestRewardDisplaySpellFindUniqueArgs };
