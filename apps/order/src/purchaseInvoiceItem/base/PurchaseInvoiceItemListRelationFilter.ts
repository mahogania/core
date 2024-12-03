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
import { PurchaseInvoiceItemWhereInput } from "./PurchaseInvoiceItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PurchaseInvoiceItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PurchaseInvoiceItemWhereInput,
  })
  @ValidateNested()
  @Type(() => PurchaseInvoiceItemWhereInput)
  @IsOptional()
  @Field(() => PurchaseInvoiceItemWhereInput, {
    nullable: true,
  })
  every?: PurchaseInvoiceItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseInvoiceItemWhereInput,
  })
  @ValidateNested()
  @Type(() => PurchaseInvoiceItemWhereInput)
  @IsOptional()
  @Field(() => PurchaseInvoiceItemWhereInput, {
    nullable: true,
  })
  some?: PurchaseInvoiceItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseInvoiceItemWhereInput,
  })
  @ValidateNested()
  @Type(() => PurchaseInvoiceItemWhereInput)
  @IsOptional()
  @Field(() => PurchaseInvoiceItemWhereInput, {
    nullable: true,
  })
  none?: PurchaseInvoiceItemWhereInput;
}
export { PurchaseInvoiceItemListRelationFilter as PurchaseInvoiceItemListRelationFilter };
