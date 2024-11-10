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
import { GameEventGameObjectWhereInput } from "./GameEventGameObjectWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GameEventGameObjectListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GameEventGameObjectWhereInput,
  })
  @ValidateNested()
  @Type(() => GameEventGameObjectWhereInput)
  @IsOptional()
  @Field(() => GameEventGameObjectWhereInput, {
    nullable: true,
  })
  every?: GameEventGameObjectWhereInput;

  @ApiProperty({
    required: false,
    type: () => GameEventGameObjectWhereInput,
  })
  @ValidateNested()
  @Type(() => GameEventGameObjectWhereInput)
  @IsOptional()
  @Field(() => GameEventGameObjectWhereInput, {
    nullable: true,
  })
  some?: GameEventGameObjectWhereInput;

  @ApiProperty({
    required: false,
    type: () => GameEventGameObjectWhereInput,
  })
  @ValidateNested()
  @Type(() => GameEventGameObjectWhereInput)
  @IsOptional()
  @Field(() => GameEventGameObjectWhereInput, {
    nullable: true,
  })
  none?: GameEventGameObjectWhereInput;
}
export { GameEventGameObjectListRelationFilter as GameEventGameObjectListRelationFilter };
