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
import { JumpChargeParamsWhereInput } from "./JumpChargeParamsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class JumpChargeParamsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => JumpChargeParamsWhereInput,
  })
  @ValidateNested()
  @Type(() => JumpChargeParamsWhereInput)
  @IsOptional()
  @Field(() => JumpChargeParamsWhereInput, {
    nullable: true,
  })
  every?: JumpChargeParamsWhereInput;

  @ApiProperty({
    required: false,
    type: () => JumpChargeParamsWhereInput,
  })
  @ValidateNested()
  @Type(() => JumpChargeParamsWhereInput)
  @IsOptional()
  @Field(() => JumpChargeParamsWhereInput, {
    nullable: true,
  })
  some?: JumpChargeParamsWhereInput;

  @ApiProperty({
    required: false,
    type: () => JumpChargeParamsWhereInput,
  })
  @ValidateNested()
  @Type(() => JumpChargeParamsWhereInput)
  @IsOptional()
  @Field(() => JumpChargeParamsWhereInput, {
    nullable: true,
  })
  none?: JumpChargeParamsWhereInput;
}
export { JumpChargeParamsListRelationFilter as JumpChargeParamsListRelationFilter };
