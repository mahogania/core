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
  IsOptional,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { PointsOfInterestLocaleUpdateManyWithoutPointOfInterestsInput } from "./PointsOfInterestLocaleUpdateManyWithoutPointOfInterestsInput";
import { Type } from "class-transformer";
import { QuestPoiUpdateManyWithoutPointOfInterestsInput } from "./QuestPoiUpdateManyWithoutPointOfInterestsInput";

@InputType()
class PointOfInterestUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string;

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
    type: () => PointsOfInterestLocaleUpdateManyWithoutPointOfInterestsInput,
  })
  @ValidateNested()
  @Type(() => PointsOfInterestLocaleUpdateManyWithoutPointOfInterestsInput)
  @IsOptional()
  @Field(() => PointsOfInterestLocaleUpdateManyWithoutPointOfInterestsInput, {
    nullable: true,
  })
  pointsOfInterestLocales?: PointsOfInterestLocaleUpdateManyWithoutPointOfInterestsInput;

  @ApiProperty({
    required: false,
    type: () => QuestPoiUpdateManyWithoutPointOfInterestsInput,
  })
  @ValidateNested()
  @Type(() => QuestPoiUpdateManyWithoutPointOfInterestsInput)
  @IsOptional()
  @Field(() => QuestPoiUpdateManyWithoutPointOfInterestsInput, {
    nullable: true,
  })
  questPoiPoints?: QuestPoiUpdateManyWithoutPointOfInterestsInput;
}

export { PointOfInterestUpdateInput as PointOfInterestUpdateInput };
