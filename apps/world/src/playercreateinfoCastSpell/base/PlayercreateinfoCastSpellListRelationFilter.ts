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
import { PlayercreateinfoCastSpellWhereInput } from "./PlayercreateinfoCastSpellWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PlayercreateinfoCastSpellListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PlayercreateinfoCastSpellWhereInput,
  })
  @ValidateNested()
  @Type(() => PlayercreateinfoCastSpellWhereInput)
  @IsOptional()
  @Field(() => PlayercreateinfoCastSpellWhereInput, {
    nullable: true,
  })
  every?: PlayercreateinfoCastSpellWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlayercreateinfoCastSpellWhereInput,
  })
  @ValidateNested()
  @Type(() => PlayercreateinfoCastSpellWhereInput)
  @IsOptional()
  @Field(() => PlayercreateinfoCastSpellWhereInput, {
    nullable: true,
  })
  some?: PlayercreateinfoCastSpellWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlayercreateinfoCastSpellWhereInput,
  })
  @ValidateNested()
  @Type(() => PlayercreateinfoCastSpellWhereInput)
  @IsOptional()
  @Field(() => PlayercreateinfoCastSpellWhereInput, {
    nullable: true,
  })
  none?: PlayercreateinfoCastSpellWhereInput;
}
export { PlayercreateinfoCastSpellListRelationFilter as PlayercreateinfoCastSpellListRelationFilter };
