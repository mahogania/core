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
import { GameEventCreatureWhereInput } from "./GameEventCreatureWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GameEventCreatureListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GameEventCreatureWhereInput,
  })
  @ValidateNested()
  @Type(() => GameEventCreatureWhereInput)
  @IsOptional()
  @Field(() => GameEventCreatureWhereInput, {
    nullable: true,
  })
  every?: GameEventCreatureWhereInput;

  @ApiProperty({
    required: false,
    type: () => GameEventCreatureWhereInput,
  })
  @ValidateNested()
  @Type(() => GameEventCreatureWhereInput)
  @IsOptional()
  @Field(() => GameEventCreatureWhereInput, {
    nullable: true,
  })
  some?: GameEventCreatureWhereInput;

  @ApiProperty({
    required: false,
    type: () => GameEventCreatureWhereInput,
  })
  @ValidateNested()
  @Type(() => GameEventCreatureWhereInput)
  @IsOptional()
  @Field(() => GameEventCreatureWhereInput, {
    nullable: true,
  })
  none?: GameEventCreatureWhereInput;
}
export { GameEventCreatureListRelationFilter as GameEventCreatureListRelationFilter };
