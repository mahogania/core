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
import { HolidayListWhereInput } from "./HolidayListWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { HolidayListOrderByInput } from "./HolidayListOrderByInput";

@ArgsType()
class HolidayListFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HolidayListWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => HolidayListWhereInput, { nullable: true })
  @Type(() => HolidayListWhereInput)
  where?: HolidayListWhereInput;

  @ApiProperty({
    required: false,
    type: [HolidayListOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [HolidayListOrderByInput], { nullable: true })
  @Type(() => HolidayListOrderByInput)
  orderBy?: Array<HolidayListOrderByInput>;

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

export { HolidayListFindManyArgs as HolidayListFindManyArgs };