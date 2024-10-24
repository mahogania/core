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
import { StrengthWhereUniqueInput } from "../../strength/base/StrengthWhereUniqueInput";
import { WeaknessWhereUniqueInput } from "../../weakness/base/WeaknessWhereUniqueInput";

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
    type: () => StrengthWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StrengthWhereUniqueInput)
  @IsOptional()
  @Field(() => StrengthWhereUniqueInput, {
    nullable: true,
  })
  strength?: StrengthWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => WeaknessWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WeaknessWhereUniqueInput)
  @IsOptional()
  @Field(() => WeaknessWhereUniqueInput, {
    nullable: true,
  })
  weakness?: WeaknessWhereUniqueInput | null;
}

export { FeatureCreateInput as FeatureCreateInput };
