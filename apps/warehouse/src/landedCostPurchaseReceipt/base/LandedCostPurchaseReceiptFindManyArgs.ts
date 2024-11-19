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
import { LandedCostPurchaseReceiptWhereInput } from "./LandedCostPurchaseReceiptWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LandedCostPurchaseReceiptOrderByInput } from "./LandedCostPurchaseReceiptOrderByInput";

@ArgsType()
class LandedCostPurchaseReceiptFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LandedCostPurchaseReceiptWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LandedCostPurchaseReceiptWhereInput, { nullable: true })
  @Type(() => LandedCostPurchaseReceiptWhereInput)
  where?: LandedCostPurchaseReceiptWhereInput;

  @ApiProperty({
    required: false,
    type: [LandedCostPurchaseReceiptOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LandedCostPurchaseReceiptOrderByInput], { nullable: true })
  @Type(() => LandedCostPurchaseReceiptOrderByInput)
  orderBy?: Array<LandedCostPurchaseReceiptOrderByInput>;

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

export { LandedCostPurchaseReceiptFindManyArgs as LandedCostPurchaseReceiptFindManyArgs };