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
import { GameEventModelEquipWhereInput } from "./GameEventModelEquipWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GameEventModelEquipListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GameEventModelEquipWhereInput,
  })
  @ValidateNested()
  @Type(() => GameEventModelEquipWhereInput)
  @IsOptional()
  @Field(() => GameEventModelEquipWhereInput, {
    nullable: true,
  })
  every?: GameEventModelEquipWhereInput;

  @ApiProperty({
    required: false,
    type: () => GameEventModelEquipWhereInput,
  })
  @ValidateNested()
  @Type(() => GameEventModelEquipWhereInput)
  @IsOptional()
  @Field(() => GameEventModelEquipWhereInput, {
    nullable: true,
  })
  some?: GameEventModelEquipWhereInput;

  @ApiProperty({
    required: false,
    type: () => GameEventModelEquipWhereInput,
  })
  @ValidateNested()
  @Type(() => GameEventModelEquipWhereInput)
  @IsOptional()
  @Field(() => GameEventModelEquipWhereInput, {
    nullable: true,
  })
  none?: GameEventModelEquipWhereInput;
}
export { GameEventModelEquipListRelationFilter as GameEventModelEquipListRelationFilter };
