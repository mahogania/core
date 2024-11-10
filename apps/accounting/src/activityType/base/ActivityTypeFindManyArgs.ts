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
import { ActivityTypeWhereInput } from "./ActivityTypeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ActivityTypeOrderByInput } from "./ActivityTypeOrderByInput";

@ArgsType()
class ActivityTypeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ActivityTypeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ActivityTypeWhereInput, { nullable: true })
  @Type(() => ActivityTypeWhereInput)
  where?: ActivityTypeWhereInput;

  @ApiProperty({
    required: false,
    type: [ActivityTypeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ActivityTypeOrderByInput], { nullable: true })
  @Type(() => ActivityTypeOrderByInput)
  orderBy?: Array<ActivityTypeOrderByInput>;

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

export { ActivityTypeFindManyArgs as ActivityTypeFindManyArgs };
