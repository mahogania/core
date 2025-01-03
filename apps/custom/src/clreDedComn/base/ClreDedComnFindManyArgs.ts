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
import { ClreDedComnWhereInput } from "./ClreDedComnWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ClreDedComnOrderByInput } from "./ClreDedComnOrderByInput";

@ArgsType()
class ClreDedComnFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ClreDedComnWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ClreDedComnWhereInput, { nullable: true })
  @Type(() => ClreDedComnWhereInput)
  where?: ClreDedComnWhereInput;

  @ApiProperty({
    required: false,
    type: [ClreDedComnOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ClreDedComnOrderByInput], { nullable: true })
  @Type(() => ClreDedComnOrderByInput)
  orderBy?: Array<ClreDedComnOrderByInput>;

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

export { ClreDedComnFindManyArgs as ClreDedComnFindManyArgs };
