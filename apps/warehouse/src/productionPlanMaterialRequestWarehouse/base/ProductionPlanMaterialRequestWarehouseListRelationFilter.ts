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
import { ProductionPlanMaterialRequestWarehouseWhereInput } from "./ProductionPlanMaterialRequestWarehouseWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductionPlanMaterialRequestWarehouseListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProductionPlanMaterialRequestWarehouseWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductionPlanMaterialRequestWarehouseWhereInput)
  @IsOptional()
  @Field(() => ProductionPlanMaterialRequestWarehouseWhereInput, {
    nullable: true,
  })
  every?: ProductionPlanMaterialRequestWarehouseWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductionPlanMaterialRequestWarehouseWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductionPlanMaterialRequestWarehouseWhereInput)
  @IsOptional()
  @Field(() => ProductionPlanMaterialRequestWarehouseWhereInput, {
    nullable: true,
  })
  some?: ProductionPlanMaterialRequestWarehouseWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductionPlanMaterialRequestWarehouseWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductionPlanMaterialRequestWarehouseWhereInput)
  @IsOptional()
  @Field(() => ProductionPlanMaterialRequestWarehouseWhereInput, {
    nullable: true,
  })
  none?: ProductionPlanMaterialRequestWarehouseWhereInput;
}
export { ProductionPlanMaterialRequestWarehouseListRelationFilter as ProductionPlanMaterialRequestWarehouseListRelationFilter };
