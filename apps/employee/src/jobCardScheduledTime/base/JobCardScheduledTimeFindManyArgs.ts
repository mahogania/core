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
import { JobCardScheduledTimeWhereInput } from "./JobCardScheduledTimeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { JobCardScheduledTimeOrderByInput } from "./JobCardScheduledTimeOrderByInput";

@ArgsType()
class JobCardScheduledTimeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => JobCardScheduledTimeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => JobCardScheduledTimeWhereInput, { nullable: true })
  @Type(() => JobCardScheduledTimeWhereInput)
  where?: JobCardScheduledTimeWhereInput;

  @ApiProperty({
    required: false,
    type: [JobCardScheduledTimeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [JobCardScheduledTimeOrderByInput], { nullable: true })
  @Type(() => JobCardScheduledTimeOrderByInput)
  orderBy?: Array<JobCardScheduledTimeOrderByInput>;

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

export { JobCardScheduledTimeFindManyArgs as JobCardScheduledTimeFindManyArgs };