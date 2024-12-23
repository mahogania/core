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
  ValidateNested,
  IsOptional,
} from "class-validator";
import { PointsOfInterestLocaleCreateNestedManyWithoutPointOfInterestsInput } from "./PointsOfInterestLocaleCreateNestedManyWithoutPointOfInterestsInput";
import { Type } from "class-transformer";
import { QuestPoiCreateNestedManyWithoutPointOfInterestsInput } from "./QuestPoiCreateNestedManyWithoutPointOfInterestsInput";

@InputType()
class PointOfInterestCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  location!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () =>
      PointsOfInterestLocaleCreateNestedManyWithoutPointOfInterestsInput,
  })
  @ValidateNested()
  @Type(
    () => PointsOfInterestLocaleCreateNestedManyWithoutPointOfInterestsInput
  )
  @IsOptional()
  @Field(
    () => PointsOfInterestLocaleCreateNestedManyWithoutPointOfInterestsInput,
    {
      nullable: true,
    }
  )
  pointsOfInterestLocales?: PointsOfInterestLocaleCreateNestedManyWithoutPointOfInterestsInput;

  @ApiProperty({
    required: false,
    type: () => QuestPoiCreateNestedManyWithoutPointOfInterestsInput,
  })
  @ValidateNested()
  @Type(() => QuestPoiCreateNestedManyWithoutPointOfInterestsInput)
  @IsOptional()
  @Field(() => QuestPoiCreateNestedManyWithoutPointOfInterestsInput, {
    nullable: true,
  })
  questPoiPoints?: QuestPoiCreateNestedManyWithoutPointOfInterestsInput;
}

export { PointOfInterestCreateInput as PointOfInterestCreateInput };
