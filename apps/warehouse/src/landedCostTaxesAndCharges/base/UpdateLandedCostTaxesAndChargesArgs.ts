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
import { LandedCostTaxesAndChargesWhereUniqueInput } from "./LandedCostTaxesAndChargesWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { LandedCostTaxesAndChargesUpdateInput } from "./LandedCostTaxesAndChargesUpdateInput";

@ArgsType()
class UpdateLandedCostTaxesAndChargesArgs {
  @ApiProperty({
    required: true,
    type: () => LandedCostTaxesAndChargesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LandedCostTaxesAndChargesWhereUniqueInput)
  @Field(() => LandedCostTaxesAndChargesWhereUniqueInput, { nullable: false })
  where!: LandedCostTaxesAndChargesWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LandedCostTaxesAndChargesUpdateInput,
  })
  @ValidateNested()
  @Type(() => LandedCostTaxesAndChargesUpdateInput)
  @Field(() => LandedCostTaxesAndChargesUpdateInput, { nullable: false })
  data!: LandedCostTaxesAndChargesUpdateInput;
}

export { UpdateLandedCostTaxesAndChargesArgs as UpdateLandedCostTaxesAndChargesArgs };
