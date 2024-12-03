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
import { PointOfInterestWhereUniqueInput } from "../../pointOfInterest/base/PointOfInterestWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { QuestRegionWhereUniqueInput } from "../../questRegion/base/QuestRegionWhereUniqueInput";

@InputType()
class QuestPoiUpdateInput {
  @ApiProperty({
    required: false,
    type: () => PointOfInterestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PointOfInterestWhereUniqueInput)
  @IsOptional()
  @Field(() => PointOfInterestWhereUniqueInput, {
    nullable: true,
  })
  pointOfInterest?: PointOfInterestWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => QuestRegionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestRegionWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestRegionWhereUniqueInput, {
    nullable: true,
  })
  questPoi?: QuestRegionWhereUniqueInput | null;
}

export { QuestPoiUpdateInput as QuestPoiUpdateInput };
