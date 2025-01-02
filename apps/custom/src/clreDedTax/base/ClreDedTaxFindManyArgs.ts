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
import { ClreDedTaxWhereInput } from "./ClreDedTaxWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ClreDedTaxOrderByInput } from "./ClreDedTaxOrderByInput";

@ArgsType()
class ClreDedTaxFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ClreDedTaxWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ClreDedTaxWhereInput, { nullable: true })
  @Type(() => ClreDedTaxWhereInput)
  where?: ClreDedTaxWhereInput;

  @ApiProperty({
    required: false,
    type: [ClreDedTaxOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ClreDedTaxOrderByInput], { nullable: true })
  @Type(() => ClreDedTaxOrderByInput)
  orderBy?: Array<ClreDedTaxOrderByInput>;

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

export { ClreDedTaxFindManyArgs as ClreDedTaxFindManyArgs };
