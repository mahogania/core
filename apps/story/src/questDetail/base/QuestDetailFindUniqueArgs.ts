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
import { QuestDetailWhereUniqueInput } from "./QuestDetailWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class QuestDetailFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => QuestDetailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestDetailWhereUniqueInput)
  @Field(() => QuestDetailWhereUniqueInput, { nullable: false })
  where!: QuestDetailWhereUniqueInput;
}

export { QuestDetailFindUniqueArgs as QuestDetailFindUniqueArgs };
