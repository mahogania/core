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
import { PosInvoiceWhereInput } from "./PosInvoiceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PosInvoiceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PosInvoiceWhereInput,
  })
  @ValidateNested()
  @Type(() => PosInvoiceWhereInput)
  @IsOptional()
  @Field(() => PosInvoiceWhereInput, {
    nullable: true,
  })
  every?: PosInvoiceWhereInput;

  @ApiProperty({
    required: false,
    type: () => PosInvoiceWhereInput,
  })
  @ValidateNested()
  @Type(() => PosInvoiceWhereInput)
  @IsOptional()
  @Field(() => PosInvoiceWhereInput, {
    nullable: true,
  })
  some?: PosInvoiceWhereInput;

  @ApiProperty({
    required: false,
    type: () => PosInvoiceWhereInput,
  })
  @ValidateNested()
  @Type(() => PosInvoiceWhereInput)
  @IsOptional()
  @Field(() => PosInvoiceWhereInput, {
    nullable: true,
  })
  none?: PosInvoiceWhereInput;
}
export { PosInvoiceListRelationFilter as PosInvoiceListRelationFilter };