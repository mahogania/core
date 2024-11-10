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
import { QuestPoiPointsWhereInput } from "./QuestPoiPointsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QuestPoiPointsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => QuestPoiPointsWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestPoiPointsWhereInput)
  @IsOptional()
  @Field(() => QuestPoiPointsWhereInput, {
    nullable: true,
  })
  every?: QuestPoiPointsWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestPoiPointsWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestPoiPointsWhereInput)
  @IsOptional()
  @Field(() => QuestPoiPointsWhereInput, {
    nullable: true,
  })
  some?: QuestPoiPointsWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestPoiPointsWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestPoiPointsWhereInput)
  @IsOptional()
  @Field(() => QuestPoiPointsWhereInput, {
    nullable: true,
  })
  none?: QuestPoiPointsWhereInput;
}
export { QuestPoiPointsListRelationFilter as QuestPoiPointsListRelationFilter };