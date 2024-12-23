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
import { CharacterSpellWhereInput } from "./CharacterSpellWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CharacterSpellListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CharacterSpellWhereInput,
  })
  @ValidateNested()
  @Type(() => CharacterSpellWhereInput)
  @IsOptional()
  @Field(() => CharacterSpellWhereInput, {
    nullable: true,
  })
  every?: CharacterSpellWhereInput;

  @ApiProperty({
    required: false,
    type: () => CharacterSpellWhereInput,
  })
  @ValidateNested()
  @Type(() => CharacterSpellWhereInput)
  @IsOptional()
  @Field(() => CharacterSpellWhereInput, {
    nullable: true,
  })
  some?: CharacterSpellWhereInput;

  @ApiProperty({
    required: false,
    type: () => CharacterSpellWhereInput,
  })
  @ValidateNested()
  @Type(() => CharacterSpellWhereInput)
  @IsOptional()
  @Field(() => CharacterSpellWhereInput, {
    nullable: true,
  })
  none?: CharacterSpellWhereInput;
}
export { CharacterSpellListRelationFilter as CharacterSpellListRelationFilter };
