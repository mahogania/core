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
import { SalesInvoiceTimesheetWhereInput } from "./SalesInvoiceTimesheetWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SalesInvoiceTimesheetListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SalesInvoiceTimesheetWhereInput,
  })
  @ValidateNested()
  @Type(() => SalesInvoiceTimesheetWhereInput)
  @IsOptional()
  @Field(() => SalesInvoiceTimesheetWhereInput, {
    nullable: true,
  })
  every?: SalesInvoiceTimesheetWhereInput;

  @ApiProperty({
    required: false,
    type: () => SalesInvoiceTimesheetWhereInput,
  })
  @ValidateNested()
  @Type(() => SalesInvoiceTimesheetWhereInput)
  @IsOptional()
  @Field(() => SalesInvoiceTimesheetWhereInput, {
    nullable: true,
  })
  some?: SalesInvoiceTimesheetWhereInput;

  @ApiProperty({
    required: false,
    type: () => SalesInvoiceTimesheetWhereInput,
  })
  @ValidateNested()
  @Type(() => SalesInvoiceTimesheetWhereInput)
  @IsOptional()
  @Field(() => SalesInvoiceTimesheetWhereInput, {
    nullable: true,
  })
  none?: SalesInvoiceTimesheetWhereInput;
}
export { SalesInvoiceTimesheetListRelationFilter as SalesInvoiceTimesheetListRelationFilter };