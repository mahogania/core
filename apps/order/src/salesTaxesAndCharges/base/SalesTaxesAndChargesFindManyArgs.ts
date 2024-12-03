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
import { SalesTaxesAndChargesWhereInput } from "./SalesTaxesAndChargesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SalesTaxesAndChargesOrderByInput } from "./SalesTaxesAndChargesOrderByInput";

@ArgsType()
class SalesTaxesAndChargesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SalesTaxesAndChargesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SalesTaxesAndChargesWhereInput, { nullable: true })
  @Type(() => SalesTaxesAndChargesWhereInput)
  where?: SalesTaxesAndChargesWhereInput;

  @ApiProperty({
    required: false,
    type: [SalesTaxesAndChargesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SalesTaxesAndChargesOrderByInput], { nullable: true })
  @Type(() => SalesTaxesAndChargesOrderByInput)
  orderBy?: Array<SalesTaxesAndChargesOrderByInput>;

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

export { SalesTaxesAndChargesFindManyArgs as SalesTaxesAndChargesFindManyArgs };
