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
import { QuestRequestItemConditionalWhereInput } from "./QuestRequestItemConditionalWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class QuestRequestItemConditionalCountArgs {
  @ApiProperty({
    required: false,
    type: () => QuestRequestItemConditionalWhereInput,
  })
  @Field(() => QuestRequestItemConditionalWhereInput, { nullable: true })
  @Type(() => QuestRequestItemConditionalWhereInput)
  where?: QuestRequestItemConditionalWhereInput;
}

export { QuestRequestItemConditionalCountArgs as QuestRequestItemConditionalCountArgs };
