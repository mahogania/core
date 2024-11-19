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
import { SmartScriptsWhereInput } from "./SmartScriptsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SmartScriptsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SmartScriptsWhereInput,
  })
  @ValidateNested()
  @Type(() => SmartScriptsWhereInput)
  @IsOptional()
  @Field(() => SmartScriptsWhereInput, {
    nullable: true,
  })
  every?: SmartScriptsWhereInput;

  @ApiProperty({
    required: false,
    type: () => SmartScriptsWhereInput,
  })
  @ValidateNested()
  @Type(() => SmartScriptsWhereInput)
  @IsOptional()
  @Field(() => SmartScriptsWhereInput, {
    nullable: true,
  })
  some?: SmartScriptsWhereInput;

  @ApiProperty({
    required: false,
    type: () => SmartScriptsWhereInput,
  })
  @ValidateNested()
  @Type(() => SmartScriptsWhereInput)
  @IsOptional()
  @Field(() => SmartScriptsWhereInput, {
    nullable: true,
  })
  none?: SmartScriptsWhereInput;
}
export { SmartScriptsListRelationFilter as SmartScriptsListRelationFilter };