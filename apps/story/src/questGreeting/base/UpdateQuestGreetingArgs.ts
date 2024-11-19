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
import { QuestGreetingWhereUniqueInput } from "./QuestGreetingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { QuestGreetingUpdateInput } from "./QuestGreetingUpdateInput";

@ArgsType()
class UpdateQuestGreetingArgs {
  @ApiProperty({
    required: true,
    type: () => QuestGreetingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestGreetingWhereUniqueInput)
  @Field(() => QuestGreetingWhereUniqueInput, { nullable: false })
  where!: QuestGreetingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => QuestGreetingUpdateInput,
  })
  @ValidateNested()
  @Type(() => QuestGreetingUpdateInput)
  @Field(() => QuestGreetingUpdateInput, { nullable: false })
  data!: QuestGreetingUpdateInput;
}

export { UpdateQuestGreetingArgs as UpdateQuestGreetingArgs };
