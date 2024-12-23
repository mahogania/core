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
import {
  IsNumber,
  Max,
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsInt,
  Min,
} from "class-validator";
import { CreatureCreateNestedManyWithoutCreatureLootsInput } from "./CreatureCreateNestedManyWithoutCreatureLootsInput";
import { Type } from "class-transformer";

@InputType()
class CreatureLootCreateInput {
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
  comment?: string | null;

  @ApiProperty({
    required: false,
    type: () => CreatureCreateNestedManyWithoutCreatureLootsInput,
  })
  @ValidateNested()
  @Type(() => CreatureCreateNestedManyWithoutCreatureLootsInput)
  @IsOptional()
  @Field(() => CreatureCreateNestedManyWithoutCreatureLootsInput, {
    nullable: true,
  })
  creatures?: CreatureCreateNestedManyWithoutCreatureLootsInput;

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
  questId?: string | null;
}

export { CreatureLootCreateInput as CreatureLootCreateInput };
