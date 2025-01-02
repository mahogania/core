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
import { PointOfInterestWhereInput } from "./PointOfInterestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PointOfInterestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PointOfInterestWhereInput,
  })
  @ValidateNested()
  @Type(() => PointOfInterestWhereInput)
  @IsOptional()
  @Field(() => PointOfInterestWhereInput, {
    nullable: true,
  })
  every?: PointOfInterestWhereInput;

  @ApiProperty({
    required: false,
    type: () => PointOfInterestWhereInput,
  })
  @ValidateNested()
  @Type(() => PointOfInterestWhereInput)
  @IsOptional()
  @Field(() => PointOfInterestWhereInput, {
    nullable: true,
  })
  some?: PointOfInterestWhereInput;

  @ApiProperty({
    required: false,
    type: () => PointOfInterestWhereInput,
  })
  @ValidateNested()
  @Type(() => PointOfInterestWhereInput)
  @IsOptional()
  @Field(() => PointOfInterestWhereInput, {
    nullable: true,
  })
  none?: PointOfInterestWhereInput;
}
export { PointOfInterestListRelationFilter as PointOfInterestListRelationFilter };