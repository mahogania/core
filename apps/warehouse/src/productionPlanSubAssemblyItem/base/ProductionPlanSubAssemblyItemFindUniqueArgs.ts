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
import { ProductionPlanSubAssemblyItemWhereUniqueInput } from "./ProductionPlanSubAssemblyItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class ProductionPlanSubAssemblyItemFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => ProductionPlanSubAssemblyItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductionPlanSubAssemblyItemWhereUniqueInput)
  @Field(() => ProductionPlanSubAssemblyItemWhereUniqueInput, {
    nullable: false,
  })
  where!: ProductionPlanSubAssemblyItemWhereUniqueInput;
}

export { ProductionPlanSubAssemblyItemFindUniqueArgs as ProductionPlanSubAssemblyItemFindUniqueArgs };
