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
import { GameEventConditionWhereInput } from "./GameEventConditionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GameEventConditionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GameEventConditionWhereInput,
  })
  @ValidateNested()
  @Type(() => GameEventConditionWhereInput)
  @IsOptional()
  @Field(() => GameEventConditionWhereInput, {
    nullable: true,
  })
  every?: GameEventConditionWhereInput;

  @ApiProperty({
    required: false,
    type: () => GameEventConditionWhereInput,
  })
  @ValidateNested()
  @Type(() => GameEventConditionWhereInput)
  @IsOptional()
  @Field(() => GameEventConditionWhereInput, {
    nullable: true,
  })
  some?: GameEventConditionWhereInput;

  @ApiProperty({
    required: false,
    type: () => GameEventConditionWhereInput,
  })
  @ValidateNested()
  @Type(() => GameEventConditionWhereInput)
  @IsOptional()
  @Field(() => GameEventConditionWhereInput, {
    nullable: true,
  })
  none?: GameEventConditionWhereInput;
}
export { GameEventConditionListRelationFilter as GameEventConditionListRelationFilter };