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
import { ClreDedCoWhereInput } from "./ClreDedCoWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ClreDedCoOrderByInput } from "./ClreDedCoOrderByInput";

@ArgsType()
class ClreDedCoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ClreDedCoWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ClreDedCoWhereInput, { nullable: true })
  @Type(() => ClreDedCoWhereInput)
  where?: ClreDedCoWhereInput;

  @ApiProperty({
    required: false,
    type: [ClreDedCoOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ClreDedCoOrderByInput], { nullable: true })
  @Type(() => ClreDedCoOrderByInput)
  orderBy?: Array<ClreDedCoOrderByInput>;

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

export { ClreDedCoFindManyArgs as ClreDedCoFindManyArgs };
