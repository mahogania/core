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
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { CreatureCreateNestedManyWithoutCreatureImmunitiesInput } from "./CreatureCreateNestedManyWithoutCreatureImmunitiesInput";
import { Type } from "class-transformer";

@InputType()
class CreatureImmunityCreateInput {
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
  auras?: string | null;

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
    type: () => CreatureCreateNestedManyWithoutCreatureImmunitiesInput,
  })
  @ValidateNested()
  @Type(() => CreatureCreateNestedManyWithoutCreatureImmunitiesInput)
  @IsOptional()
  @Field(() => CreatureCreateNestedManyWithoutCreatureImmunitiesInput, {
    nullable: true,
  })
  creatures?: CreatureCreateNestedManyWithoutCreatureImmunitiesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  dispelMask!: string;

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
  effects?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  mechanicMask!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  schoolMask!: string;
}

export { CreatureImmunityCreateInput as CreatureImmunityCreateInput };
