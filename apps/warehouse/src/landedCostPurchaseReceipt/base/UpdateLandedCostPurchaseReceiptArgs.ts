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
import { LandedCostPurchaseReceiptWhereUniqueInput } from "./LandedCostPurchaseReceiptWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { LandedCostPurchaseReceiptUpdateInput } from "./LandedCostPurchaseReceiptUpdateInput";

@ArgsType()
class UpdateLandedCostPurchaseReceiptArgs {
  @ApiProperty({
    required: true,
    type: () => LandedCostPurchaseReceiptWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LandedCostPurchaseReceiptWhereUniqueInput)
  @Field(() => LandedCostPurchaseReceiptWhereUniqueInput, { nullable: false })
  where!: LandedCostPurchaseReceiptWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LandedCostPurchaseReceiptUpdateInput,
  })
  @ValidateNested()
  @Type(() => LandedCostPurchaseReceiptUpdateInput)
  @Field(() => LandedCostPurchaseReceiptUpdateInput, { nullable: false })
  data!: LandedCostPurchaseReceiptUpdateInput;
}

export { UpdateLandedCostPurchaseReceiptArgs as UpdateLandedCostPurchaseReceiptArgs };
