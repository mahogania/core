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
import { BattlePetQualityWhereInput } from "./BattlePetQualityWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BattlePetQualityListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BattlePetQualityWhereInput,
  })
  @ValidateNested()
  @Type(() => BattlePetQualityWhereInput)
  @IsOptional()
  @Field(() => BattlePetQualityWhereInput, {
    nullable: true,
  })
  every?: BattlePetQualityWhereInput;

  @ApiProperty({
    required: false,
    type: () => BattlePetQualityWhereInput,
  })
  @ValidateNested()
  @Type(() => BattlePetQualityWhereInput)
  @IsOptional()
  @Field(() => BattlePetQualityWhereInput, {
    nullable: true,
  })
  some?: BattlePetQualityWhereInput;

  @ApiProperty({
    required: false,
    type: () => BattlePetQualityWhereInput,
  })
  @ValidateNested()
  @Type(() => BattlePetQualityWhereInput)
  @IsOptional()
  @Field(() => BattlePetQualityWhereInput, {
    nullable: true,
  })
  none?: BattlePetQualityWhereInput;
}
export { BattlePetQualityListRelationFilter as BattlePetQualityListRelationFilter };