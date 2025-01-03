/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PointsOfInterestWhereInput } from "./PointsOfInterestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PointsOfInterestOrderByInput } from "./PointsOfInterestOrderByInput";

@ArgsType()
class PointsOfInterestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PointsOfInterestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PointsOfInterestWhereInput, { nullable: true })
  @Type(() => PointsOfInterestWhereInput)
  where?: PointsOfInterestWhereInput;

  @ApiProperty({
    required: false,
    type: [PointsOfInterestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PointsOfInterestOrderByInput], { nullable: true })
  @Type(() => PointsOfInterestOrderByInput)
  orderBy?: Array<PointsOfInterestOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PointsOfInterestFindManyArgs as PointsOfInterestFindManyArgs };
