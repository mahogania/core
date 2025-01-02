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
import { PetLevelstatsWhereInput } from "./PetLevelstatsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PetLevelstatsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PetLevelstatsWhereInput,
  })
  @ValidateNested()
  @Type(() => PetLevelstatsWhereInput)
  @IsOptional()
  @Field(() => PetLevelstatsWhereInput, {
    nullable: true,
  })
  every?: PetLevelstatsWhereInput;

  @ApiProperty({
    required: false,
    type: () => PetLevelstatsWhereInput,
  })
  @ValidateNested()
  @Type(() => PetLevelstatsWhereInput)
  @IsOptional()
  @Field(() => PetLevelstatsWhereInput, {
    nullable: true,
  })
  some?: PetLevelstatsWhereInput;

  @ApiProperty({
    required: false,
    type: () => PetLevelstatsWhereInput,
  })
  @ValidateNested()
  @Type(() => PetLevelstatsWhereInput)
  @IsOptional()
  @Field(() => PetLevelstatsWhereInput, {
    nullable: true,
  })
  none?: PetLevelstatsWhereInput;
}
export { PetLevelstatsListRelationFilter as PetLevelstatsListRelationFilter };