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
import { CreatureQuestCurrencyCreateInput } from "./CreatureQuestCurrencyCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateCreatureQuestCurrencyArgs {
  @ApiProperty({
    required: true,
    type: () => CreatureQuestCurrencyCreateInput,
  })
  @ValidateNested()
  @Type(() => CreatureQuestCurrencyCreateInput)
  @Field(() => CreatureQuestCurrencyCreateInput, { nullable: false })
  data!: CreatureQuestCurrencyCreateInput;
}

export { CreateCreatureQuestCurrencyArgs as CreateCreatureQuestCurrencyArgs };