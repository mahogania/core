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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { PointsOfInterestLocaleListRelationFilter } from "../../pointsOfInterestLocale/base/PointsOfInterestLocaleListRelationFilter";
import { QuestPoiListRelationFilter } from "../../questPoi/base/QuestPoiListRelationFilter";

@InputType()
class PointOfInterestWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  location?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PointsOfInterestLocaleListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PointsOfInterestLocaleListRelationFilter)
  @IsOptional()
  @Field(() => PointsOfInterestLocaleListRelationFilter, {
    nullable: true,
  })
  pointsOfInterestLocales?: PointsOfInterestLocaleListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => QuestPoiListRelationFilter,
  })
  @ValidateNested()
  @Type(() => QuestPoiListRelationFilter)
  @IsOptional()
  @Field(() => QuestPoiListRelationFilter, {
    nullable: true,
  })
  questPoiPoints?: QuestPoiListRelationFilter;
}

export { PointOfInterestWhereInput as PointOfInterestWhereInput };