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
import { LandedCostTaxesAndChargesWhereInput } from "./LandedCostTaxesAndChargesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LandedCostTaxesAndChargesOrderByInput } from "./LandedCostTaxesAndChargesOrderByInput";

@ArgsType()
class LandedCostTaxesAndChargesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LandedCostTaxesAndChargesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LandedCostTaxesAndChargesWhereInput, { nullable: true })
  @Type(() => LandedCostTaxesAndChargesWhereInput)
  where?: LandedCostTaxesAndChargesWhereInput;

  @ApiProperty({
    required: false,
    type: [LandedCostTaxesAndChargesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LandedCostTaxesAndChargesOrderByInput], { nullable: true })
  @Type(() => LandedCostTaxesAndChargesOrderByInput)
  orderBy?: Array<LandedCostTaxesAndChargesOrderByInput>;

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

export { LandedCostTaxesAndChargesFindManyArgs as LandedCostTaxesAndChargesFindManyArgs };
