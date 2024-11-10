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
import { AreaWhereUniqueInput } from "../../area/base/AreaWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { ScenarioWhereUniqueInput } from "../../scenario/base/ScenarioWhereUniqueInput";

@InputType()
class AreaScenarioTriggerUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AreaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AreaWhereUniqueInput)
  @IsOptional()
  @Field(() => AreaWhereUniqueInput, {
    nullable: true,
  })
  area?: AreaWhereUniqueInput | null;

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
  name?: string;

  @ApiProperty({
    required: false,
    type: () => ScenarioWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScenarioWhereUniqueInput)
  @IsOptional()
  @Field(() => ScenarioWhereUniqueInput, {
    nullable: true,
  })
  scenario?: ScenarioWhereUniqueInput | null;
}

export { AreaScenarioTriggerUpdateInput as AreaScenarioTriggerUpdateInput };
