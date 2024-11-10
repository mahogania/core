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
import { CostCenterWhereInput } from "./CostCenterWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CostCenterListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CostCenterWhereInput,
  })
  @ValidateNested()
  @Type(() => CostCenterWhereInput)
  @IsOptional()
  @Field(() => CostCenterWhereInput, {
    nullable: true,
  })
  every?: CostCenterWhereInput;

  @ApiProperty({
    required: false,
    type: () => CostCenterWhereInput,
  })
  @ValidateNested()
  @Type(() => CostCenterWhereInput)
  @IsOptional()
  @Field(() => CostCenterWhereInput, {
    nullable: true,
  })
  some?: CostCenterWhereInput;

  @ApiProperty({
    required: false,
    type: () => CostCenterWhereInput,
  })
  @ValidateNested()
  @Type(() => CostCenterWhereInput)
  @IsOptional()
  @Field(() => CostCenterWhereInput, {
    nullable: true,
  })
  none?: CostCenterWhereInput;
}
export { CostCenterListRelationFilter as CostCenterListRelationFilter };