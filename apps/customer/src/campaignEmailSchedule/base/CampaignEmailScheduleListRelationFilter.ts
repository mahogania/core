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
import { CampaignEmailScheduleWhereInput } from "./CampaignEmailScheduleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CampaignEmailScheduleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CampaignEmailScheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => CampaignEmailScheduleWhereInput)
  @IsOptional()
  @Field(() => CampaignEmailScheduleWhereInput, {
    nullable: true,
  })
  every?: CampaignEmailScheduleWhereInput;

  @ApiProperty({
    required: false,
    type: () => CampaignEmailScheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => CampaignEmailScheduleWhereInput)
  @IsOptional()
  @Field(() => CampaignEmailScheduleWhereInput, {
    nullable: true,
  })
  some?: CampaignEmailScheduleWhereInput;

  @ApiProperty({
    required: false,
    type: () => CampaignEmailScheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => CampaignEmailScheduleWhereInput)
  @IsOptional()
  @Field(() => CampaignEmailScheduleWhereInput, {
    nullable: true,
  })
  none?: CampaignEmailScheduleWhereInput;
}
export { CampaignEmailScheduleListRelationFilter as CampaignEmailScheduleListRelationFilter };
