/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  MaxLength,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { PointsOfInterestLocale } from "../../pointsOfInterestLocale/base/PointsOfInterestLocale";
import { QuestPoi } from "../../questPoi/base/QuestPoi";

@ObjectType()
class PointOfInterest {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
    type: () => [PointsOfInterestLocale],
  })
  @ValidateNested()
  @Type(() => PointsOfInterestLocale)
  @IsOptional()
  pointsOfInterestLocales?: Array<PointsOfInterestLocale>;

  @ApiProperty({
    required: false,
    type: () => [QuestPoi],
  })
  @ValidateNested()
  @Type(() => QuestPoi)
  @IsOptional()
  questPoiPoints?: Array<QuestPoi>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { PointOfInterest as PointOfInterest };
