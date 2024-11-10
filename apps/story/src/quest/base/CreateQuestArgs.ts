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
import { QuestCreateInput } from "./QuestCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateQuestArgs {
  @ApiProperty({
    required: true,
    type: () => QuestCreateInput,
  })
  @ValidateNested()
  @Type(() => QuestCreateInput)
  @Field(() => QuestCreateInput, { nullable: false })
  data!: QuestCreateInput;
}

export { CreateQuestArgs as CreateQuestArgs };
