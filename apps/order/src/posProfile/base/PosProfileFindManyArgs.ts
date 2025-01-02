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
import { PosProfileWhereInput } from "./PosProfileWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PosProfileOrderByInput } from "./PosProfileOrderByInput";

@ArgsType()
class PosProfileFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PosProfileWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PosProfileWhereInput, { nullable: true })
  @Type(() => PosProfileWhereInput)
  where?: PosProfileWhereInput;

  @ApiProperty({
    required: false,
    type: [PosProfileOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PosProfileOrderByInput], { nullable: true })
  @Type(() => PosProfileOrderByInput)
  orderBy?: Array<PosProfileOrderByInput>;

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

export { PosProfileFindManyArgs as PosProfileFindManyArgs };