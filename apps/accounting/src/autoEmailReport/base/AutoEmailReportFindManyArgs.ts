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
import { AutoEmailReportWhereInput } from "./AutoEmailReportWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AutoEmailReportOrderByInput } from "./AutoEmailReportOrderByInput";

@ArgsType()
class AutoEmailReportFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AutoEmailReportWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AutoEmailReportWhereInput, { nullable: true })
  @Type(() => AutoEmailReportWhereInput)
  where?: AutoEmailReportWhereInput;

  @ApiProperty({
    required: false,
    type: [AutoEmailReportOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AutoEmailReportOrderByInput], { nullable: true })
  @Type(() => AutoEmailReportOrderByInput)
  orderBy?: Array<AutoEmailReportOrderByInput>;

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

export { AutoEmailReportFindManyArgs as AutoEmailReportFindManyArgs };