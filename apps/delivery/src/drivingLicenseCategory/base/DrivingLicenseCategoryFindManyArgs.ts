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
import { DrivingLicenseCategoryWhereInput } from "./DrivingLicenseCategoryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DrivingLicenseCategoryOrderByInput } from "./DrivingLicenseCategoryOrderByInput";

@ArgsType()
class DrivingLicenseCategoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DrivingLicenseCategoryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DrivingLicenseCategoryWhereInput, { nullable: true })
  @Type(() => DrivingLicenseCategoryWhereInput)
  where?: DrivingLicenseCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: [DrivingLicenseCategoryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DrivingLicenseCategoryOrderByInput], { nullable: true })
  @Type(() => DrivingLicenseCategoryOrderByInput)
  orderBy?: Array<DrivingLicenseCategoryOrderByInput>;

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

export { DrivingLicenseCategoryFindManyArgs as DrivingLicenseCategoryFindManyArgs };
