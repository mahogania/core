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
import { ProductionPlanItemReferenceWhereInput } from "./ProductionPlanItemReferenceWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ProductionPlanItemReferenceCountArgs {
  @ApiProperty({
    required: false,
    type: () => ProductionPlanItemReferenceWhereInput,
  })
  @Field(() => ProductionPlanItemReferenceWhereInput, { nullable: true })
  @Type(() => ProductionPlanItemReferenceWhereInput)
  where?: ProductionPlanItemReferenceWhereInput;
}

export { ProductionPlanItemReferenceCountArgs as ProductionPlanItemReferenceCountArgs };