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
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { GameEventListRelationFilter } from "../../gameEvent/base/GameEventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class GameEventGameObjectWhereInput {
  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  eventEntry?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => GameEventListRelationFilter,
  })
  @ValidateNested()
  @Type(() => GameEventListRelationFilter)
  @IsOptional()
  @Field(() => GameEventListRelationFilter, {
    nullable: true,
  })
  gameEvents?: GameEventListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  guid?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;
}

export { GameEventGameObjectWhereInput as GameEventGameObjectWhereInput };
