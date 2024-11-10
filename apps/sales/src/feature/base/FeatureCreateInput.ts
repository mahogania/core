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
import { OptionCreateNestedManyWithoutFeaturesInput } from "./OptionCreateNestedManyWithoutFeaturesInput";
import { StrengthCreateNestedManyWithoutFeaturesInput } from "./StrengthCreateNestedManyWithoutFeaturesInput";
import { WeaknessCreateNestedManyWithoutFeaturesInput } from "./WeaknessCreateNestedManyWithoutFeaturesInput";

@InputType()
class FeatureCreateInput {
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
    type: () => OptionCreateNestedManyWithoutFeaturesInput,
  })
  @ValidateNested()
  @Type(() => OptionCreateNestedManyWithoutFeaturesInput)
  @IsOptional()
  @Field(() => OptionCreateNestedManyWithoutFeaturesInput, {
    nullable: true,
  })
  options?: OptionCreateNestedManyWithoutFeaturesInput;

  @ApiProperty({
    required: false,
    type: () => StrengthCreateNestedManyWithoutFeaturesInput,
  })
  @ValidateNested()
  @Type(() => StrengthCreateNestedManyWithoutFeaturesInput)
  @IsOptional()
  @Field(() => StrengthCreateNestedManyWithoutFeaturesInput, {
    nullable: true,
  })
  strength?: StrengthCreateNestedManyWithoutFeaturesInput;

  @ApiProperty({
    required: false,
    type: () => WeaknessCreateNestedManyWithoutFeaturesInput,
  })
  @ValidateNested()
  @Type(() => WeaknessCreateNestedManyWithoutFeaturesInput)
  @IsOptional()
  @Field(() => WeaknessCreateNestedManyWithoutFeaturesInput, {
    nullable: true,
  })
  weaknesses?: WeaknessCreateNestedManyWithoutFeaturesInput;
}

export { FeatureCreateInput as FeatureCreateInput };
