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
import { PurchaseOrderItemSuppliedWhereInput } from "./PurchaseOrderItemSuppliedWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PurchaseOrderItemSuppliedListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PurchaseOrderItemSuppliedWhereInput,
  })
  @ValidateNested()
  @Type(() => PurchaseOrderItemSuppliedWhereInput)
  @IsOptional()
  @Field(() => PurchaseOrderItemSuppliedWhereInput, {
    nullable: true,
  })
  every?: PurchaseOrderItemSuppliedWhereInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseOrderItemSuppliedWhereInput,
  })
  @ValidateNested()
  @Type(() => PurchaseOrderItemSuppliedWhereInput)
  @IsOptional()
  @Field(() => PurchaseOrderItemSuppliedWhereInput, {
    nullable: true,
  })
  some?: PurchaseOrderItemSuppliedWhereInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseOrderItemSuppliedWhereInput,
  })
  @ValidateNested()
  @Type(() => PurchaseOrderItemSuppliedWhereInput)
  @IsOptional()
  @Field(() => PurchaseOrderItemSuppliedWhereInput, {
    nullable: true,
  })
  none?: PurchaseOrderItemSuppliedWhereInput;
}
export { PurchaseOrderItemSuppliedListRelationFilter as PurchaseOrderItemSuppliedListRelationFilter };
