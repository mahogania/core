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
import { QuestRequestItemWhereInput } from "./QuestRequestItemWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class QuestRequestItemCountArgs {
  @ApiProperty({
    required: false,
    type: () => QuestRequestItemWhereInput,
  })
  @Field(() => QuestRequestItemWhereInput, { nullable: true })
  @Type(() => QuestRequestItemWhereInput)
  where?: QuestRequestItemWhereInput;
}

export { QuestRequestItemCountArgs as QuestRequestItemCountArgs };