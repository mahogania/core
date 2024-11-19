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
import { DashboardSettingsWhereInput } from "./DashboardSettingsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DashboardSettingsOrderByInput } from "./DashboardSettingsOrderByInput";

@ArgsType()
class DashboardSettingsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DashboardSettingsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DashboardSettingsWhereInput, { nullable: true })
  @Type(() => DashboardSettingsWhereInput)
  where?: DashboardSettingsWhereInput;

  @ApiProperty({
    required: false,
    type: [DashboardSettingsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DashboardSettingsOrderByInput], { nullable: true })
  @Type(() => DashboardSettingsOrderByInput)
  orderBy?: Array<DashboardSettingsOrderByInput>;

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

export { DashboardSettingsFindManyArgs as DashboardSettingsFindManyArgs };