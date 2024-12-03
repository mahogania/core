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
import { ProductBundleItemWhereInput } from "./ProductBundleItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductBundleItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProductBundleItemWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductBundleItemWhereInput)
  @IsOptional()
  @Field(() => ProductBundleItemWhereInput, {
    nullable: true,
  })
  every?: ProductBundleItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductBundleItemWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductBundleItemWhereInput)
  @IsOptional()
  @Field(() => ProductBundleItemWhereInput, {
    nullable: true,
  })
  some?: ProductBundleItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductBundleItemWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductBundleItemWhereInput)
  @IsOptional()
  @Field(() => ProductBundleItemWhereInput, {
    nullable: true,
  })
  none?: ProductBundleItemWhereInput;
}
export { ProductBundleItemListRelationFilter as ProductBundleItemListRelationFilter };
