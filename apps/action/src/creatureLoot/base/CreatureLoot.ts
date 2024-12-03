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
  IsString,
  MaxLength,
  IsOptional,
  IsDate,
  ValidateNested,
  IsInt,
  Min,
} from "class-validator";

import { Type } from "class-transformer";
import { Creature } from "../../creature/base/Creature";

@ObjectType()
class CreatureLoot {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Max(1)
  @Field(() => Number)
  chance!: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comment!: string | null;

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
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  itemId!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @Field(() => Number)
  maxCount!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @Field(() => Number)
  minCount!: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  questId!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { CreatureLoot as CreatureLoot };
