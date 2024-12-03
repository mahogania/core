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
import { GameEventConditionCreateInput } from "./GameEventConditionCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateGameEventConditionArgs {
  @ApiProperty({
    required: true,
    type: () => GameEventConditionCreateInput,
  })
  @ValidateNested()
  @Type(() => GameEventConditionCreateInput)
  @Field(() => GameEventConditionCreateInput, { nullable: false })
  data!: GameEventConditionCreateInput;
}

export { CreateGameEventConditionArgs as CreateGameEventConditionArgs };
