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
import { QuestTemplateAddonWhereInput } from "./QuestTemplateAddonWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class QuestTemplateAddonCountArgs {
  @ApiProperty({
    required: false,
    type: () => QuestTemplateAddonWhereInput,
  })
  @Field(() => QuestTemplateAddonWhereInput, { nullable: true })
  @Type(() => QuestTemplateAddonWhereInput)
  where?: QuestTemplateAddonWhereInput;
}

export { QuestTemplateAddonCountArgs as QuestTemplateAddonCountArgs };