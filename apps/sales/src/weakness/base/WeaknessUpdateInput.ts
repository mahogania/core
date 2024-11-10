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
import { BusinessWhereUniqueInput } from "../../business/base/BusinessWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { FeatureUpdateManyWithoutWeaknessesInput } from "./FeatureUpdateManyWithoutWeaknessesInput";

@InputType()
class WeaknessUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BusinessWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BusinessWhereUniqueInput)
  @IsOptional()
  @Field(() => BusinessWhereUniqueInput, {
    nullable: true,
  })
  competitor?: BusinessWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => FeatureUpdateManyWithoutWeaknessesInput,
  })
  @ValidateNested()
  @Type(() => FeatureUpdateManyWithoutWeaknessesInput)
  @IsOptional()
  @Field(() => FeatureUpdateManyWithoutWeaknessesInput, {
    nullable: true,
  })
  features?: FeatureUpdateManyWithoutWeaknessesInput;
}

export { WeaknessUpdateInput as WeaknessUpdateInput };