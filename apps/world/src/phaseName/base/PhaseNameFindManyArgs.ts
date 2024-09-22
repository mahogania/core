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
import { PhaseNameWhereInput } from "./PhaseNameWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PhaseNameOrderByInput } from "./PhaseNameOrderByInput";

@ArgsType()
class PhaseNameFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PhaseNameWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PhaseNameWhereInput, { nullable: true })
  @Type(() => PhaseNameWhereInput)
  where?: PhaseNameWhereInput;

  @ApiProperty({
    required: false,
    type: [PhaseNameOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PhaseNameOrderByInput], { nullable: true })
  @Type(() => PhaseNameOrderByInput)
  orderBy?: Array<PhaseNameOrderByInput>;

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

export { PhaseNameFindManyArgs as PhaseNameFindManyArgs };
