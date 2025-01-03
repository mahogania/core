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
import { ProductionPlanItemWhereInput } from "./ProductionPlanItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProductionPlanItemOrderByInput } from "./ProductionPlanItemOrderByInput";

@ArgsType()
class ProductionPlanItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProductionPlanItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProductionPlanItemWhereInput, { nullable: true })
  @Type(() => ProductionPlanItemWhereInput)
  where?: ProductionPlanItemWhereInput;

  @ApiProperty({
    required: false,
    type: [ProductionPlanItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProductionPlanItemOrderByInput], { nullable: true })
  @Type(() => ProductionPlanItemOrderByInput)
  orderBy?: Array<ProductionPlanItemOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProductionPlanItemFindManyArgs as ProductionPlanItemFindManyArgs };
