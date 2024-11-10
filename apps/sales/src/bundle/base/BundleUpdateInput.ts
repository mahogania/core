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
import { ConfigurationWhereUniqueInput } from "../../configuration/base/ConfigurationWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Configuration } from "../../configuration/base/Configuration";
import { FeatureUpdateManyWithoutBundlesInput } from "./FeatureUpdateManyWithoutBundlesInput";

@InputType()
class BundleUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ConfigurationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ConfigurationWhereUniqueInput)
  @IsOptional()
  @Field(() => ConfigurationWhereUniqueInput, {
    nullable: true,
  })
  Configuration?: ConfigurationWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => FeatureUpdateManyWithoutBundlesInput,
  })
  @ValidateNested()
  @Type(() => FeatureUpdateManyWithoutBundlesInput)
  @IsOptional()
  @Field(() => FeatureUpdateManyWithoutBundlesInput, {
    nullable: true,
  })
  features?: FeatureUpdateManyWithoutBundlesInput;
}

export { BundleUpdateInput as BundleUpdateInput };
