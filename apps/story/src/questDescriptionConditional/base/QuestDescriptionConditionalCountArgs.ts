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
import { QuestDescriptionConditionalWhereInput } from "./QuestDescriptionConditionalWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class QuestDescriptionConditionalCountArgs {
  @ApiProperty({
    required: false,
    type: () => QuestDescriptionConditionalWhereInput,
  })
  @Field(() => QuestDescriptionConditionalWhereInput, { nullable: true })
  @Type(() => QuestDescriptionConditionalWhereInput)
  where?: QuestDescriptionConditionalWhereInput;
}

export { QuestDescriptionConditionalCountArgs as QuestDescriptionConditionalCountArgs };
