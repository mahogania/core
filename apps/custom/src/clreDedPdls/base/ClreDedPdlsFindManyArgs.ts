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
import { ClreDedPdlsWhereInput } from "./ClreDedPdlsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ClreDedPdlsOrderByInput } from "./ClreDedPdlsOrderByInput";

@ArgsType()
class ClreDedPdlsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ClreDedPdlsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ClreDedPdlsWhereInput, { nullable: true })
  @Type(() => ClreDedPdlsWhereInput)
  where?: ClreDedPdlsWhereInput;

  @ApiProperty({
    required: false,
    type: [ClreDedPdlsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ClreDedPdlsOrderByInput], { nullable: true })
  @Type(() => ClreDedPdlsOrderByInput)
  orderBy?: Array<ClreDedPdlsOrderByInput>;

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

export { ClreDedPdlsFindManyArgs as ClreDedPdlsFindManyArgs };
