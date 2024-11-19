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
import { GameObjectQuestEnderWhereInput } from "./GameObjectQuestEnderWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GameObjectQuestEnderListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GameObjectQuestEnderWhereInput,
  })
  @ValidateNested()
  @Type(() => GameObjectQuestEnderWhereInput)
  @IsOptional()
  @Field(() => GameObjectQuestEnderWhereInput, {
    nullable: true,
  })
  every?: GameObjectQuestEnderWhereInput;

  @ApiProperty({
    required: false,
    type: () => GameObjectQuestEnderWhereInput,
  })
  @ValidateNested()
  @Type(() => GameObjectQuestEnderWhereInput)
  @IsOptional()
  @Field(() => GameObjectQuestEnderWhereInput, {
    nullable: true,
  })
  some?: GameObjectQuestEnderWhereInput;

  @ApiProperty({
    required: false,
    type: () => GameObjectQuestEnderWhereInput,
  })
  @ValidateNested()
  @Type(() => GameObjectQuestEnderWhereInput)
  @IsOptional()
  @Field(() => GameObjectQuestEnderWhereInput, {
    nullable: true,
  })
  none?: GameObjectQuestEnderWhereInput;
}
export { GameObjectQuestEnderListRelationFilter as GameObjectQuestEnderListRelationFilter };