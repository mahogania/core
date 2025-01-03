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
import { QuestWhereUniqueInput } from "./QuestWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteQuestArgs {
  @ApiProperty({
    required: true,
    type: () => QuestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestWhereUniqueInput)
  @Field(() => QuestWhereUniqueInput, { nullable: false })
  where!: QuestWhereUniqueInput;
}

export { DeleteQuestArgs as DeleteQuestArgs };
