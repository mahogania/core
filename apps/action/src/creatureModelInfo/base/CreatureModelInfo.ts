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
  IsNumber,
  Max,
  Min,
  IsDate,
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";

import { Type } from "class-transformer";
import { Creature } from "../../creature/base/Creature";

@ObjectType()
class CreatureModelInfo {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Max(999999999)
  @Field(() => Number)
  boundRadius!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @Field(() => Number)
  combatRadius!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Creature],
  })
  @ValidateNested()
  @Type(() => Creature)
  @IsOptional()
  creatures?: Array<Creature>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  displayId!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { CreatureModelInfo as CreatureModelInfo };
