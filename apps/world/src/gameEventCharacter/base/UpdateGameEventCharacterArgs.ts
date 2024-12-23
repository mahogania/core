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
import { GameEventCharacterWhereUniqueInput } from "./GameEventCharacterWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { GameEventCharacterUpdateInput } from "./GameEventCharacterUpdateInput";

@ArgsType()
class UpdateGameEventCharacterArgs {
  @ApiProperty({
    required: true,
    type: () => GameEventCharacterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GameEventCharacterWhereUniqueInput)
  @Field(() => GameEventCharacterWhereUniqueInput, { nullable: false })
  where!: GameEventCharacterWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => GameEventCharacterUpdateInput,
  })
  @ValidateNested()
  @Type(() => GameEventCharacterUpdateInput)
  @Field(() => GameEventCharacterUpdateInput, { nullable: false })
  data!: GameEventCharacterUpdateInput;
}

export { UpdateGameEventCharacterArgs as UpdateGameEventCharacterArgs };
