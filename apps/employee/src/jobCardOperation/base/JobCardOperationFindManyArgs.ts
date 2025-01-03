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
import { JobCardOperationWhereInput } from "./JobCardOperationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { JobCardOperationOrderByInput } from "./JobCardOperationOrderByInput";

@ArgsType()
class JobCardOperationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => JobCardOperationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => JobCardOperationWhereInput, { nullable: true })
  @Type(() => JobCardOperationWhereInput)
  where?: JobCardOperationWhereInput;

  @ApiProperty({
    required: false,
    type: [JobCardOperationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [JobCardOperationOrderByInput], { nullable: true })
  @Type(() => JobCardOperationOrderByInput)
  orderBy?: Array<JobCardOperationOrderByInput>;

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

export { JobCardOperationFindManyArgs as JobCardOperationFindManyArgs };
