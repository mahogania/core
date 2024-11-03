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
import { LocationProfileWhereInput } from "./LocationProfileWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LocationProfileOrderByInput } from "./LocationProfileOrderByInput";

@ArgsType()
class LocationProfileFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LocationProfileWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LocationProfileWhereInput, { nullable: true })
  @Type(() => LocationProfileWhereInput)
  where?: LocationProfileWhereInput;

  @ApiProperty({
    required: false,
    type: [LocationProfileOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LocationProfileOrderByInput], { nullable: true })
  @Type(() => LocationProfileOrderByInput)
  orderBy?: Array<LocationProfileOrderByInput>;

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

export { LocationProfileFindManyArgs as LocationProfileFindManyArgs };
