/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GameEventCreatureQuestWhereInput } from "./GameEventCreatureQuestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GameEventCreatureQuestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GameEventCreatureQuestWhereInput,
  })
  @ValidateNested()
  @Type(() => GameEventCreatureQuestWhereInput)
  @IsOptional()
  @Field(() => GameEventCreatureQuestWhereInput, {
    nullable: true,
  })
  every?: GameEventCreatureQuestWhereInput;

  @ApiProperty({
    required: false,
    type: () => GameEventCreatureQuestWhereInput,
  })
  @ValidateNested()
  @Type(() => GameEventCreatureQuestWhereInput)
  @IsOptional()
  @Field(() => GameEventCreatureQuestWhereInput, {
    nullable: true,
  })
  some?: GameEventCreatureQuestWhereInput;

  @ApiProperty({
    required: false,
    type: () => GameEventCreatureQuestWhereInput,
  })
  @ValidateNested()
  @Type(() => GameEventCreatureQuestWhereInput)
  @IsOptional()
  @Field(() => GameEventCreatureQuestWhereInput, {
    nullable: true,
  })
  none?: GameEventCreatureQuestWhereInput;
}
export { GameEventCreatureQuestListRelationFilter as GameEventCreatureQuestListRelationFilter };
