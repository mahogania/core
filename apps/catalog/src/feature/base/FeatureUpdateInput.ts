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
import { BundleWhereUniqueInput } from "../../bundle/base/BundleWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { OptionUpdateManyWithoutFeaturesInput } from "./OptionUpdateManyWithoutFeaturesInput";
import { StrengthUpdateManyWithoutFeaturesInput } from "./StrengthUpdateManyWithoutFeaturesInput";
import { WeaknessUpdateManyWithoutFeaturesInput } from "./WeaknessUpdateManyWithoutFeaturesInput";

@InputType()
class FeatureUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BundleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BundleWhereUniqueInput)
  @IsOptional()
  @Field(() => BundleWhereUniqueInput, {
    nullable: true,
  })
  bundle?: BundleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  displayName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => OptionUpdateManyWithoutFeaturesInput,
  })
  @ValidateNested()
  @Type(() => OptionUpdateManyWithoutFeaturesInput)
  @IsOptional()
  @Field(() => OptionUpdateManyWithoutFeaturesInput, {
    nullable: true,
  })
  options?: OptionUpdateManyWithoutFeaturesInput;

  @ApiProperty({
    required: false,
    type: () => StrengthUpdateManyWithoutFeaturesInput,
  })
  @ValidateNested()
  @Type(() => StrengthUpdateManyWithoutFeaturesInput)
  @IsOptional()
  @Field(() => StrengthUpdateManyWithoutFeaturesInput, {
    nullable: true,
  })
  strength?: StrengthUpdateManyWithoutFeaturesInput;

  @ApiProperty({
    required: false,
    type: () => WeaknessUpdateManyWithoutFeaturesInput,
  })
  @ValidateNested()
  @Type(() => WeaknessUpdateManyWithoutFeaturesInput)
  @IsOptional()
  @Field(() => WeaknessUpdateManyWithoutFeaturesInput, {
    nullable: true,
  })
  weaknesses?: WeaknessUpdateManyWithoutFeaturesInput;
}

export { FeatureUpdateInput as FeatureUpdateInput };
