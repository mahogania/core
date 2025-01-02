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
import { ClreDedCntrWhereInput } from "./ClreDedCntrWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ClreDedCntrOrderByInput } from "./ClreDedCntrOrderByInput";

@ArgsType()
class ClreDedCntrFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ClreDedCntrWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ClreDedCntrWhereInput, { nullable: true })
  @Type(() => ClreDedCntrWhereInput)
  where?: ClreDedCntrWhereInput;

  @ApiProperty({
    required: false,
    type: [ClreDedCntrOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ClreDedCntrOrderByInput], { nullable: true })
  @Type(() => ClreDedCntrOrderByInput)
  orderBy?: Array<ClreDedCntrOrderByInput>;

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

export { ClreDedCntrFindManyArgs as ClreDedCntrFindManyArgs };