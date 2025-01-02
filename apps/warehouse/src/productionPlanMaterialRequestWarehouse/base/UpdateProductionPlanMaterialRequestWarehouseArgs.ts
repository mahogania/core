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
import { ProductionPlanMaterialRequestWarehouseWhereUniqueInput } from "./ProductionPlanMaterialRequestWarehouseWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProductionPlanMaterialRequestWarehouseUpdateInput } from "./ProductionPlanMaterialRequestWarehouseUpdateInput";

@ArgsType()
class UpdateProductionPlanMaterialRequestWarehouseArgs {
  @ApiProperty({
    required: true,
    type: () => ProductionPlanMaterialRequestWarehouseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductionPlanMaterialRequestWarehouseWhereUniqueInput)
  @Field(() => ProductionPlanMaterialRequestWarehouseWhereUniqueInput, {
    nullable: false,
  })
  where!: ProductionPlanMaterialRequestWarehouseWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProductionPlanMaterialRequestWarehouseUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProductionPlanMaterialRequestWarehouseUpdateInput)
  @Field(() => ProductionPlanMaterialRequestWarehouseUpdateInput, {
    nullable: false,
  })
  data!: ProductionPlanMaterialRequestWarehouseUpdateInput;
}

export { UpdateProductionPlanMaterialRequestWarehouseArgs as UpdateProductionPlanMaterialRequestWarehouseArgs };