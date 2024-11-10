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
import { QuestRequestItemWhereUniqueInput } from "./QuestRequestItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { QuestRequestItemUpdateInput } from "./QuestRequestItemUpdateInput";

@ArgsType()
class UpdateQuestRequestItemArgs {
  @ApiProperty({
    required: true,
    type: () => QuestRequestItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestRequestItemWhereUniqueInput)
  @Field(() => QuestRequestItemWhereUniqueInput, { nullable: false })
  where!: QuestRequestItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => QuestRequestItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => QuestRequestItemUpdateInput)
  @Field(() => QuestRequestItemUpdateInput, { nullable: false })
  data!: QuestRequestItemUpdateInput;
}

export { UpdateQuestRequestItemArgs as UpdateQuestRequestItemArgs };
