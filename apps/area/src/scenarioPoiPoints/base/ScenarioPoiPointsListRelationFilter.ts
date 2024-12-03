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
import { ScenarioPoiPointsWhereInput } from "./ScenarioPoiPointsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ScenarioPoiPointsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ScenarioPoiPointsWhereInput,
  })
  @ValidateNested()
  @Type(() => ScenarioPoiPointsWhereInput)
  @IsOptional()
  @Field(() => ScenarioPoiPointsWhereInput, {
    nullable: true,
  })
  every?: ScenarioPoiPointsWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScenarioPoiPointsWhereInput,
  })
  @ValidateNested()
  @Type(() => ScenarioPoiPointsWhereInput)
  @IsOptional()
  @Field(() => ScenarioPoiPointsWhereInput, {
    nullable: true,
  })
  some?: ScenarioPoiPointsWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScenarioPoiPointsWhereInput,
  })
  @ValidateNested()
  @Type(() => ScenarioPoiPointsWhereInput)
  @IsOptional()
  @Field(() => ScenarioPoiPointsWhereInput, {
    nullable: true,
  })
  none?: ScenarioPoiPointsWhereInput;
}
export { ScenarioPoiPointsListRelationFilter as ScenarioPoiPointsListRelationFilter };
