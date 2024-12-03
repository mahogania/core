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
import { GameEventGameObjectWhereUniqueInput } from "./GameEventGameObjectWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class GameEventGameObjectFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => GameEventGameObjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GameEventGameObjectWhereUniqueInput)
  @Field(() => GameEventGameObjectWhereUniqueInput, { nullable: false })
  where!: GameEventGameObjectWhereUniqueInput;
}

export { GameEventGameObjectFindUniqueArgs as GameEventGameObjectFindUniqueArgs };
