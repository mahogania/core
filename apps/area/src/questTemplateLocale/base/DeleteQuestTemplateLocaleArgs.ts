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
import { QuestTemplateLocaleWhereUniqueInput } from "./QuestTemplateLocaleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteQuestTemplateLocaleArgs {
  @ApiProperty({
    required: true,
    type: () => QuestTemplateLocaleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestTemplateLocaleWhereUniqueInput)
  @Field(() => QuestTemplateLocaleWhereUniqueInput, { nullable: false })
  where!: QuestTemplateLocaleWhereUniqueInput;
}

export { DeleteQuestTemplateLocaleArgs as DeleteQuestTemplateLocaleArgs };
