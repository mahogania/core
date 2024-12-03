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
import { PointsOfInterestLocaleWhereInput } from "./PointsOfInterestLocaleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PointsOfInterestLocaleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PointsOfInterestLocaleWhereInput,
  })
  @ValidateNested()
  @Type(() => PointsOfInterestLocaleWhereInput)
  @IsOptional()
  @Field(() => PointsOfInterestLocaleWhereInput, {
    nullable: true,
  })
  every?: PointsOfInterestLocaleWhereInput;

  @ApiProperty({
    required: false,
    type: () => PointsOfInterestLocaleWhereInput,
  })
  @ValidateNested()
  @Type(() => PointsOfInterestLocaleWhereInput)
  @IsOptional()
  @Field(() => PointsOfInterestLocaleWhereInput, {
    nullable: true,
  })
  some?: PointsOfInterestLocaleWhereInput;

  @ApiProperty({
    required: false,
    type: () => PointsOfInterestLocaleWhereInput,
  })
  @ValidateNested()
  @Type(() => PointsOfInterestLocaleWhereInput)
  @IsOptional()
  @Field(() => PointsOfInterestLocaleWhereInput, {
    nullable: true,
  })
  none?: PointsOfInterestLocaleWhereInput;
}
export { PointsOfInterestLocaleListRelationFilter as PointsOfInterestLocaleListRelationFilter };
