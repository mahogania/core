/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiscountWhereUniqueInput } from "../../discount/base/DiscountWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ConstraintWhereUniqueInput } from "../../constraint/base/ConstraintWhereUniqueInput";
import { FeatureWhereUniqueInput } from "../../feature/base/FeatureWhereUniqueInput";
import { PriceWhereUniqueInput } from "../../price/base/PriceWhereUniqueInput";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";

@InputType()
class OptionCreateInput {
  @ApiProperty({
    required: false,
    type: () => DiscountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DiscountWhereUniqueInput)
  @IsOptional()
  @Field(() => DiscountWhereUniqueInput, {
    nullable: true,
  })
  discount?: DiscountWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ConstraintWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ConstraintWhereUniqueInput)
  @IsOptional()
  @Field(() => ConstraintWhereUniqueInput, {
    nullable: true,
  })
  drivingConstraints?: ConstraintWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => FeatureWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FeatureWhereUniqueInput)
  @IsOptional()
  @Field(() => FeatureWhereUniqueInput, {
    nullable: true,
  })
  feature?: FeatureWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ConstraintWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ConstraintWhereUniqueInput)
  @IsOptional()
  @Field(() => ConstraintWhereUniqueInput, {
    nullable: true,
  })
  leadingConstraints?: ConstraintWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PriceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PriceWhereUniqueInput)
  @IsOptional()
  @Field(() => PriceWhereUniqueInput, {
    nullable: true,
  })
  price?: PriceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  product?: ProductWhereUniqueInput | null;
}

export { OptionCreateInput as OptionCreateInput };
