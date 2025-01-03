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
import { CampaignEmailScheduleWhereInput } from "./CampaignEmailScheduleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CampaignEmailScheduleOrderByInput } from "./CampaignEmailScheduleOrderByInput";

@ArgsType()
class CampaignEmailScheduleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CampaignEmailScheduleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CampaignEmailScheduleWhereInput, { nullable: true })
  @Type(() => CampaignEmailScheduleWhereInput)
  where?: CampaignEmailScheduleWhereInput;

  @ApiProperty({
    required: false,
    type: [CampaignEmailScheduleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CampaignEmailScheduleOrderByInput], { nullable: true })
  @Type(() => CampaignEmailScheduleOrderByInput)
  orderBy?: Array<CampaignEmailScheduleOrderByInput>;

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

export { CampaignEmailScheduleFindManyArgs as CampaignEmailScheduleFindManyArgs };
