/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  MaxLength,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { GameEvent } from "../../gameEvent/base/GameEvent";

@ObjectType()
class GameEventModelEquip {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  equipmentId!: string;

  @ApiProperty({
    required: false,
    type: () => [GameEvent],
  })
  @ValidateNested()
  @Type(() => GameEvent)
  @IsOptional()
  gameEvents?: Array<GameEvent>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  modelid!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { GameEventModelEquip as GameEventModelEquip };
