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
  Min,
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { CreatureCreateNestedManyWithoutCreatureModelInfosInput } from "./CreatureCreateNestedManyWithoutCreatureModelInfosInput";
import { Type } from "class-transformer";

@InputType()
class CreatureModelInfoCreateInput {
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
    required: false,
    type: () => CreatureCreateNestedManyWithoutCreatureModelInfosInput,
  })
  @ValidateNested()
  @Type(() => CreatureCreateNestedManyWithoutCreatureModelInfosInput)
  @IsOptional()
  @Field(() => CreatureCreateNestedManyWithoutCreatureModelInfosInput, {
    nullable: true,
  })
  creatures?: CreatureCreateNestedManyWithoutCreatureModelInfosInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  displayId!: string;
}

export { CreatureModelInfoCreateInput as CreatureModelInfoCreateInput };