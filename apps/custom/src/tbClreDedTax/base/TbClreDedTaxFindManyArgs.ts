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
import { TbClreDedTaxWhereInput } from "./TbClreDedTaxWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TbClreDedTaxOrderByInput } from "./TbClreDedTaxOrderByInput";

@ArgsType()
class TbClreDedTaxFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TbClreDedTaxWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TbClreDedTaxWhereInput, { nullable: true })
  @Type(() => TbClreDedTaxWhereInput)
  where?: TbClreDedTaxWhereInput;

  @ApiProperty({
    required: false,
    type: [TbClreDedTaxOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TbClreDedTaxOrderByInput], { nullable: true })
  @Type(() => TbClreDedTaxOrderByInput)
  orderBy?: Array<TbClreDedTaxOrderByInput>;

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

export { TbClreDedTaxFindManyArgs as TbClreDedTaxFindManyArgs };
