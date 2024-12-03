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
import { ScenarioWhereInput } from "./ScenarioWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ScenarioListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ScenarioWhereInput,
  })
  @ValidateNested()
  @Type(() => ScenarioWhereInput)
  @IsOptional()
  @Field(() => ScenarioWhereInput, {
    nullable: true,
  })
  every?: ScenarioWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScenarioWhereInput,
  })
  @ValidateNested()
  @Type(() => ScenarioWhereInput)
  @IsOptional()
  @Field(() => ScenarioWhereInput, {
    nullable: true,
  })
  some?: ScenarioWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScenarioWhereInput,
  })
  @ValidateNested()
  @Type(() => ScenarioWhereInput)
  @IsOptional()
  @Field(() => ScenarioWhereInput, {
    nullable: true,
  })
  none?: ScenarioWhereInput;
}
export { ScenarioListRelationFilter as ScenarioListRelationFilter };
