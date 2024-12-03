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
import { ProductionPlanSalesOrderWhereInput } from "./ProductionPlanSalesOrderWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductionPlanSalesOrderListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProductionPlanSalesOrderWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductionPlanSalesOrderWhereInput)
  @IsOptional()
  @Field(() => ProductionPlanSalesOrderWhereInput, {
    nullable: true,
  })
  every?: ProductionPlanSalesOrderWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductionPlanSalesOrderWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductionPlanSalesOrderWhereInput)
  @IsOptional()
  @Field(() => ProductionPlanSalesOrderWhereInput, {
    nullable: true,
  })
  some?: ProductionPlanSalesOrderWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductionPlanSalesOrderWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductionPlanSalesOrderWhereInput)
  @IsOptional()
  @Field(() => ProductionPlanSalesOrderWhereInput, {
    nullable: true,
  })
  none?: ProductionPlanSalesOrderWhereInput;
}
export { ProductionPlanSalesOrderListRelationFilter as ProductionPlanSalesOrderListRelationFilter };
