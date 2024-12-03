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
import { MaterialRequestPlanItemWhereInput } from "./MaterialRequestPlanItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MaterialRequestPlanItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MaterialRequestPlanItemWhereInput,
  })
  @ValidateNested()
  @Type(() => MaterialRequestPlanItemWhereInput)
  @IsOptional()
  @Field(() => MaterialRequestPlanItemWhereInput, {
    nullable: true,
  })
  every?: MaterialRequestPlanItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => MaterialRequestPlanItemWhereInput,
  })
  @ValidateNested()
  @Type(() => MaterialRequestPlanItemWhereInput)
  @IsOptional()
  @Field(() => MaterialRequestPlanItemWhereInput, {
    nullable: true,
  })
  some?: MaterialRequestPlanItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => MaterialRequestPlanItemWhereInput,
  })
  @ValidateNested()
  @Type(() => MaterialRequestPlanItemWhereInput)
  @IsOptional()
  @Field(() => MaterialRequestPlanItemWhereInput, {
    nullable: true,
  })
  none?: MaterialRequestPlanItemWhereInput;
}
export { MaterialRequestPlanItemListRelationFilter as MaterialRequestPlanItemListRelationFilter };
